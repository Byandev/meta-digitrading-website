import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';

import LandingImage from '@/components/landing/landing-image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type ProductSlide = {
    src: string;
    alt: string;
    caption: string;
    /** Overrides how the image fills the main frame (defaults to object-contain). */
    frameStyles?: string;
};

/**
 * Drop the real images into public/images/featured-product/ using these
 * file names. Missing files show a branded placeholder instead.
 */
const productSlides: ProductSlide[] = [
    {
        src: '/images/featured-product/pikutin-collection.jpg',
        alt: 'PIKUTIN perfume collection',
        caption: 'The Collection',
        frameStyles: 'object-cover object-[center_70%]',
    },
    {
        src: '/images/featured-product/pikutin-signature-scents.jpg',
        alt: 'PIKUTIN — Find your signature scent, five signature scents on display',
        caption: 'Find Your Signature Scent',
        frameStyles: 'object-cover',
    },
    {
        src: '/images/featured-product/pikutin-og.jpg',
        alt: 'PIKUTIN OG — Effortlessly fresh extrait de parfum, 50 ml',
        caption: 'Pikutin OG — Effortlessly Fresh',
    },
    {
        src: '/images/featured-product/pikutin-harabas.jpg',
        alt: 'PIKUTIN Harabas — Rugged and masculine extrait de parfum, 50 ml',
        caption: 'Harabas — Rugged & Masculine',
    },
    {
        src: '/images/featured-product/pikutin-padrino.jpg',
        alt: 'PIKUTIN Padrino — Executive presence, pineapple, smoky birch and woody notes',
        caption: 'Padrino — Executive Presence',
    },
];

const scents = ['Pikutin OG', 'Padrino', 'Harabas', 'Habulin', 'Sputing'];

const swipeThreshold = 40;

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

const arrowButtonStyles =
    'absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-100 backdrop-blur-md transition hover:scale-105 hover:bg-black/70 lg:opacity-0 lg:group-focus-within:opacity-100 lg:group-hover:opacity-100';

export default function FeaturedProductSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);
    const swipeStartX = useRef<number | null>(null);

    const activeSlide = productSlides[activeIndex];
    const showSlide = (index: number) =>
        setActiveIndex((index + productSlides.length) % productSlides.length);

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
            id="featured-product"
            className="relative isolate overflow-hidden bg-black py-24 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-64 -z-10 size-[36rem] rounded-full bg-indigo-700/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/4 -right-64 -z-10 size-[36rem] rounded-full bg-cyan-500/25 blur-3xl"
            />

            <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
                <div
                    className={cn(
                        'mx-auto flex max-w-2xl flex-col items-center text-center',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <p className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm">
                        <span className="size-2 rounded-full bg-cyan-300" />
                        Spotlight
                    </p>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            Featured{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            Product
                        </span>
                    </h2>
                </div>

                <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                    <div
                        className={cn(
                            'delay-150',
                            revealStyles,
                            hiddenUntilInView,
                        )}
                    >
                        <div className="rounded-3xl bg-linear-to-br from-violet-500 via-indigo-500/50 to-cyan-300 p-px shadow-[0_0_60px_-15px_rgb(139_92_246/0.8)]">
                            <div className="rounded-[calc(1.5rem-1px)] bg-linear-to-b from-[#07040f] from-55% to-violet-600/60 p-3 sm:p-4">
                                <figure
                                    tabIndex={0}
                                    role="region"
                                    aria-roledescription="carousel"
                                    aria-label="PIKUTIN product gallery. Use the left and right arrow keys to browse."
                                    onKeyDown={navigateWithKeyboard}
                                    onPointerDown={startSwipe}
                                    onPointerUp={endSwipe}
                                    onPointerCancel={() =>
                                        (swipeStartX.current = null)
                                    }
                                    className={cn(
                                        'group relative aspect-[16/10] touch-pan-y overflow-hidden rounded-2xl bg-black ring-1 ring-cyan-300/50 select-none',
                                        focusRingStyles,
                                    )}
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                    >
                                        <LandingImage
                                            key={`backdrop-${activeSlide.src}`}
                                            src={activeSlide.src}
                                            alt={activeSlide.alt}
                                            className="size-full scale-110 opacity-50 blur-2xl"
                                        />
                                    </div>
                                    <LandingImage
                                        key={activeSlide.src}
                                        src={activeSlide.src}
                                        alt={activeSlide.alt}
                                        showFileName
                                        className={cn(
                                            'relative size-full object-contain animate-in duration-500 fade-in zoom-in-95 motion-reduce:animate-none',
                                            activeSlide.frameStyles,
                                        )}
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            showSlide(activeIndex - 1)
                                        }
                                        aria-label="Previous image"
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
                                        aria-label="Next image"
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
                                        className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4"
                                    >
                                        <span className="text-sm font-semibold tracking-wider text-white uppercase sm:text-base">
                                            {activeSlide.caption}
                                        </span>
                                        <span className="shrink-0 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
                                            {activeIndex + 1} /{' '}
                                            {productSlides.length}
                                        </span>
                                    </figcaption>

                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 flex gap-1.5 p-3"
                                    >
                                        {productSlides.map((slide, index) => (
                                            <span
                                                key={slide.src}
                                                className={cn(
                                                    'h-1 flex-1 rounded-full transition-colors duration-300',
                                                    index === activeIndex
                                                        ? 'bg-linear-to-r from-violet-400 to-cyan-300'
                                                        : 'bg-white/20',
                                                )}
                                            />
                                        ))}
                                    </div>
                                </figure>
                            </div>
                        </div>

                        <ul className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
                            {productSlides.map((slide, index) => (
                                <li key={slide.src}>
                                    <button
                                        type="button"
                                        onClick={() => showSlide(index)}
                                        aria-label={`Show ${slide.caption}`}
                                        aria-current={index === activeIndex}
                                        className={cn(
                                            'block aspect-square w-full overflow-hidden rounded-xl ring-1 transition duration-300',
                                            index === activeIndex
                                                ? 'shadow-[0_0_24px_-4px_rgb(103_232_249/0.7)] ring-2 ring-cyan-300'
                                                : 'opacity-50 ring-white/15 hover:opacity-100 hover:ring-white/40',
                                            focusRingStyles,
                                        )}
                                    >
                                        <LandingImage
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="size-full"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className={cn(
                            'delay-300',
                            revealStyles,
                            hiddenUntilInView,
                        )}
                    >
                        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                            Fragrance Collection
                        </p>
                        <h3 className="mt-3 text-4xl font-bold tracking-tight text-white uppercase lg:text-5xl">
                            Pikutin{' '}
                            <span className="bg-linear-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                                Perfume
                            </span>
                        </h3>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-white/65">
                            Experience luxury and elegance with our premium
                            PIKUTIN perfume collection. Crafted with the finest
                            ingredients and designed for those who appreciate
                            quality and sophistication.
                        </p>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                                Scents in the collection
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {scents.map((scent) => (
                                    <li
                                        key={scent}
                                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-white/85 uppercase backdrop-blur-sm"
                                    >
                                        {scent}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            className={cn(
                                'group mt-10 inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-700 via-indigo-600 to-fuchsia-500 px-8 text-base font-semibold tracking-wide text-white uppercase shadow-[0_0_40px_-8px_rgb(139_92_246/0.8)] ring-1 ring-white/20 transition hover:shadow-[0_0_56px_-6px_rgb(139_92_246/0.95)] hover:brightness-110 sm:w-auto',
                                focusRingStyles,
                            )}
                        >
                            Explore Collection
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
