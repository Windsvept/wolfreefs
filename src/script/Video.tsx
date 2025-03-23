import React, { CSSProperties, useCallback, useEffect, useRef } from "react";

import { useIsVisible } from "./useIsVisible.tsx";

type VideoComponentProps = {
  src: string;
  poster?: string;
  alt?: string;
  style?: CSSProperties;
};

export const VideoComponent = ({
  src,
  poster,
  style,
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

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current?.play();
    } catch (e) {
      // do nothing
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
        preload="none"
        playsInline
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%"
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
};
