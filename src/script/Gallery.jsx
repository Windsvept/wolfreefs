import { useCallback, useState } from "react";
import styled from "styled-components";
import { VideoComponent } from "./Video.tsx";
import { Lightbox } from "./Lightbox";
import { Container, Section, SectionHeader, Reveal } from './ui';

import euphylliaArchReef from '../images/mainPage.jpg';
import largeRimlessReef from '../images/gallery_img.jpg';
import builtInReef from '../images/gallery/built-in-reef-custom-cabinetry.jpg';
import rimlessReefLeds from '../images/gallery/rimless-reef-three-led-fixtures.jpg';
import treeCoralReef from '../images/gallery/mixed-reef-tree-coral.jpg';
import zoanthidReef from '../images/gallery/mixed-reef-zoanthids-clownfish.jpg';
import clownfishTangsReef from '../images/gallery/reef-clownfish-tangs.jpg';
import anemoneCloseup from '../images/gallery/reef-anemones-closeup.jpg';
import tangsAnemoneReef from '../images/gallery/reef-tangs-anemone.jpg';
import newNanoReef from '../images/gallery/new-nano-reef.jpg';
import candyCaneCoral from '../images/gallery/candy-cane-coral-closeup.jpg';
import plantedDiscus from '../images/gallery/planted-discus-tank.jpg';
import shipwreckTank from '../images/gallery/freshwater-shipwreck-tank.jpg';
import freshwaterSetup from '../images/gallery/freshwater-tank-setup.jpg';

const R2 = 'https://r2.wolfreefs.com/';
// Gallery videos are hosted on the R2 media server, like the site's other videos
const VIDEOS = R2;

// Every tile has alt text describing what's actually in the photo (read by Google and
// screen readers). Videos use `video` instead of `src`.
const saltwaterTanks = [
    {
        src: builtInReef,
        alt: "Built-in reef aquarium framed by white custom cabinetry above and below, glowing under blue LED lighting",
    },
    {
        src: largeRimlessReef,
        alt: "Large rimless reef tank with three pendant LED lights, open aquascape, tangs and clownfish over white sand",
    },
    {
        video: R2 + '4-2.mp4',
        alt: "Video of a reef aquarium maintained by Wolf Aquariums",
    },
    {
        src: clownfishTangsReef,
        alt: "Pair of clownfish above two blue hippo tangs and a yellow tang swimming past tree coral on live rock",
    },
    {
        src: rimlessReefLeds,
        alt: "Rimless reef aquarium under three LED fixtures, packed with soft and stony corals in a modern living room",
    },
    {
        video: VIDEOS + 'reef-green-soft-corals-blue-light.mp4',
        alt: "Video of a reef tank under blue light with green soft corals swaying over a white sand bed",
    },
    {
        src: zoanthidReef,
        alt: "Mixed reef with colonies of yellow zoanthids, green soft corals, mushroom corals and a black-and-white clownfish",
    },
    {
        video: VIDEOS + 'coral-banded-shrimp-soft-corals.mp4',
        alt: "Video of a banded coral shrimp walking among green soft corals and hammer corals",
    },
    {
        src: treeCoralReef,
        alt: "Mixed reef tank under blue LED pucks with branching tree coral and bright green soft corals across the rockwork",
    },
    {
        src: euphylliaArchReef,
        alt: "Reef tank with a live rock arch, torch, hammer and frogspawn corals, clownfish and a firefish over white sand",
    },
    {
        src: anemoneCloseup,
        alt: "Close-up of a reef tank with anemones, green star polyps, mushroom corals, a blue tang and a yellow tang",
    },
    {
        video: VIDEOS + 'yellow-tang-blue-tang-tree-coral.mp4',
        alt: "Video of a yellow tang and a blue tang swimming past tree coral and colorful live rock",
    },
    {
        src: R2 + '1.jpg',
        alt: "Pair of designer clownfish hosting in a toadstool leather coral on grey rockwork",
    },
    {
        src: tangsAnemoneReef,
        alt: "Blue tang, yellow tang, chromis and Banggai cardinalfish swimming above a large anemone",
    },
    {
        video: R2 + '5.mp4',
        alt: "Video of an aquarium maintained by Wolf Aquariums",
    },
    {
        src: candyCaneCoral,
        alt: "Close-up of orange candy cane coral on live rock with a striped fish peeking out from the rockwork",
    },
    {
        video: VIDEOS + 'reef-live-rock-coralline-clownfish.mp4',
        alt: "Video of live rock covered in purple coralline algae with a clownfish swimming near the sand",
    },
    {
        src: newNanoReef,
        alt: "Newly set up rimless nano reef with dark live rock, white sand, mushrooms and leather corals",
    },
    {
        video: VIDEOS + 'nano-reef-on-white-cabinet.mp4',
        alt: "Video of a small rimless nano reef on a white cabinet under a single arm-mounted LED light",
    },
];

