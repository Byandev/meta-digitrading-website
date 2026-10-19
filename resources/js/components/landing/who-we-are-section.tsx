import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';

import LandingImage from '@/components/landing/landing-image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type TeamSlide = {
    src: string;
    alt: string;
};

/** The hero already shows team.png, so the carousel opens on a different photo. */
const teamSlides: TeamSlide[] = [
    {
        src: '/images/about/community-studio.jpeg',
        alt: 'Meta Digitrading community group photo at the studio',
    },
    {
        src: '/images/about/community-event.jpg',
        alt: 'Attendees posing together at a Meta Digitrading event',
    },
    {
        src: '/images/about/team.png',
        alt: 'The Meta Digitrading team cheering together at a company event',
    },
];

const swipeThreshold = 40;

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

const arrowButtonStyles =
    'absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/70';

export default function WhoWeAreSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);
    const swipeStartX = useRef<number | null>(null);

    const activeSlide = teamSlides[activeIndex];
    const showSlide = (index: number) =>
        setActiveIndex((index + teamSlides.length) % teamSlides.length);

    const startSwipe = (event: PointerEvent<HTMLElement>) => {
        swipeStartX.current = event.clientX;
    };

    const endSwipe = (event: PointerEvent<HTMLElement>) => {
        if (swipeStartX.current === null) {
            return;
        }

        const distance = event.clientX - swipeStartX.current;
        swipeStartX.current = null;

        if (Math.abs(distance) >= swipeThreshold) {
            showSlide(distance < 0 ? activeIndex + 1 : activeIndex - 1);
        }
    };

    const navigateWithKeyboard = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            showSlide(activeIndex + 1);
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showSlide(activeIndex - 1);
        }
    };

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="who-we-are"
            className="relative isolate flex min-h-dvh items-center overflow-hidden bg-black py-24 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="absolute top-1/4 -left-64 -z-10 size-[36rem] rounded-full bg-indigo-700/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute top-0 -right-64 -z-10 size-[32rem] rounded-full bg-cyan-500/20 blur-3xl"
            />

            <div ref={ref} className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
                    <div className={cn(revealStyles, hiddenUntilInView)}>
                        <div className="rounded-3xl bg-linear-to-br from-violet-500 via-indigo-500/50 to-cyan-300 p-px shadow-[0_24px_60px_-20px_rgb(139_92_246/0.7)]">
                            <div className="rounded-[calc(1.5rem-1px)] bg-linear-to-b from-[#07040f] from-55% to-violet-600/60 p-3 sm:p-4">
                                <figure
                                    tabIndex={0}
                                    role="region"
                                    aria-roledescription="carousel"
                                    aria-label="Meta Digitrading team photos. Use the left and right arrow keys to browse."
                                    onKeyDown={navigateWithKeyboard}
                                    onPointerDown={startSwipe}
                                    onPointerUp={endSwipe}
                                    onPointerCancel={() =>
                                        (swipeStartX.current = null)
                                    }
                                    className={cn(
                                        'relative aspect-3/2 touch-pan-y overflow-hidden rounded-2xl bg-black ring-1 ring-cyan-300/50 select-none',
                                        focusRingStyles,
                                    )}
                                >
                                    <LandingImage
                                        key={activeSlide.src}
                                        src={activeSlide.src}
                                        alt={activeSlide.alt}
                                        className="size-full animate-in duration-500 fade-in zoom-in-95 motion-reduce:animate-none"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-600/35 via-violet-900/20 to-indigo-950/45 mix-blend-multiply"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 to-transparent"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            showSlide(activeIndex - 1)
                                        }
                                        aria-label="Previous photo"
                                        className={cn(
                                            arrowButtonStyles,
                                            'left-3',
                                            focusRingStyles,
                                        )}
                                    >
                                        <ChevronLeft className="size-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            showSlide(activeIndex + 1)
                                        }
                                        aria-label="Next photo"
                                        className={cn(
                                            arrowButtonStyles,
                                            'right-3',
                                            focusRingStyles,
                                        )}
                                    >
                                        <ChevronRight className="size-5" />
                                    </button>

                                    <figcaption
                                        aria-live="polite"
                                        className="absolute right-4 bottom-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/85 tabular-nums backdrop-blur-md"
                                    >
                                        {activeIndex + 1} / {teamSlides.length}
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-center gap-2">
                            {teamSlides.map((slide, index) => (
                                <button
                                    key={slide.src}
                                    type="button"
                                    onClick={() => showSlide(index)}
                                    aria-label={`Show photo ${index + 1}`}
                                    aria-current={index === activeIndex}
                                    className={cn(
                                        'flex h-6 items-center rounded-full',
                                        focusRingStyles,
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'block h-1.5 rounded-full transition-all duration-300',
                                            index === activeIndex
                                                ? 'w-10 bg-linear-to-r from-violet-400 to-cyan-300'
                                                : 'w-5 bg-white/25 hover:bg-white/50',
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        className={cn(
                            'delay-150',
                            revealStyles,
                            hiddenUntilInView,
                        )}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
                            <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                                Who{' '}
                            </span>
                            <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                                Are We?
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
                            We believe in creating a{' '}
                            <strong className="font-semibold text-cyan-300">
                                purpose-driven
                            </strong>
                            , people-powered, and progress-focused workplace.
                            As a start-up in the fast-moving e-commerce
                            industry, we thrive on agility, trust, and
                            collective leadership. META Digitrading is a
                            workplace where there is respect in the
                            environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
