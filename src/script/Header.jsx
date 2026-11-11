import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-scroll';

import { Container, Button, PHONE_LINK } from './ui';
import wolfReefLogo from '../images/wolfReefLogo.jpg';

// Offset so a section's top isn't hidden under the fixed header
const SCROLL_OFFSET = -64;

const StyledHeader = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
    border-bottom: 1px solid transparent;
    background: linear-gradient(180deg, rgba(4, 4, 24, 0.6) 0%, rgba(4, 4, 24, 0) 100%);

    ${({ $scrolled }) => $scrolled && css`
        background: rgba(4, 4, 24, 0.72);
        border-bottom-color: var(--border);
        backdrop-filter: blur(16px) saturate(140%);
        -webkit-backdrop-filter: blur(16px) saturate(140%);
    `}
`;

const Bar = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    height: var(--header-height);
    transition: height 0.3s ease;

    ${({ $scrolled }) => $scrolled && css`
        height: 64px;
    `}
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
`;

const MainLogo = styled('img')`
    display: block;
    height: 52px;
    width: auto;
    border-radius: 10px;
    transition: height 0.3s ease;

    ${({ $scrolled }) => $scrolled && css`
        height: 44px;
    `}

    @media (max-width: 600px) {
        height: 40px;
    }
`;

const Nav = styled('nav')`
    display: flex;
    align-items: center;
    gap: clamp(12px, 3vw, 36px);
`;

const NavList = styled('ul')`
    display: flex;
    align-items: center;
    gap: clamp(14px, 3vw, 36px);
    margin: 0;
    padding: 0;
    list-style: none;
`;

const NavLink = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 6px 0;
    color: var(--text);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        border-radius: 2px;
        background: var(--accent);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
    }

    &:hover::after,
    &.active::after {
        transform: scaleX(1);
    }

    @media (max-width: 600px) {
        font-size: 0.85rem;
    }
`;

const CallButton = styled(Button)`
    padding: 11px 20px;
    font-size: 0.9rem;

    @media (max-width: 760px) {
        display: none;
    }
`;

const links = [
    { to: 'AboutUs', label: 'About Us' },
    { to: 'Testimonial', label: 'Testimonials' },
    { to: 'Gallery', label: 'Gallery' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <StyledHeader $scrolled={scrolled}>
            <Bar $scrolled={scrolled}>
                <LogoLink smooth to="Home" href="#Home" aria-label="Back to top">
                    <MainLogo $scrolled={scrolled} src={wolfReefLogo} alt="Wolf Aquariums logo" width="360" height="265" />
                </LogoLink>
                <Nav aria-label="Main">
                    <NavList>
                        {links.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink activeClass="active" smooth spy offset={SCROLL_OFFSET} to={to} href={`#${to}`}>{label}</NavLink>
                            </li>
                        ))}
                    </NavList>
                    <CallButton href={PHONE_LINK}>Call us</CallButton>
                </Nav>
            </Bar>
        </StyledHeader>
    );
}

export default Header;
