import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { VideoComponent } from "./Video.tsx";
import {
    Container, Section, SectionHeader, Card, Button, Reveal,
    PHONE_DISPLAY, PHONE_LINK, EMAIL, YELP_URL, FACEBOOK_URL,
} from './ui';

import wolfFam from '../images/wolfFam.jpg';

const Intro = styled('div')`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(32px, 6vw, 88px);
    align-items: center;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`;

const IntroText = styled('div')`
    p {
        margin: 0 0 18px;
        font-size: 1.1rem;
        color: var(--muted);
    }

    p:first-of-type {
        font-family: var(--font-display);
        font-size: clamp(1.35rem, 2vw, 1.6rem);
        font-weight: 500;
        line-height: 1.35;
        color: var(--text);
    }
`;


// Photo shown inside a little aquarium: black rim on top, glass edges, sand along the bottom
const PhotoTank = styled('figure')`
    position: relative;
    margin: 0;
    padding: 14px 14px 0;
    border: 2px solid rgba(190, 240, 255, 0.35);
    border-top: 0;
    border-radius: 6px 6px 20px 20px;
    background: linear-gradient(180deg, rgba(143, 240, 255, 0.14), rgba(10, 74, 114, 0.25));
    box-shadow: var(--glass-shine), 0 30px 60px -28px rgba(0, 10, 25, 0.9);

    &::before {
        content: "";
        position: absolute;
        top: -8px;
        left: -6px;
        right: -6px;
        height: 12px;
        border-radius: 4px;
        background: var(--rim);
        box-shadow: 0 2px 0 rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 860px) {
        max-width: 440px;
        margin: 24px auto 0;
    }
`;

const AboutUsImage = styled('img')`
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
`;

const SAND = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 30' preserveAspectRatio='none'%3E%3Cpath d='M0 14 C60 4 120 22 200 12 S340 4 400 14 V30 H0Z' fill='%23e8d3a6'/%3E%3Cpath d='M0 20 C80 12 150 28 230 18 S350 14 400 20 V30 H0Z' fill='%23cfb27a'/%3E%3C/svg%3E\")";

const SandBed = styled('div')`
    height: 34px;
    margin: 12px -14px 0;
    border-radius: 0 0 18px 18px;
    background: ${SAND} bottom / 100% 100% no-repeat;
`;

// Two wide tanks side by side (stacked on smaller screens)
const Services = styled('div')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    margin-top: clamp(72px, 10vw, 120px);

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

// The two service cards are drawn as two different aquariums:
// a reef tank (rimless, hanging LED, corals on white sand) and a planted
// freshwater tank (black hood, green water, gravel, driftwood and plants).
const Tank = styled('div')`
    position: relative;
    height: 100%;
    padding-top: ${({ $kind }) => ($kind === 'reef' ? '46px' : '14px')};
    box-sizing: border-box;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-6px);
    }
`;

// Reef: a dark LED bar hanging on two cables above the open-top tank
const ReefLight = styled('div')`
    position: absolute;
    top: 0;
    left: 26%;
    right: 26%;
    height: 34px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 16%;
        right: 16%;
        height: 26px;
        border-left: 1px solid rgba(220, 240, 255, 0.35);
        border-right: 1px solid rgba(220, 240, 255, 0.35);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 9px;
        border-radius: 5px;
        background: var(--rim);
        box-shadow: 0 8px 22px 2px rgba(140, 150, 255, 0.6);
    }
`;

// Freshwater: a black hood with a lip sitting on top of the glass
const Hood = styled('div')`
    position: absolute;
    top: 0;
    left: -6px;
    right: -6px;
    height: 18px;
    z-index: 2;
    border-radius: 5px 5px 3px 3px;
    background: linear-gradient(180deg, #1c2a35, var(--rim));
    box-shadow: 0 3px 0 rgba(255, 255, 255, 0.06);
`;

const Water = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: clamp(400px, 34vw, 470px);
    height: 100%;
    box-sizing: border-box;
    padding: 36px clamp(22px, 3vw, 40px) 0;
    overflow: hidden;
    border: 2px solid rgba(200, 240, 255, ${({ $kind }) => ($kind === 'reef' ? 0.42 : 0.3)});
    border-top-width: ${({ $kind }) => ($kind === 'reef' ? '2px' : '0')};
    border-radius: ${({ $kind }) => ($kind === 'reef' ? '6px' : '0 0 12px 12px')};
    background: ${({ $kind }) => ($kind === 'reef'
        ? `radial-gradient(ellipse 70% 55% at 50% 0%, rgba(160, 165, 255, 0.35), transparent 70%),
           linear-gradient(180deg, rgba(100, 130, 255, 0.22) 0%, rgba(40, 30, 120, 0.5) 100%)`
        : `radial-gradient(ellipse 80% 45% at 50% 0%, rgba(255, 244, 210, 0.18), transparent 70%),
           linear-gradient(180deg, rgba(150, 220, 170, 0.2) 0%, rgba(18, 70, 50, 0.55) 100%)`)};
    box-shadow: var(--glass-shine), 0 30px 60px -32px rgba(0, 10, 25, 0.9);

    h3 {
        position: relative;
        z-index: 1;
        margin: 0 0 12px;
        font-size: clamp(1.5rem, 2.2vw, 1.9rem);
    }

    p {
        position: relative;
        z-index: 1;
        max-width: 520px;
        margin: 0;
        color: rgba(242, 251, 255, 0.85);
        font-size: 1.05rem;
    }
`;

// The sand or gravel bed along the bottom of each tank
const Scene = styled('svg')`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    /* Keeps the bed's own proportions so nothing gets cropped on narrow screens */
    height: auto;
    aspect-ratio: 10 / 3;
    pointer-events: none;
