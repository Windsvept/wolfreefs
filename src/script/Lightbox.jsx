import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

// Full-screen viewer for gallery photos and videos.
// Close: ✕ button, Esc, or clicking the dark background.
// Browse: arrow buttons, ← / → keys, or swiping on a phone.

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const zoomIn = keyframes`
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: none; }
`;

const Overlay = styled('div')`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 72px;
    box-sizing: border-box;
    background: rgba(3, 25, 44, 0.94);
    animation: ${fadeIn} 0.2s ease both;

    @media (max-width: 700px) {
        padding: 64px 12px 80px;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const Stage = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    animation: ${zoomIn} 0.25s ease both;

    img, video {
        display: block;
        max-width: 100%;
        max-height: calc(100vh - 128px);
        max-height: calc(100svh - 128px);
        width: auto;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8);
        background: #000;
    }

    @media (max-width: 700px) {
        img, video {
            max-height: calc(100vh - 144px);
            max-height: calc(100svh - 144px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const RoundButton = styled('button')`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.18);
        border-color: rgba(255, 255, 255, 0.4);
    }

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 3px;
    }

    svg {
        width: 22px;
        height: 22px;
    }
`;

const CloseButton = styled(RoundButton)`
    top: 12px;
    right: 12px;
`;

const NavButton = styled(RoundButton)`
    top: 50%;
    transform: translateY(-50%);
    ${({ $side }) => $side}: 12px;

    /* On phones the arrows move to the bottom so they don't cover the photo */
    @media (max-width: 700px) {
        top: auto;
        bottom: 16px;
        transform: none;
        ${({ $side }) => $side}: calc(50% - 72px);
    }
`;

const Counter = styled('div')`
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
`;

const Icon = ({ d }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

// Until a video knows its own size it would show as a tiny box, so hold a large
// space with a spinner while it loads
const VideoFrame = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $loading }) => $loading && `
        width: min(1100px, calc(100vw - 144px));
        aspect-ratio: 16 / 9;
        max-height: calc(100vh - 128px);

        @media (max-width: 700px) {
            width: calc(100vw - 24px);
        }
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);

        video {
            position: absolute;
            opacity: 0;
        }
    `}
`;

const Spinner = styled('div')`
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;

// Plays muted at first (so phones allow it); visitors can turn on sound with the controls
const LightboxVideo = ({ src, alt }) => {
    const ref = useRef(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        video.muted = true;
        video.setAttribute("muted", "");
        // Already loaded from cache: no need to wait for the event
        if (video.readyState >= 1) setLoading(false);
        const attempt = video.play();
        if (attempt && attempt.catch) attempt.catch(() => {});
    }, [src]);
    return (
        <VideoFrame $loading={loading}>
            {loading && <Spinner role="status" aria-label="Loading video" />}
            <video
                ref={ref}
                key={src}
                controls
                loop
                muted
                playsInline
                preload="auto"
                aria-label={alt}
                onLoadedMetadata={() => setLoading(false)}
            >
                <source src={`${src}#t=0.001`} type="video/mp4" />
            </video>
        </VideoFrame>
    );
};

export const Lightbox = ({ items, index, onClose, onChange }) => {
    const closeRef = useRef(null);
    const touchStart = useRef(null);
    const count = items.length;
    const item = items[index];

    const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
    const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

    // Keyboard controls
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, prev, next]);

    // Stop the page behind from scrolling, pause its videos (phones struggle with two
    // big videos at once), and restore both, plus focus on the tile, when closed
    useEffect(() => {
        const previouslyFocused = document.activeElement;
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        const paused = [...document.querySelectorAll('video')]
            .filter((v) => !v.paused && !v.closest('[data-lightbox]'));
        paused.forEach((v) => v.pause());
        closeRef.current?.focus();
        return () => {
            document.body.style.overflow = overflow;
            paused.forEach((v) => { const p = v.play(); if (p && p.catch) p.catch(() => {}); });
            previouslyFocused?.focus?.({ preventScroll: true });
        };
    }, []);

    const onTouchStart = (e) => {
        const t = e.touches[0];
        touchStart.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchEnd = (e) => {
        if (!touchStart.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStart.current.x;
        const dy = t.clientY - touchStart.current.y;
        touchStart.current = null;
        // Only a mostly sideways swipe changes the photo
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) next(); else prev();
        }
    };

    if (!item) return null;

    return createPortal(
        <Overlay
            data-lightbox
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <Counter aria-live="polite">{index + 1} / {count}</Counter>
            <CloseButton ref={closeRef} onClick={onClose} aria-label="Close viewer">
                <Icon d="M6 6l12 12M18 6L6 18" />
            </CloseButton>

            <Stage key={index}>
                {item.video
                    ? <LightboxVideo src={item.video} alt={item.alt} />
                    : <img src={item.src} alt={item.alt} />}
            </Stage>

            {count > 1 && (
                <>
                    <NavButton $side="left" onClick={prev} aria-label="Previous">
                        <Icon d="M15 18l-6-6 6-6" />
                    </NavButton>
                    <NavButton $side="right" onClick={next} aria-label="Next">
                        <Icon d="M9 18l6-6-6-6" />
                    </NavButton>
                </>
            )}
        </Overlay>,
        document.body
    );
};

export default Lightbox;