const freshwaterTanks = [
    {
        src: plantedDiscus,
        alt: "Heavily planted freshwater aquarium with discus fish swimming among driftwood, moss and stem plants",
    },
    {
        src: shipwreckTank,
        alt: "Long freshwater aquarium with a shipwreck centerpiece, blood parrot cichlids and live plants on a wooden stand",
    },
    {
        src: freshwaterSetup,
        alt: "Newly installed freshwater aquarium on a black stand with a canister filter, white rock decor and red gravel",
    },
];

const steps = [
    {
        src: R2 + 'IMG_1542.jpg',
        label: 'Step 1',
        alt: "Empty rimless glass cube aquarium on a kitchen counter before setup",
    },
    {
        src: R2 + 'IMG_1547.jpg',
        label: 'Step 2',
        alt: "Dry rock arch aquascape on a sand bed in a freshly filled aquarium",
    },
    {
        src: R2 + 'IMG_1558.jpg',
        label: 'Step 3',
        alt: "New reef tank with the rock arch glowing under a blue LED light while it cycles",
    },
    {
        src: R2 + 'IMG_1925.jpg',
        label: 'Finished',
        alt: "Finished reef tank with torch and hammer corals, clownfish and a firefish around the rock arch",
    },
];

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

const Tile = styled('figure')`
    break-inside: avoid;
    margin: 0 0 20px;
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface);
    box-shadow: var(--glass-shine), 0 20px 40px -28px rgba(0, 10, 25, 0.9);
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

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Step = styled('figure')`
    position: relative;
    margin: 0;

    img {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--radius);
        border: 1px solid var(--border);
    }
`;

// Makes a whole tile clickable to open the full-screen viewer
const OpenButton = styled('button')`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: zoom-in;

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: -2px;
    }

    /* The tile's own video shouldn't swallow the click */
    video {
        pointer-events: none;
    }
`;

// Small round icon in the corner: a play symbol on videos, an expand symbol on photos
const Badge = styled('span')`
    position: absolute;
    right: 12px;
    bottom: 12px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(4, 36, 62, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #fff;
    pointer-events: none;
    opacity: ${({ $always }) => ($always ? 0.9 : 0)};
    transform: scale(${({ $always }) => ($always ? 1 : 0.85)});
    transition: opacity 0.25s ease, transform 0.25s ease;

    ${OpenButton}:hover &,
    ${OpenButton}:focus-visible & {
        opacity: 1;
        transform: scale(1);
    }

    /* Touch screens have no hover, so always show it there */
    @media (hover: none) {
        opacity: 0.9;
        transform: scale(1);
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
);

const ExpandIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
);

const galleryItems = [...saltwaterTanks, ...freshwaterTanks];

const TileGrid = ({ items, onOpen }) => (
    <Masonry>
        {items.map((item, i) => (
            <Tile key={item.video || item.src}>
                <OpenButton
                    type="button"
                    onClick={() => onOpen(i)}
                    aria-label={`${item.video ? 'Play video' : 'View larger'}: ${item.alt}`}
                >
                    {item.video
                        ? <VideoComponent src={item.video} alt={item.alt} style={VideoWrapperCss} videoStyle={VideoCss} autoPlayWhenVisible={false} />
                        : <img src={item.src} alt={item.alt} loading="lazy" />}
                    <Badge $always={!!item.video}>{item.video ? <PlayIcon /> : <ExpandIcon />}</Badge>
                </OpenButton>
            </Tile>
        ))}
    </Masonry>
);

export const Gallery = () => {
    // Which list is open in the viewer and at which item, or null when closed
    const [viewer, setViewer] = useState(null);
    const viewerItems = viewer?.list === 'steps' ? steps : galleryItems;
    const closeViewer = useCallback(() => setViewer(null), []);
    const changeViewer = useCallback((index) => setViewer((v) => ({ ...v, index })), []);

    return (
        <Section id="Gallery">
            <Container>
                <Reveal>
                    <SectionHeader
                        title="Tanks We Build & Look After"
                    />
                </Reveal>

                <TileGrid items={galleryItems} onOpen={(index) => setViewer({ list: 'gallery', index })} />

                <StepsHeader>
                    <Reveal>
                        <SectionHeader
                            title="From Empty Tank to Thriving Reef"
                        />
                    </Reveal>
                </StepsHeader>
                <Steps>
                    {steps.map((step, i) => (
                        <Reveal as="li" key={step.label} delay={i * 100}>
                            <Step>
                                <OpenButton
                                    type="button"
                                    onClick={() => setViewer({ list: 'steps', index: i })}
                                    aria-label={`View larger: ${step.label}, ${step.alt}`}
                                >
                                    <img src={step.src} alt={step.alt} loading="lazy" />
                                    <Badge><ExpandIcon /></Badge>
                                </OpenButton>
                            </Step>
                        </Reveal>
                    ))}
                </Steps>
            </Container>
            {viewer && (
                <Lightbox
                    items={viewerItems}
                    index={viewer.index}
                    onClose={closeViewer}
                    onChange={changeViewer}
                />
            )}
        </Section>
    )
}

export default Gallery;
