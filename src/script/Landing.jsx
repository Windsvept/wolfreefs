import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { Container, Eyebrow, Button, ScrollButton, PHONE_DISPLAY, PHONE_LINK } from './ui';

const LandingContainer = styled('section')`
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 100vh;
    height: 100svh;
    min-height: 560px;
    overflow: hidden;
    background: var(--bg);
`;

// Fills the screen at any shape, cropping the edges instead of leaving gaps
const MainVideo = styled('video')`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

// Darkens the bottom-left so the headline stays readable over the video
const Shade = styled('div')`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(4, 4, 24, 0.25) 0%, rgba(4, 4, 24, 0) 35%, rgba(4, 4, 24, 0.55) 70%, var(--bg) 100%),
        linear-gradient(90deg, rgba(4, 4, 24, 0.55) 0%, rgba(4, 4, 24, 0) 60%);
`;

const Content = styled(Container)`
    position: relative;
    z-index: 1;
    padding-bottom: clamp(72px, 14vh, 140px);
`;

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
`;

const Copy = styled('div')`
    max-width: 680px;
    animation: ${fadeUp} 1s cubic-bezier(0.2, 0.7, 0.2, 1) both;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const Headline = styled('h1')`
    margin: 0;
    font-size: clamp(3rem, 8vw, 6.5rem);
    line-height: 0.98;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.45);

    span {
        display: block;
        background: linear-gradient(90deg, var(--accent), var(--accent-2));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: none;
    }
`;

const Tagline = styled('p')`
    margin: 20px 0 0;
    max-width: 520px;
    font-size: clamp(1.05rem, 1.6vw, 1.25rem);
    color: rgba(238, 242, 255, 0.88);
`;

const Actions = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
`;

const bob = keyframes`
    0%, 100% { transform: translate(-50%, 0); opacity: 0.7; }
    50% { transform: translate(-50%, 8px); opacity: 1; }
`;

const ScrollHint = styled('div')`
    position: absolute;
    left: 50%;
    bottom: 24px;
    z-index: 1;
    width: 26px;
    height: 42px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 14px;
    box-sizing: border-box;
    transform: translateX(-50%);

    &::after {
        content: "";
        position: absolute;
        top: 8px;
        left: 50%;
        width: 4px;
        height: 8px;
        margin-left: -2px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.8);
        animation: ${bob} 1.8s ease-in-out infinite;
    }

    @media (max-height: 640px) {
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        &::after { animation: none; }
    }
`;

export const Landing = () => {
    const videoRef = useRef(null);

    // iPhone Safari only autoplays when the video is muted as an attribute,
    // which React doesn't add on its own, so set it and start playback here.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute("muted", "");
        const attempt = video.play();
        if (attempt && attempt.catch) {
            // Blocked (e.g. Low Power Mode): the first frame still shows as a still image
            attempt.catch(() => {});
        }
    }, []);

    return (
        <LandingContainer id="Home">
            <MainVideo
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                aria-label="Reef aquarium maintained by Wolf Aquariums"
            >
                <source src="https://r2.wolfreefs.com/background.mp4#t=0.001" type="video/mp4"></source>
            </MainVideo>
            <Shade />
            <Content>
                <Copy>
                    <Eyebrow>Orange County Aquarium Service</Eyebrow>
                    <Headline>
                        Create Your <span>Dream Aquarium</span>
                    </Headline>
                    <Tagline>
                        Saltwater reef and freshwater tank setup, custom design, and weekly maintenance, with 24/7 support.
                    </Tagline>
                    <Actions>
                        <Button href={PHONE_LINK}>Call {PHONE_DISPLAY}</Button>
                        <ScrollButton $variant="ghost" smooth offset={-64} to="Gallery" href="#Gallery">See our work</ScrollButton>
                    </Actions>
                </Copy>
            </Content>
            <ScrollHint aria-hidden="true" />
        </LandingContainer>
    )
}

export default Landing;
