import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const ringRadius = 26;
const ringCircumference = 2 * Math.PI * ringRadius;
const visibilityThreshold = 240;

export default function ScrollToTopButton() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let animationFrame = 0;

        const updateScrollProgress = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                const scrollableHeight =
                    document.documentElement.scrollHeight - window.innerHeight;

                setScrollProgress(
                    scrollableHeight > 0
                        ? Math.min(window.scrollY / scrollableHeight, 1)
                        : 0,
                );
                setIsVisible(window.scrollY > visibilityThreshold);
            });
        };

        updateScrollProgress();
        window.addEventListener('scroll', updateScrollProgress, {
            passive: true,
        });
        window.addEventListener('resize', updateScrollProgress);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('resize', updateScrollProgress);
        };
    }, []);

    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <button
            type='button'
            onClick={scrollToTop}
            aria-label='Back to top'
            tabIndex={isVisible ? 0 : -1}
            aria-hidden={!isVisible}
            className={cn(
                'group fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#0b0618]/80 text-white shadow-[0_0_32px_-8px_rgb(139_92_246/0.8)] backdrop-blur-xl transition duration-300 hover:shadow-[0_0_40px_-6px_rgb(139_92_246/1)] motion-reduce:transition-none sm:right-8 sm:bottom-8',
                isVisible
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0',
                focusRingStyles,
            )}
        >
            <svg
                viewBox='0 0 60 60'
                className='absolute inset-0 size-full -rotate-90'
                aria-hidden='true'
            >
                <defs>
                    <linearGradient
                        id='scroll-progress-gradient'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='1'
                    >
                        <stop offset='0%' stopColor='#a78bfa' />
                        <stop offset='100%' stopColor='#67e8f9' />
                    </linearGradient>
                </defs>
                <circle
                    cx='30'
                    cy='30'
                    r={ringRadius}
                    fill='none'
                    strokeWidth='3'
                    className='stroke-white/10'
                />
                <circle
                    cx='30'
                    cy='30'
                    r={ringRadius}
                    fill='none'
                    strokeWidth='3'
                    strokeLinecap='round'
                    stroke='url(#scroll-progress-gradient)'
                    strokeDasharray={ringCircumference}
                    strokeDashoffset={ringCircumference * (1 - scrollProgress)}
                />
            </svg>
            <ArrowUp className='relative size-5 transition-transform group-hover:-translate-y-0.5' />
        </button>
    );
}
