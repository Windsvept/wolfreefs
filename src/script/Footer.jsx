import styled, { keyframes } from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

import { Container, PHONE_DISPLAY, PHONE_LINK, EMAIL, YELP_URL, FACEBOOK_URL } from './ui';
import wolfReefLogo from '../images/wolfReefLogo.jpg';

// The footer is the floor of the tank: seaweed growing out of a sand bed

const sway = keyframes`
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
`;

const Floor = styled('footer')`
    position: relative;
    z-index: 1;
    margin-top: 40px;
    color: #3b3220;
`;

// Wavy sand dunes along the top edge, with seaweed planted in them
const Dunes = styled('div')`
    position: relative;
    height: 120px;
    margin-bottom: -1px;
    pointer-events: none;

    svg.dunes {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 70px;
    }
`;

// Each plant's base sits low inside the dunes, so the front sand layer (drawn on top)
// always covers its roots, however the sand's wavy edge rises or dips at that spot
const Plant = styled('svg')`
    position: absolute;
    bottom: 2px;
    transform-origin: bottom center;
    animation: ${sway} ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const SeaweedPlant = ({ left, height, color, duration, delay }) => (
    <Plant
        viewBox="0 0 40 120"
        style={{ left, height, width: height / 3, animationDuration: `${duration}s`, animationDelay: `-${delay}s` }}
        aria-hidden="true"
    >
        <path d="M12 120 C2 96 22 84 12 62 C4 44 18 30 12 0 C24 22 16 40 24 60 C32 82 14 96 20 120Z" fill={color} />
        <path d="M24 120 C20 100 34 90 30 72 C28 62 34 54 34 44 C40 58 36 70 38 80 C40 96 30 104 32 120Z" fill={color} opacity="0.75" />
    </Plant>
);

const Sand = styled('div')`
    position: relative;
    padding: 40px 0 28px;
    background:
        radial-gradient(circle at 12% 30%, rgba(120, 95, 50, 0.18) 0 3px, transparent 4px),
        radial-gradient(circle at 37% 70%, rgba(120, 95, 50, 0.14) 0 2px, transparent 3px),
        radial-gradient(circle at 63% 40%, rgba(255, 255, 255, 0.35) 0 2px, transparent 3px),
        radial-gradient(circle at 88% 65%, rgba(120, 95, 50, 0.16) 0 3px, transparent 4px),
        linear-gradient(180deg, var(--sand) 0%, var(--sand-deep) 100%);
    background-size: 220px 120px, 160px 90px, 140px 110px, 260px 140px, 100% 100%;
`;

const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

const Brand = styled('div')`
    img {
        display: block;
        height: 58px;
        width: auto;
        border-radius: 10px;
        box-shadow: 0 6px 16px -8px rgba(60, 40, 10, 0.6);
    }

    p {
        max-width: 340px;
        margin: 16px 0 0;
        color: #4a3f29;
    }
`;

const ColumnTitle = styled('h2')`
    margin: 0 0 14px;
    font-size: 1.2rem;
    color: #1d3b52;
`;

const LinkList = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;

    a {
        color: #3b3220;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    a:hover {
        color: #0a4a72;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`;

const Socials = styled('div')`
    display: flex;
    gap: 10px;
    margin-top: 18px;
`;

const Bottom = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
    margin-top: clamp(36px, 5vw, 56px);
    padding-top: 20px;
    border-top: 1px solid rgba(90, 70, 30, 0.25);
    font-size: 0.88rem;
    color: #5a4c30;
`;

// Grouped into a few natural clumps. Heights include the part buried in the sand.
const plants = [
    // left clump
    { left: '2.5%', height: 150, color: '#2f8f74', duration: 5, delay: 0 },
    { left: '5%', height: 118, color: '#46b08f', duration: 4, delay: 1.2 },
    { left: '7.5%', height: 96, color: '#3fa98f', duration: 4.5, delay: 2 },
    // small one in the middle
    { left: '44%', height: 100, color: '#2f8f74', duration: 5.5, delay: 0.6 },
    // right clump
    { left: '78%', height: 132, color: '#46b08f', duration: 4.8, delay: 1.6 },
    { left: '81%', height: 100, color: '#2f8f74', duration: 4.2, delay: 0.3 },
    { left: '94%', height: 140, color: '#3fa98f', duration: 5.2, delay: 2.4 },
];

export const Footer = () => {

    return (
        <Floor id="Footer">
            <Dunes aria-hidden="true">
                {plants.map((p, i) => <SeaweedPlant key={i} {...p} />)}
                <svg className="dunes" viewBox="0 0 1440 70" preserveAspectRatio="none">
                    <path d="M0 40 C160 10 320 10 480 34 S800 62 980 32 S1300 8 1440 30 V70 H0Z" fill="#d8bf8b" opacity="0.7" />
                    <path d="M0 52 C200 30 380 40 560 50 S900 64 1100 46 S1340 34 1440 46 V70 H0Z" fill="var(--sand)" />
                </svg>
            </Dunes>
            <Sand>
                <Container>
                    <Grid>
                        <Brand>
                            <img src={wolfReefLogo} alt="Wolf Aquariums logo" width="360" height="265" loading="lazy" />
                            <p>Aquarium setup, design, and maintenance in Orange County, California. On call 24/7 for questions & emergencies.</p>
                        </Brand>
                        <div>
                            <ColumnTitle>Explore</ColumnTitle>
                            <LinkList>
                                <li><Link smooth offset={-64} to="AboutUs" href="#AboutUs">About Us</Link></li>
                                <li><Link smooth offset={-64} to="Testimonial" href="#Testimonial">Testimonials</Link></li>
                                <li><Link smooth offset={-64} to="Gallery" href="#Gallery">Gallery</Link></li>
                            </LinkList>
                        </div>
                        <div>
                            <ColumnTitle>Contact</ColumnTitle>
                            <LinkList>
                                <li><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></li>
                                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                            </LinkList>
                            <Socials>
                                <SocialIcon network="yelp" url={YELP_URL} label="Wolf Aquariums on Yelp" target="_blank" rel="noopener" style={{ width: 38, height: 38 }} />
                                <SocialIcon network="facebook" url={FACEBOOK_URL} label="Wolf Aquariums on Facebook" target="_blank" rel="noopener" style={{ width: 38, height: 38 }} />
                            </Socials>
                        </div>
                    </Grid>
                    <Bottom>
                        <div>&copy; {new Date().getFullYear()} Wolf Aquariums. All Rights Reserved.</div>
                        <div>Irvine, Orange County, CA</div>
                    </Bottom>
                </Container>
            </Sand>
        </Floor>
    )
}

export default Footer;
