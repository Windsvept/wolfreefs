import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { VideoComponent } from "./Video.tsx";
import {
    Container, Section, SectionHeader, Eyebrow, Card, Button, Reveal,
    PHONE_DISPLAY, PHONE_LINK, EMAIL, YELP_URL, FACEBOOK_URL,
} from './ui';

import wolfFam from '../images/wolfFam.jpg';

const Intro = styled('div')`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(32px, 6vw, 80px);
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
        font-size: 1.3rem;
        color: var(--text);
    }
`;

const Highlights = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;

    li {
        padding: 8px 16px;
        border: 1px solid var(--border);
        border-radius: 999px;
        background: var(--surface);
        font-size: 0.9rem;
        font-weight: 500;
    }
`;

const PhotoFrame = styled('figure')`
    position: relative;
    margin: 0;

    &::before {
        content: "";
        position: absolute;
        inset: -14px 14px 14px -14px;
        border-radius: calc(var(--radius) + 6px);
        background: linear-gradient(135deg, rgba(111, 194, 255, 0.35), rgba(79, 216, 196, 0.15));
        z-index: 0;
    }

    @media (max-width: 860px) {
        max-width: 460px;
        margin: 12px auto 0;
    }
`;

const AboutUsImage = styled('img')`
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: top;
    border-radius: var(--radius);
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
`;

const Caption = styled('figcaption')`
    position: relative;
    z-index: 1;
    margin-top: 14px;
    font-size: 0.9rem;
    color: var(--muted);
    text-align: center;
`;

const Services = styled('div')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: clamp(64px, 9vw, 112px);

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

const ServiceCard = styled(Card)`
    height: 100%;
    padding: 28px;
    box-sizing: border-box;
    transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        background: var(--surface-hover);
        border-color: rgba(111, 194, 255, 0.35);
    }

    h3 {
        margin: 0 0 10px;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        color: var(--muted);
        font-size: 0.98rem;
    }
`;

const ServiceNumber = styled('span')`
    display: inline-block;
    margin-bottom: 18px;
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: var(--accent);
`;

const ContactRow = styled('div')`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 24px;
    margin-top: 24px;
    align-items: stretch;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`;

const VideoCard = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
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
    borderRadius: "14px",
};

const ContactCard = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(28px, 4vw, 48px);
    background:
        radial-gradient(600px 300px at 100% 0%, rgba(111, 194, 255, 0.18), transparent 70%),
        var(--surface);

    h3 {
        margin: 0 0 12px;
        font-size: clamp(1.8rem, 3vw, 2.4rem);
    }

    p {
        margin: 0;
        color: var(--muted);
        font-size: 1.05rem;
    }
`;

const ContactActions = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
`;

const SocialLinks = styled('div')`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.9rem;
`;

const services = [
    { title: 'New tank setup', text: 'Setup of new saltwater and freshwater fish tanks, ready for healthy fish and corals.' },
    { title: 'Custom design', text: 'Design of saltwater and freshwater aquariums made for your space and your goals.' },
    { title: 'Reef care', text: 'Weekly maintenance, cleaning, and health checks for saltwater and reef aquariums.' },
    { title: 'Freshwater care', text: 'Weekly maintenance, cleaning, and health checks for freshwater aquariums.' },
];

export const AboutUs = () => {
    return (
        <Section id="AboutUs">
            <Container>
                <Intro>
                    <Reveal>
                        <SectionHeader
                            align="left"
                            eyebrow="About Us"
                            title="Orange County Aquarium Setup, Design & Maintenance"
                        />
                        <IntroText>
                            <p>We are an Aquarium service out of Orange County, serving both saltwater & freshwater tanks.</p>
                            <p>We provide setups, design, and maintenance for your unique tank.</p>
                            <p>We strive for excellent customer service, building a trustworthy relationship with our clients,
                            and always being on call 24/7 for questions & emergencies.</p>
                        </IntroText>
                        <Highlights>
                            <li>Saltwater & reef</li>
                            <li>Freshwater</li>
                            <li>On call 24/7</li>
                        </Highlights>
                    </Reveal>
                    <Reveal delay={150}>
                        <PhotoFrame>
                            <AboutUsImage src={wolfFam} alt="The Wolf family, owners of Wolf Aquariums" loading="lazy" />
                            <Caption>The Wolf family</Caption>
                        </PhotoFrame>
                    </Reveal>
                </Intro>

                <Services>
                    {services.map((service, i) => (
                        <Reveal key={service.title} delay={i * 100}>
                            <ServiceCard>
                                <ServiceNumber>0{i + 1}</ServiceNumber>
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </ServiceCard>
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
                        <ContactCard style={{ height: '100%', boxSizing: 'border-box' }}>
                            <Eyebrow>Get in touch</Eyebrow>
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
