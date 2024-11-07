import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from "styled-components";

import useWindowDimensions from './windowDimension';

const Breakpoint = css`
    @media (max-width: 1600px) {
        font-size: 50px;
    }

    @media (max-width: 800px) {
        font-size: 30px;
    }
    
    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const correctVidRatio = css`
    height: 100%;
    right: 0;
    top: calc(50vh - 50%);
    @media (max-width: 1050px) {
        height: 100%;
        ${({vidWidth, windowWidth }) => {
            if (windowWidth > vidWidth - (1.4 * windowWidth)) {
                return "right: 0";
            } else {
                return "left: -140vw"
            }
        }};
        top: 0;
    }

    @media (max-width: 900px) {
        height: 100%;
        ${({vidWidth, windowWidth }) => {
            if (windowWidth > vidWidth - (1.4 * windowWidth)) {
                return "right: 0";
            } else {
                return "left: -140vw"
            }
        }};
        top: 0;
    }

    @media (max-width: 800px) {
        height: 100%;
        ${({vidWidth, windowWidth }) => {
            if (windowWidth > vidWidth - (1.4 * windowWidth)) {
                return "right: 0";
            } else {
                return "left: -140vw"
            }
        }};
        top: 0;
    }
    
    @media (max-width: 500px) {
        height: 100%;
        ${({vidWidth, windowWidth }) => {
            if (windowWidth > vidWidth - (2.25 * windowWidth)) {
                return "right: 0";
            } else {
                return "left: -225vw"
            }
        }};
        top: 0;
    }
`;

const wideVidRatio = css`
    width: 100%;
    bottom: 0;
`

const LandingContainer = styled('div')`
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;

    ${Breakpoint}
`;

const MainVideo = styled('video')`
    display: block;
    position: absolute;
    opacity: 1;
    overflow: hidden;
    z-index: 0;
    
    ${({ windowHeight, windowWidth }) => {
        var windowRatio = windowHeight / windowWidth;
        if (windowRatio < 0.5625) {
            return wideVidRatio;
        } else {
            return correctVidRatio;
        }
    }}

`;

const StickyText = styled('div')`
    display: flex;
    position: absolute;
    bottom: 7%;
    right: 5%;
    font-size: 50px;
    flex-direction: column;
    text-shadow: #000000d1 4px 0px 3px;
    z-index: 1;
    ${Breakpoint}
`;

const CreateYour = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin-right: 200px;

    @media (max-width: 800px) {
        display: flex;
        justify-content: flex-end;
        margin-right: 100px;
    }
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: flex-end;
        margin-right: 80px;
    }
`;

const DreamAquarium = styled('div')`
    display: flex;
    justify-content: flex-end;
`;


export const Landing = () => {
    const [vidHeight, setHeight] = useState(0);
    const [vidWidth, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            setHeight(entries[0].contentRect.height)
            setWidth(entries[0].contentRect.width)
        })
        let CurrentRef = ref.current;
        observer.observe(CurrentRef);
        return () => {
            CurrentRef && observer.unobserve(CurrentRef)
        }
    }, []);

    const { windowHeight, windowWidth } = useWindowDimensions();

    return (
        <LandingContainer id="Home">
            <MainVideo 
                autoPlay 
                loop 
                muted 
                ref={ref} 
                vidHeight={vidHeight} 
                vidWidth={vidWidth} 
                windowHeight={windowHeight} 
                windowWidth={windowWidth}
                allowsInlineMediaPlayback={true}
                playsInline
                controls={false}
            >
                <source src="https://r2.wolfreefs.com/background.mp4" type="video/mp4"></source>
            </MainVideo>
            <StickyText>
                <CreateYour>
                    Create Your
                </CreateYour>
                <DreamAquarium> 
                    Dream Aquarium
                </DreamAquarium>
            </StickyText>
        </LandingContainer>
    )
}

export default Landing;
