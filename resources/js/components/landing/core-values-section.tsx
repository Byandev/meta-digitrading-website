import type { LucideIcon } from 'lucide-react';
import { HeartHandshake, Leaf, ShieldCheck, Users } from 'lucide-react';

import LandingImage from '@/components/landing/landing-image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type CoreValue = {
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    imageAlt: string;
    /** Keeps the subject in frame when the photo is cropped to the card. */
    imagePosition: string;
    gridSpan: string;
};

/**
 * Drop the team photos into public/images/core-values/ using these file
 * names. Missing files show a branded placeholder instead.
 */
const coreValues: CoreValue[] = [
    {
        title: 'Commitment',
        description:
            'Showing up fully for the purpose, the people, and the promise.',
        icon: HeartHandshake,
        image: '/images/core-values/commitment.jpg',
        imageAlt: 'A team member speaking to the group with a microphone',
        imagePosition: 'object-[center_25%]',
        gridSpan: 'lg:col-span-7',
    },
    {
        title: 'Collaboration',
        description:
            'Working together with clarity, trust, and shared purpose.',
        icon: Users,
        image: '/images/core-values/collaboration.jpg',
        imageAlt: 'Team members gathered around a laptop working together',
        imagePosition: 'object-[center_30%]',
        gridSpan: 'lg:col-span-5',
    },
    {
        title: 'Accountability',
        description:
            'Owning your role, honoring your word, and learning forward.',
        icon: ShieldCheck,
        image: '/images/core-values/accountability.jpg',
        imageAlt: 'Team members seated in a circle during a discussion',
        imagePosition: 'object-bottom',
        gridSpan: 'lg:col-span-5',
    },
    {
        title: 'Mindfulness',
        description: 'Working with presence, awareness, and intention.',
        icon: Leaf,
        image: '/images/core-values/mindfulness.jpg',
        imageAlt: 'Team members in a quiet moment of reflection',
        imagePosition: 'object-[30%_40%]',
        gridSpan: 'lg:col-span-7',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function CoreValuesSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="core-values"
            className="relative isolate overflow-hidden bg-black py-24 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="absolute -top-32 -left-48 -z-10 size-[32rem] rounded-full bg-indigo-600/35 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -top-32 -right-48 -z-10 size-[28rem] rounded-full bg-cyan-500/20 blur-3xl"
            />

            <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
                <div
                    className={cn(
                        'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <div>
                        <p className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm">
                            <span className="size-2 rounded-full bg-cyan-300" />
                            What Drives Us
                        </p>
                        <h2 className="mt-6 text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                            <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                                Our{' '}
                            </span>
                            <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                                Core Values
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-md text-lg leading-relaxed text-pretty text-white/60 lg:pb-2">
                        The principles that guide how we work, lead, and grow
                        together — every day, in every project.
                    </p>
                </div>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:auto-rows-[26rem] lg:grid-cols-12">
                    {coreValues.map((value, index) => (
                        <li
                            key={value.title}
                            style={{
                                transitionDelay: `${150 + index * 100}ms`,
                            }}
                            className={cn(
                                'group relative min-h-[26rem] rounded-3xl p-px lg:min-h-0',
                                value.gridSpan,
                                revealStyles,
                                hiddenUntilInView,
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-3xl bg-white/10"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-500 via-indigo-500/60 to-cyan-300 opacity-0 shadow-[0_0_60px_-12px_rgb(139_92_246/0.8)] transition-opacity duration-500 group-hover:opacity-100"
                            />

                            <article className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#07040f]">
                                <LandingImage
                                    src={value.image}
                                    alt={value.imageAlt}
                                    className={cn(
                                        'absolute inset-0 size-full transition duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100',
                                        value.imagePosition,
                                    )}
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07040f] via-[#07040f]/60 via-40% to-transparent"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                <span className="absolute top-5 right-5 font-mono text-sm tracking-widest text-white/60">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                                    <span className="flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_0_30px_-6px_rgb(167_139_250/0.7)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1">
                                        <value.icon
                                            aria-hidden="true"
                                            className="size-6 text-white"
                                            strokeWidth={1.5}
                                        />
                                    </span>
                                    <h3 className="mt-5 bg-linear-to-r from-violet-200 to-cyan-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent uppercase lg:text-4xl">
                                        {value.title}
                                    </h3>
                                    <p className="mt-3 max-w-sm text-base leading-relaxed text-pretty text-white/75 lg:text-lg">
                                        {value.description}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
