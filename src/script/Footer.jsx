import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

import { Container, PHONE_DISPLAY, PHONE_LINK, EMAIL, YELP_URL, FACEBOOK_URL } from './ui';
import wolfReefLogo from '../images/wolfReefLogo.jpg';

const StyledFooter = styled('footer')`
    position: relative;
    padding: clamp(56px, 8vw, 88px) 0 32px;
    background: var(--bg-raised);
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.95rem;
`;

const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
`;

const Brand = styled('div')`
    img {
        display: block;
        height: 56px;
        width: auto;
        border-radius: 10px;
    }

    p {
        max-width: 320px;
        margin: 16px 0 0;
    }
`;

const ColumnTitle = styled('h2')`
    margin: 0 0 14px;
    font-size: 1.1rem;
    color: var(--text);
`;

const LinkList = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;

    a {
        color: var(--muted);
        text-decoration: none;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    a:hover {
        color: var(--text);
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
    margin-top: clamp(40px, 6vw, 64px);
    padding-top: 24px;
    border-top: 1px solid var(--border);
    font-size: 0.85rem;
`;

export const Footer = () => {

    return (
        <StyledFooter id="Footer">
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
                            <SocialIcon network="yelp" url={YELP_URL} label="Wolf Aquariums on Yelp" target="_blank" rel="noopener" style={{ width: 36, height: 36 }} />
                            <SocialIcon network="facebook" url={FACEBOOK_URL} label="Wolf Aquariums on Facebook" target="_blank" rel="noopener" style={{ width: 36, height: 36 }} />
                        </Socials>
                    </div>
                </Grid>
                <Bottom>
                    <div>&copy; {new Date().getFullYear()} Wolf Aquariums. All Rights Reserved.</div>
                    <div>Irvine, Orange County, CA</div>
                </Bottom>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
