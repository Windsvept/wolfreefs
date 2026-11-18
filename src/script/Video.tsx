import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

// How much of a video must be on screen before it starts playing
const VISIBLE_SHARE = 0.8;

type VideoComponentProps = {
  src: string;
  poster?: string;
  alt?: string;
  style?: CSSProperties;
  videoStyle?: CSSProperties;
  // false: never start on its own; just show the first frame (e.g. gallery tiles)
  autoPlayWhenVisible?: boolean;
};

export const VideoComponent = ({
  src,
  poster,
  style,
  videoStyle,
  alt,
  autoPlayWhenVisible = true,
}: VideoComponentProps) => {
  const targetRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Counts as "on screen" once 80% of the video is visible. A video taller than the
  // screen can never be 80% visible, so for those it's enough to fill 80% of the screen.
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    const steps = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(([entry]) => {
      const screenHeight = entry.rootBounds?.height || window.innerHeight;
      const fillsScreen = entry.intersectionRect.height >= screenHeight * VISIBLE_SHARE;
      setIsVisible(entry.intersectionRatio >= VISIBLE_SHARE - 0.001 || fillsScreen);
    }, { threshold: steps });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  // True when the browser refused to start the video on its own (e.g. iPhone Low Power Mode)
  const [needsTap, setNeedsTap] = useState(false);

  // React only sets the `muted` property; iPhone Safari also looks for the attribute
  // before it lets a video play without a tap.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
  }, []);

  const startVideoOnMouseMove = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      await video.play();
      setNeedsTap(false);
    } catch (e) {
      // Autoplay was blocked: show the normal controls so the visitor can tap play
      setNeedsTap(true);
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current?.pause();
    } catch (e) {
      // do nothing
    }
  }, []);

  useEffect(() => {
    if (isVisible && autoPlayWhenVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, autoPlayWhenVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <span
      ref={targetRef as any}
      style={{
        border: "5px solid black",
        margin: "2px",
        position: "relative",
        minHeight: "50px",
        height: "100%",
        ...style,
      }}
    >
      <video
        ref={videoRef as any}
        loop
        muted
        autoPlay={false}
        preload="metadata"
        playsInline
        controls={needsTap}
        poster={poster}
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
          ...videoStyle,
        }}
      >
        {/* "#t=0.001" makes iPhone Safari load and show the first frame instead of a blank box */}
        <source src={`${src}#t=0.001`} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
};
