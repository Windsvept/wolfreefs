import styled, { css } from "styled-components";
import { Link } from 'react-scroll';
import { useIsVisible } from "./useIsVisible.tsx";

// Shared building blocks so every section has the same spacing, headings and buttons.

export const Container = styled('div')`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 0 16px;
    }
`;

// Sections are see-through so the page's water gradient, light ripples and fish show behind them
export const Section = styled('section')`
    position: relative;
    padding: clamp(80px, 10vw, 136px) 0;
    background: ${({ $raised }) => ($raised ? 'var(--bg-raised)' : 'transparent')};
`;

const HeaderWrap = styled('header')`
    max-width: 760px;
    margin: 0 auto clamp(44px, 6vw, 68px);
    text-align: ${({ $align }) => $align || 'center'};
    ${({ $align }) => $align === 'left' && css`margin-left: 0;`}
`;

// Small label with three rising bubbles in front of it
export const Eyebrow = styled('p')`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 14px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);

    &::before {
        content: "";
        width: 22px;
        height: 18px;
        background:
            radial-gradient(circle at 4px 14px, transparent 2.2px, currentColor 2.6px, currentColor 3.4px, transparent 3.8px),
            radial-gradient(circle at 11px 8px, transparent 3px, currentColor 3.4px, currentColor 4.2px, transparent 4.6px),
            radial-gradient(circle at 18px 3px, transparent 1.6px, currentColor 2px, currentColor 2.8px, transparent 3.2px);
        opacity: 0.85;
    }
`;

export const Title = styled('h2')`
    margin: 0;
    font-size: clamp(2.2rem, 4.6vw, 3.6rem);

    span {
        color: var(--accent);
    }
`;

export const Lead = styled('p')`
    margin: 16px 0 0;
    font-size: 1.12rem;
    color: var(--muted);
`;

export const SectionHeader = ({ eyebrow, title, lead, align }) => (
    <HeaderWrap $align={align}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {lead && <Lead>{lead}</Lead>}
    </HeaderWrap>
);

const buttonBase = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px 28px;
    border-radius: 999px;
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

    /* Glossy highlight, like light on a bubble */
    &::before {
        content: "";
        position: absolute;
        top: 3px;
        left: 14px;
        right: 14px;
        height: 40%;
        border-radius: 999px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0));
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-2px);
    }

    ${({ $variant }) => $variant === 'ghost'
        ? css`
            color: var(--text);
            background: rgba(4, 36, 62, 0.45);
            border: 1px solid var(--border);

            &::before {
                opacity: 0.4;
            }

            &:hover {
                background: rgba(190, 240, 255, 0.18);
                border-color: rgba(190, 240, 255, 0.5);
            }
        `
        : css`
            color: #05304f;
            background: linear-gradient(180deg, #c4f9ff 0%, var(--accent) 45%, #4fd3e6 100%);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 26px -10px rgba(110, 230, 255, 0.7);

            &:hover {
                box-shadow: 0 14px 32px -10px rgba(110, 230, 255, 0.9);
            }
        `}
`;

export const Button = styled('a')`${buttonBase}`;

// Same look as Button, but smooth-scrolls to a section on this page
export const ScrollButton = styled(Link)`${buttonBase}`;

// A pane of aquarium glass: tinted, with a highlight along the top edge.
// (No live blur: blurring what's behind every card made scrolling laggy.)
export const Card = styled('div')`
    background: linear-gradient(180deg, rgba(190, 240, 255, 0.1), rgba(4, 36, 62, 0.35));
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--glass-shine), 0 24px 50px -30px rgba(0, 10, 25, 0.8);
`;

const RevealWrap = styled('div')`
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '28px')});
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
    transition-delay: ${({ $delay }) => $delay || 0}ms;

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
    }
`;

// Fades content up the first time it scrolls into view
export const Reveal = ({ children, delay, className, as }) => {
    const { isVisible, targetRef } = useIsVisible({ rootMargin: '0px 0px -10% 0px', threshold: 0.05 }, true);
    return (
        <RevealWrap as={as} ref={targetRef} $visible={isVisible} $delay={delay} className={className}>
            {children}
        </RevealWrap>
    );
};

export const PHONE_DISPLAY = '714-917-9440';
export const PHONE_LINK = 'tel:+17149179440';
export const EMAIL = 'johnwolf@wolfreefs.com';
export const YELP_URL = 'https://www.yelp.com/biz/wolf-reefs-irvine/';
export const FACEBOOK_URL = 'https://www.facebook.com/61553232389040/';
