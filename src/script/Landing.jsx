import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { Container, Button, ScrollButton, PHONE_DISPLAY, PHONE_LINK } from './ui';

const LandingContainer = styled('section')`
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 100vh;
    height: 100svh;
    min-height: 600px;
`;

// The bottom edge of the video is cut into a wave, like the water's surface.
// It stays still on purpose: animating a cut-out makes the browser redraw the whole video each frame.
const WAVE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 64' preserveAspectRatio='none'%3E%3Cpath d='M0 0H1440V32C1320 64 1200 64 1080 32C960 0 840 0 720 32C600 64 480 64 360 32C240 0 120 0 0 32Z'/%3E%3C/svg%3E\")";

const Media = styled('div')`
    position: absolute;
    inset: 0;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(#000, #000), ${WAVE};
    mask-image: linear-gradient(#000, #000), ${WAVE};
    -webkit-mask-size: 100% calc(100% - 63px), 1440px 64px;
    mask-size: 100% calc(100% - 63px), 1440px 64px;
    -webkit-mask-repeat: no-repeat, repeat-x;
    mask-repeat: no-repeat, repeat-x;
    -webkit-mask-position: 0 0, 0 100%;
    mask-position: 0 0, 0 100%;
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

// Blue-green tint plus a darker lower left so the headline stays readable
const Shade = styled('div')`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(4, 40, 70, 0.3) 0%, rgba(4, 40, 70, 0) 35%, rgba(4, 40, 70, 0.55) 75%, rgba(8, 70, 105, 0.85) 100%),
        linear-gradient(90deg, rgba(3, 30, 55, 0.6) 0%, rgba(3, 30, 55, 0) 60%);
`;

const Content = styled(Container)`
    padding-bottom: clamp(100px, 17vh, 170px);
`;

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
`;

const Copy = styled('div')`
    max-width: 760px;
    animation: ${fadeUp} 1s cubic-bezier(0.2, 0.7, 0.2, 1) both;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const Headline = styled('h1')`
    margin: 0;
    font-size: clamp(3rem, 7.6vw, 6.4rem);
    font-weight: 600;
    line-height: 1;
    text-shadow: 0 4px 30px rgba(0, 20, 40, 0.5);

    span {
        display: block;
        color: var(--accent);
        text-shadow: 0 0 40px rgba(143, 240, 255, 0.45), 0 4px 30px rgba(0, 20, 40, 0.5);
    }
`;

const Tagline = styled('p')`
    max-width: 540px;
    margin: 22px 0 0;
    font-size: clamp(1.05rem, 1.6vw, 1.25rem);
    color: rgba(242, 251, 255, 0.92);
    text-shadow: 0 2px 12px rgba(0, 20, 40, 0.5);
`;

const Actions = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
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
            <Media>
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
            </Media>
            <Content>
                <Copy>
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
        </LandingContainer>
    )
}

export default Landing;
