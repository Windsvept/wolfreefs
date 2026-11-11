import styled from "styled-components";
import { VideoComponent } from "./Video.tsx";
import { Container, Section, SectionHeader, Card, Reveal } from './ui';
import testimonials from '../json/testimonials.json';

const List = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

const TestimonialCard = styled(Card)`
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
    align-items: center;
    gap: clamp(24px, 4vw, 56px);
    padding: clamp(16px, 2.5vw, 28px);
    overflow: hidden;

    @media (max-width: 670px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

// Holds the photo or video: a fixed 40% of the row on wide screens, full width when stacked
const TestimonialMedia = styled('div')`
    flex: 0 0 40%;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    --media-max-height: 75vh;

    @media (max-width: 670px) {
        flex-basis: auto;
        width: 100%;
        /* On its own row, let the video use the full width */
        --media-max-height: none;
    }
`;

const TestimonialImg = styled('img')`
    display: block;
    max-width: 100%;
    max-height: var(--media-max-height);
    object-fit: contain;
    border-radius: 14px;
`;

// Wrapper just fills the column; the video itself keeps its own shape
const VideoWrapperCss = {
    display: "block",
    width: "100%",
    height: "auto",
    minHeight: 0,
    margin: 0,
    border: "none",
};

// Keep the video's own aspect ratio and stop tall (portrait) clips from towering over the text
const VideoCss = {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "var(--media-max-height)",
    margin: "0 auto",
    borderRadius: "14px",
};

const TestimonialBody = styled('figure')`
    flex: 1 1 0;
    min-width: 0;
    margin: 0;
    padding: 8px clamp(4px, 2vw, 24px);
`;

const QuoteMark = styled('div')`
    font-family: Georgia, "Times New Roman", serif;
    font-size: 5rem;
    line-height: 0.6;
    height: 2.4rem;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const TestimonialText = styled('blockquote')`
    margin: 0;
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: var(--text);
`;

const TestimonialTextBy = styled('figcaption')`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    font-weight: 600;

    small {
        display: block;
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--muted);
    }
`;

const Avatar = styled('span')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    flex-shrink: 0;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #04122a;
    font-family: var(--font-display);
    font-size: 1.2rem;
`;

const Testimonial = ({ data, reverse }) => {

    let imgSrc = 'https://r2.wolfreefs.com/' + data.media;

    return (
        <TestimonialCard $reverse={reverse}>
            <TestimonialMedia>
            {
                /\.jpe?g$/i.test(imgSrc) ?
                <TestimonialImg src={imgSrc} alt={`Aquarium of Wolf Aquariums client ${data.writer}`} loading="lazy" />
                :
                <VideoComponent src={imgSrc} alt={`Aquarium of Wolf Aquariums client ${data.writer}`} style={VideoWrapperCss} videoStyle={VideoCss}/>
            }
            </TestimonialMedia>
            <TestimonialBody>
                <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
                <TestimonialText>
                    {data.text}
                </TestimonialText>
                <TestimonialTextBy>
                    <Avatar aria-hidden="true">{data.writer.charAt(0)}</Avatar>
                    <span>
                        {data.writer}
                        <small>Wolf Aquariums client</small>
                    </span>
                </TestimonialTextBy>
            </TestimonialBody>
        </TestimonialCard>
    )
}

export const Testimonials = () => {

    return (
        <Section id="Testimonial" $raised>
            <Container>
                <Reveal>
                    <SectionHeader
                        eyebrow="Testimonials"
                        title="What Our Clients Say"
                        lead="Real tanks, real owners. Here's what working with us looks like."
                    />
                </Reveal>
                <List>
                    {testimonials.map((testimonial, i) => (
                        <Reveal key={testimonial.writer}>
                            <Testimonial data={testimonial} reverse={i % 2 === 1} />
                        </Reveal>
                    ))}
                </List>
            </Container>
        </Section>
    )
}

export default Testimonials;
