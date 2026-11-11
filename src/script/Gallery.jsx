import styled from "styled-components";
import { VideoComponent } from "./Video.tsx";
import { Container, Section, SectionHeader, Reveal } from './ui';

import mainImg from '../images/mainPage.jpg';
import galleryImg from '../images/gallery_img.jpg';

// Column (masonry) layout: every photo and video keeps its own shape, nothing is cropped
const Masonry = styled('div')`
    columns: 3;
    column-gap: 20px;

    @media (max-width: 960px) {
        columns: 2;
    }

    @media (max-width: 560px) {
        columns: 1;
    }
`;

const Tile = styled('div')`
    break-inside: avoid;
    margin-bottom: 20px;
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface);
    transform: translateZ(0);

    img {
        display: block;
        width: 100%;
        height: auto;
        transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    &:hover img {
        transform: scale(1.04);
    }
`;

const VideoWrapperCss = {
    display: "block",
    width: "100%",
    height: "auto",
    minHeight: 0,
    margin: 0,
    border: "none",
};

const VideoCss = {
    height: "auto",
};

const StepsHeader = styled('div')`
    margin-top: clamp(64px, 9vw, 112px);
`;

const Steps = styled('ol')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: step;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Step = styled('li')`
    position: relative;

    img {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--radius);
        border: 1px solid var(--border);
    }
`;

const StepLabel = styled('span')`
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(4, 4, 24, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid var(--border);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
`;

export const Gallery = () => {
    const img1 = 'https://r2.wolfreefs.com/1.jpg';
    const img2 = 'https://r2.wolfreefs.com/2.jpg';
    const img3 = 'https://r2.wolfreefs.com/3.jpg';
    const vid4_2 = 'https://r2.wolfreefs.com/4-2.mp4';
    const vid5 = 'https://r2.wolfreefs.com/5.mp4';
    const step1 = 'https://r2.wolfreefs.com/IMG_1542.jpg';
    const step2 = 'https://r2.wolfreefs.com/IMG_1547.jpg';
    const step3 = 'https://r2.wolfreefs.com/IMG_1558.jpg';
    const step4 = 'https://r2.wolfreefs.com/IMG_1925.jpg';

    const steps = [
        { src: step1, label: 'Step 1', alt: 'New reef tank setup, step 1' },
        { src: step2, label: 'Step 2', alt: 'New reef tank setup, step 2' },
        { src: step3, label: 'Step 3', alt: 'New reef tank setup, step 3' },
        { src: step4, label: 'Finished', alt: 'New reef tank setup, finished aquarium' },
    ];

    return (
        <Section id="Gallery">
            <Container>
                <Reveal>
                    <SectionHeader
                        eyebrow="Gallery"
                        title="Aquarium Gallery"
                        lead="A look at tanks we've set up, designed, and maintained across Orange County."
                    />
                </Reveal>
                <Masonry>
                    <Tile><img src={mainImg} alt="Aquarium maintained by Wolf Aquariums" loading="lazy" /></Tile>
                    <Tile>
                        <VideoComponent src={vid4_2} alt="Video of an aquarium by Wolf Aquariums" style={VideoWrapperCss} videoStyle={VideoCss} />
                    </Tile>
                    <Tile><img src={img2} alt="Fish tank serviced by Wolf Aquariums" loading="lazy" /></Tile>
                    <Tile><img src={galleryImg} alt="Aquarium set up by Wolf Aquariums" loading="lazy" /></Tile>
                    <Tile><img src={img1} alt="Aquarium by Wolf Aquariums in Orange County" loading="lazy" /></Tile>
                    <Tile><img src={img3} alt="Aquarium by Wolf Aquariums" loading="lazy" /></Tile>
                    <Tile>
                        <VideoComponent src={vid5} alt="Video of an aquarium maintained by Wolf Aquariums" style={VideoWrapperCss} videoStyle={VideoCss} />
                    </Tile>
                </Masonry>

                <StepsHeader>
                    <Reveal>
                        <SectionHeader
                            eyebrow="New tank setup"
                            title="From Empty Tank to Thriving Reef"
                        />
                    </Reveal>
                </StepsHeader>
                <Steps>
                    {steps.map((step, i) => (
                        <Reveal as="li" key={step.label} delay={i * 100}>
                            <Step as="div">
                                <img src={step.src} alt={step.alt} loading="lazy" />
                                <StepLabel>{step.label}</StepLabel>
                            </Step>
                        </Reveal>
                    ))}
                </Steps>
            </Container>
        </Section>
    )
}

export default Gallery;
