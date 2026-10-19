import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

import LandingImage from '@/components/landing/landing-image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type CultureProgram = {
    title: string;
    description: string;
    photos: string[];
};

/**
 * Drop the photos into public/images/culture/ using these file names.
 * Add or remove entries in `photos` to match how many each program has;
 * missing files show a branded placeholder instead.
 */
const culturePrograms: CultureProgram[] = [
    {
        title: 'META Mondays',
        description:
            'A dedicated space for continuous learning and development, where employees gain new insights, strengthen their skills, and grow both personally and professionally.',
        photos: [
            '/images/culture/meta-mondays-1.jpg',
            '/images/culture/meta-mondays-2.jpg',
            '/images/culture/meta-mondays-3.jpg',
        ],
    },
    {
        title: 'Monthly Awarding',
        description:
            'A time to recognize achievements, celebrate milestones, and appreciate the people who continue to contribute to META’s growth. We celebrate not only results, but also the effort, progress, and growth behind them.',
        photos: [
            '/images/culture/monthly-awarding-1.jpg',
            '/images/culture/monthly-awarding-2.jpg',
            '/images/culture/monthly-awarding-3.jpg',
        ],
    },
    {
        title: 'Powerhour',
        description:
            'A collaborative learning and immersion experience for META Interns, Creative Editors, and Business Partners. It creates opportunities to learn, exchange ideas, collaborate, and gain meaningful exposure to the META environment.',
        photos: [
            '/images/culture/powerhour-1.jpg',
            '/images/culture/powerhour-2.jpg',
            '/images/culture/powerhour-3.jpg',
        ],
    },
    {
        title: 'META Movement',
        description:
            'Our commitment to wellness through movement. From badminton games to other active sessions, META Movement keeps our people active, healthy, and connected.',
        photos: [
            '/images/culture/meta-movement-1.jpg',
            '/images/culture/meta-movement-2.jpg',
            '/images/culture/meta-movement-3.jpg',
        ],
    },
];

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

const roundButtonStyles =
    'flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/70';

function CulturePhotoCarousel({ program }: { program: CultureProgram }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const hasMultiplePhotos = program.photos.length > 1;

    const showPhoto = (index: number) =>
        setActiveIndex((index + program.photos.length) % program.photos.length);

    return (
        <div className="rounded-3xl bg-linear-to-br from-violet-500 via-indigo-500/50 to-cyan-300 p-px lg:flex lg:min-h-0 lg:flex-col">
            <div className="rounded-[calc(1.5rem-1px)] bg-linear-to-b from-[#07040f] from-55% to-cyan-900/60 p-3 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black ring-1 ring-cyan-300/50 lg:aspect-auto lg:min-h-0 lg:flex-[1_1_20rem]">
                    <LandingImage
                        key={program.photos[activeIndex]}
                        src={program.photos[activeIndex]}
                        alt={`${program.title} photo ${activeIndex + 1} of ${program.photos.length}`}
                        showFileName
                        className="size-full animate-in duration-500 fade-in motion-reduce:animate-none"
                    />

                    {hasMultiplePhotos && (
                        <>
                            <button
                                type="button"
                                onClick={() => showPhoto(activeIndex - 1)}
                                aria-label={`Previous ${program.title} photo`}
                                className={cn(
                                    roundButtonStyles,
                                    'absolute top-1/2 left-3 -translate-y-1/2',
                                    focusRingStyles,
                                )}
                            >
                                <ChevronLeft className="size-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => showPhoto(activeIndex + 1)}
                                aria-label={`Next ${program.title} photo`}
                                className={cn(
                                    roundButtonStyles,
                                    'absolute top-1/2 right-3 -translate-y-1/2',
                                    focusRingStyles,
                                )}
                            >
                                <ChevronRight className="size-5" />
                            </button>

                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5"
                            >
                                {program.photos.map((photo, index) => (
                                    <span
                                        key={photo}
                                        className={cn(
                                            'h-1.5 rounded-full transition-all duration-300',
                                            index === activeIndex
                                                ? 'w-6 bg-white'
                                                : 'w-1.5 bg-white/45',
                                        )}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function CultureSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();
    const trackRef = useRef<HTMLUListElement>(null);

    const scrollTrack = (direction: 1 | -1) => {
        const track = trackRef.current;
        const card = track?.firstElementChild;

        if (!track || !card) {
            return;
        }

        track.scrollBy({
            left: direction * (card.getBoundingClientRect().width + 24),
            behavior: 'smooth',
        });
    };

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="culture"
            className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-black py-24 lg:h-dvh lg:min-h-0 lg:pt-24 lg:pb-10"
        >
            <div
                aria-hidden="true"
                className="absolute -top-32 -left-48 -z-10 size-[32rem] rounded-full bg-cyan-500/20 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-linear-to-t from-violet-700/50 via-indigo-950/40 to-transparent"
            />

            <div
                ref={ref}
                className="flex w-full flex-1 flex-col justify-center lg:min-h-0"
            >
                <div
                    className={cn(
                        'mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                            <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                                Our{' '}
                            </span>
                            <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                                Culture
                            </span>
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-pretty text-white/70">
                            At META, we believe that growth goes beyond work. We
                            create spaces where people can learn, connect,
                            celebrate progress, and take care of themselves.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => scrollTrack(-1)}
                            aria-label="Scroll to previous programs"
                            className={cn(roundButtonStyles, focusRingStyles)}
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollTrack(1)}
                            aria-label="Scroll to next programs"
                            className={cn(roundButtonStyles, focusRingStyles)}
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl px-6 lg:flex lg:min-h-0 lg:flex-col lg:px-10">
                    <ul
                        ref={trackRef}
                        className={cn(
                            'mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:mt-10 lg:grid lg:min-h-0 lg:auto-cols-[calc((100%-3rem)/3)] lg:grid-flow-col lg:grid-rows-[minmax(0,1fr)_auto_auto] lg:gap-y-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                            revealStyles,
                            hiddenUntilInView,
                            'delay-150',
                        )}
                    >
                        {culturePrograms.map((program) => (
                            <li
                                key={program.title}
                                className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:row-span-3 lg:grid lg:w-auto lg:min-h-0 lg:grid-rows-subgrid"
                            >
                                <CulturePhotoCarousel program={program} />
                                <h3 className="mt-6 shrink-0 bg-linear-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent uppercase lg:text-3xl">
                                    {program.title}
                                </h3>
                                <p className="mt-3 shrink-0 text-base leading-relaxed text-pretty text-white/75">
                                    {program.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