`;

// Empty tanks: just the sand (reef) or gravel (freshwater) along the bottom
const ReefScene = () => (
    <Scene viewBox="0 0 600 180" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <path d="M0 160 C100 148 200 170 300 158 S500 148 600 160 V180 H0Z" fill="#efe2c4" />
        <path d="M0 168 C120 160 240 176 360 166 S540 162 600 168 V180 H0Z" fill="#dccaa0" />
    </Scene>
);

const FreshScene = () => (
    <Scene viewBox="0 0 600 180" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <path d="M0 162 C120 154 240 170 360 160 S540 156 600 162 V180 H0Z" fill="#4a3b2c" />
        <path d="M0 170 C140 164 280 176 420 168 S560 166 600 170 V180 H0Z" fill="#3a2e22" />
        <g fill="#8a7458" opacity="0.6">
            <circle cx="60" cy="168" r="2" /><circle cx="150" cy="172" r="2" /><circle cx="250" cy="166" r="2" />
            <circle cx="340" cy="172" r="2" /><circle cx="450" cy="170" r="2" /><circle cx="540" cy="168" r="2" />
        </g>
    </Scene>
);

const ContactRow = styled('div')`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 24px;
    margin-top: clamp(56px, 8vw, 96px);
    align-items: stretch;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`;

const VideoCard = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    padding: 14px;
    overflow: hidden;
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
    width: "100%",
    height: "auto",
    maxHeight: "70vh",
    objectFit: "cover",
    borderRadius: "12px",
};

const ContactCard = styled(Card)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    padding: clamp(28px, 4vw, 52px);
    overflow: hidden;
    background:
        radial-gradient(500px 260px at 100% 0%, rgba(255, 133, 82, 0.22), transparent 70%),
        var(--surface);

    h3 {
        position: relative;
        margin: 0 0 12px;
        font-size: clamp(1.9rem, 3.2vw, 2.6rem);
    }

    p {
        position: relative;
        margin: 0;
        color: var(--muted);
        font-size: 1.05rem;
    }
`;

const ContactActions = styled('div')`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
`;

const SocialLinks = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.95rem;
`;

// Two tanks: setup & design in one, ongoing care in the other
const tanks = [
    {
        kind: 'reef',
        title: 'New Tank Setup & Custom Design',
        text: 'Setup and design of new saltwater and freshwater aquariums, made for your space and your goals and ready for healthy fish and corals.',
    },
    {
        kind: 'fresh',
        title: 'Reef & Freshwater Care',
        text: 'Weekly maintenance, cleaning, and health checks for saltwater, reef, and freshwater aquariums.',
    },
];

export const AboutUs = () => {
    return (
        <Section id="AboutUs">
            <Container>
                <Intro>
                    <Reveal>
                        <SectionHeader
                            align="left"
                            title={<>Orange County Aquarium Setup, Design &amp; <span>Maintenance</span></>}
                        />
                        <IntroText>
                            <p>We are an Aquarium service out of Orange County, serving both saltwater & freshwater tanks.</p>
                            <p>We provide setups, design, and maintenance for your unique tank.</p>
                            <p>We strive for excellent customer service, building a trustworthy relationship with our clients,
                            and always being on call 24/7 for questions & emergencies.</p>
                        </IntroText>
                    </Reveal>
                    <Reveal delay={150}>
                        <PhotoTank>
                            <AboutUsImage src={wolfFam} alt="The Wolf family, owners of Wolf Aquariums" loading="lazy" />
                            <SandBed aria-hidden="true" />
                        </PhotoTank>
                    </Reveal>
                </Intro>

                <Services>
                    {tanks.map((tank, t) => (
                        <Reveal key={tank.title} delay={t * 120}>
                            <Tank $kind={tank.kind}>
                                {tank.kind === 'reef' ? <ReefLight aria-hidden="true" /> : <Hood aria-hidden="true" />}
                                <Water $kind={tank.kind}>
                                    <h3>{tank.title}</h3>
                                    <p>{tank.text}</p>
                                    {tank.kind === 'reef' ? <ReefScene /> : <FreshScene />}
                                </Water>
                            </Tank>
                        </Reveal>
                    ))}
                </Services>

                <ContactRow>
                    <Reveal>
                        <VideoCard>
                            <VideoComponent src={"https://r2.wolfreefs.com/CarlaTestimonial.mp4"} alt="Wolf Aquariums client talking about their aquarium service" style={VideoWrapperCss} videoStyle={VideoCss} />
                        </VideoCard>
                    </Reveal>
                    <Reveal delay={150}>
                        <ContactCard>
                            <h3>Ready for your dream aquarium?</h3>
                            <p>Call or email us about a new setup, a redesign, or weekly care. We're on call 24/7 for questions & emergencies.</p>
                            <ContactActions>
                                <Button href={PHONE_LINK}>Call {PHONE_DISPLAY}</Button>
                                <Button $variant="ghost" href={`mailto:${EMAIL}`}>{EMAIL}</Button>
                            </ContactActions>
                            <SocialLinks>
                                <span>Find us on</span>
                                <SocialIcon network="yelp" url={YELP_URL} label="Wolf Aquariums on Yelp" target="_blank" rel="noopener" style={{ width: 40, height: 40 }} />
                                <SocialIcon network="facebook" url={FACEBOOK_URL} label="Wolf Aquariums on Facebook" target="_blank" rel="noopener" style={{ width: 40, height: 40 }} />
                            </SocialLinks>
                        </ContactCard>
                    </Reveal>
                </ContactRow>
            </Container>
        </Section>
    )
}

export default AboutUs;
