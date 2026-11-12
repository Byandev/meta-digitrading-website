import { MapPin } from 'lucide-react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { home } from '@/routes';

type Position = {
    title: string;
    description: string;
    location: string;
    type: string;
};

/**
 * Add or remove roles here as they open and close. When empty, the section
 * shows a general-application message instead of a list.
 */
const positions: Position[] = [
    {
        title: 'Digital Marketing Specialist',
        description: 'Manage social media and digital campaigns.',
        location: 'Bacoor, Cavite',
        type: 'Full-time',
    },
    {
        title: 'Content Creator',
        description: 'Create engaging content for our brands.',
        location: 'Bacoor, Cavite',
        type: 'Full-time',
    },
    {
        title: 'E-Commerce Developer',
        description: 'Build and optimize e-commerce platforms.',
        location: 'Remote',
        type: 'Full-time',
    },
    {
        title: 'Customer Service Representative',
        description:
            'Assist customers, address inquiries, and provide excellent customer support.',
        location: 'Bacoor, Cavite',
        type: 'Full-time',
    },
    {
        title: 'Human Resources Associate',
        description:
            'Handle recruitment, employee relations, and HR administrative tasks.',
        location: 'Bacoor, Cavite',
        type: 'Full-time',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

export default function OpenPositionsSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="open-positions"
            className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32"
        >
            <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
                <h2
                    className={cn(
                        'text-center text-3xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                        Open{' '}
                    </span>
                    <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                        Positions
                    </span>
                </h2>

                {positions.length > 0 ? (
                    <ul className="mt-10 flex flex-col gap-5 sm:mt-14 sm:gap-8">
                        {positions.map((position, index) => (
                            <li
                                key={position.title}
                                style={{
                                    transitionDelay: `${150 + index * 80}ms`,
                                }}
                                className={cn(
                                    'rounded-2xl bg-linear-to-r from-violet-500/80 to-cyan-300/70 p-px',
                                    revealStyles,
                                    hiddenUntilInView,
                                )}
                            >
                                <article className="flex flex-col gap-5 rounded-[calc(1rem-1px)] bg-linear-to-br from-[#0b0a1f] to-[#050409] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-wide text-white uppercase sm:text-2xl">
                                            {position.title}
                                        </h3>
                                        <p className="mt-1 text-base leading-relaxed text-pretty text-white/80 sm:text-lg">
                                            {position.description}
                                        </p>
                                        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/65 sm:text-base">
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin
                                                    aria-hidden="true"
                                                    className="size-4"
                                                />
                                                {position.location}
                                            </span>
                                            <span className="rounded-full border border-cyan-300/40 bg-indigo-900/50 px-2.5 py-0.5 text-cyan-200">
                                                {position.type}
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href={`${home().url}#contact`}
                                        className={cn(
                                            'inline-flex shrink-0 items-center self-start rounded-lg border-2 border-violet-400 bg-cyan-200 px-4 py-1.5 text-base font-semibold tracking-wide text-[#1a0b3d] uppercase shadow-[0_10px_24px_-8px_rgb(167_139_250/0.8)] transition hover:bg-white sm:self-auto',
                                            focusRingStyles,
                                        )}
                                    >
                                        Apply Now
                                        <span className="sr-only">
                                            for {position.title}
                                        </span>
                                    </a>
                                </article>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div
                        className={cn(
                            'mt-10 rounded-2xl bg-linear-to-r from-violet-500/80 to-cyan-300/70 p-px sm:mt-14',
                            revealStyles,
                            hiddenUntilInView,
                            'delay-150',
                        )}
                    >
                        <div className="rounded-[calc(1rem-1px)] bg-[#07040f] px-6 py-12 text-center sm:px-10">
                            <p className="text-xl font-semibold tracking-wide text-white uppercase">
                                No open roles right now
                            </p>
                            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-pretty text-white/65">
                                We&apos;re always glad to meet passionate
                                people. Reach out and tell us how you&apos;d
                                like to grow with Meta Digitrading.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
