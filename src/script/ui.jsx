import styled, { css } from "styled-components";
import { Link } from 'react-scroll';
import { useIsVisible } from "./useIsVisible.tsx";

// Shared building blocks so every section has the same spacing, headings and buttons.

export const Container = styled('div')`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 0 16px;
    }
`;

export const Section = styled('section')`
    position: relative;
    padding: clamp(72px, 10vw, 128px) 0;
    overflow: hidden;
    background: ${({ $raised }) => $raised
        ? 'radial-gradient(900px 500px at 85% 0%, rgba(111, 194, 255, 0.10), transparent 60%), var(--bg-raised)'
        : 'radial-gradient(900px 500px at 10% 0%, rgba(79, 216, 196, 0.07), transparent 60%), var(--bg)'};
`;

const HeaderWrap = styled('header')`
    max-width: 720px;
    margin: 0 auto clamp(40px, 6vw, 64px);
    text-align: ${({ $align }) => $align || 'center'};
    ${({ $align }) => $align === 'left' && css`margin-left: 0;`}
`;

export const Eyebrow = styled('p')`
    margin: 0 0 12px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
`;

export const Title = styled('h2')`
    margin: 0;
    font-size: clamp(2rem, 4.2vw, 3.25rem);
`;

export const Lead = styled('p')`
    margin: 16px 0 0;
    font-size: 1.1rem;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 26px;
    border-radius: 999px;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }

    ${({ $variant }) => $variant === 'ghost'
        ? css`
            color: var(--text);
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);

            &:hover {
                background: rgba(255, 255, 255, 0.14);
                border-color: rgba(255, 255, 255, 0.4);
            }
        `
        : css`
            color: #04122a;
            background: linear-gradient(135deg, var(--accent), var(--accent-2));
            border: 1px solid transparent;
            box-shadow: 0 10px 30px -10px rgba(111, 194, 255, 0.6);

            &:hover {
                box-shadow: 0 14px 36px -10px rgba(111, 194, 255, 0.8);
            }
        `}
`;

export const Button = styled('a')`${buttonBase}`;

// Same look as Button, but smooth-scrolls to a section on this page
export const ScrollButton = styled(Link)`${buttonBase}`;

export const Card = styled('div')`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
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
export const EMAIL = 'wolfreefs@gmail.com';
export const YELP_URL = 'https://www.yelp.com/biz/wolf-reefs-irvine/';
export const FACEBOOK_URL = 'https://www.facebook.com/61553232389040/';
