import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

import { useIsVisible } from "./useIsVisible.tsx";

type VideoComponentProps = {
  src: string;
  poster?: string;
  alt?: string;
  style?: CSSProperties;
  videoStyle?: CSSProperties;
};

export const VideoComponent = ({
  src,
  poster,
  style,
  videoStyle,
  alt,
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "-120px",
      threshold: 0.1,
    },
    false,
  );

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
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

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
