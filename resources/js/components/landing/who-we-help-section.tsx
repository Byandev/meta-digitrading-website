import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    ShoppingBag,
    Smartphone,
    Store,
    TrendingUp,
} from 'lucide-react';

import { useInView } from '@/hooks/use-in-view';
import { contact } from '@/routes';
import { cn } from '@/lib/utils';

type Audience = {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    image?: string;
};

const audiences: Audience[] = [
    {
        title: 'Startups',
        subtitle: '& Entrepreneurs',
        icon: TrendingUp,
        image: '/images/who-we-help/startups.png',
    },
    {
        title: 'SMEs',
        subtitle: '& Retail Brands',
        icon: ShoppingBag,
        image: '/images/who-we-help/smes.png',
    },
    {
        title: 'Brick-and-Mortar',
        subtitle: 'Stores Going Online',
        icon: Store,
        image: '/images/who-we-help/brick-and-mortar.png',
    },
    {
        title: 'Influencers',
        subtitle: '& Online Sellers',
        icon: Smartphone,
        image: '/images/who-we-help/influencers.png',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function WhoWeHelpSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="who-we-help"
            className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32"
        >
            <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
                <h2
                    className={cn(
                        'text-center text-3xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                        Who{' '}
                    </span>
                    <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                        We Help
                    </span>
                </h2>

                <ul className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
                    {audiences.map((audience, index) => (
                        <li
                            key={audience.title}
                            style={{
                                transitionDelay: `${150 + index * 120}ms`,
                            }}
                            className={cn(
                                'group relative rounded-3xl bg-linear-to-br from-violet-500 to-cyan-300 p-0.5 shadow-[0_24px_50px_-20px_rgb(167_139_250/0.55)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-12px_rgb(103_232_249/0.6)]',
                                revealStyles,
                                hiddenUntilInView,
                            )}
                        >
                            <article className="flex h-full flex-col items-center rounded-[calc(1.5rem-2px)] bg-linear-to-b from-[#05030d] via-[#0d0b26] to-[#3b5a6b] px-6 pt-12 pb-8 text-center">
                                <div
                                    className={cn(
                                        'flex flex-col items-center justify-center',
                                        audience.image ? 'h-56 w-full' : 'h-36',
                                    )}
                                >
                                    {audience.image ? (
                                        <img
                                            src={audience.image}
                                            alt=""
                                            width={512}
                                            height={512}
                                            loading="lazy"
                                            draggable={false}
                                            className="size-full max-w-56 object-contain transition duration-500 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0"
                                        />
                                    ) : (
                                        <audience.icon
                                            aria-hidden="true"
                                            className="size-20 text-violet-300 transition duration-500 group-hover:-translate-y-1 group-hover:text-cyan-200"
                                            strokeWidth={1.5}
                                        />
                                    )}
                                </div>

                                <h3
                                    className={cn(
                                        'mt-2 text-xl leading-tight font-bold tracking-tight',
                                        audience.image && 'sr-only',
                                    )}
                                >
                                    <span className="block bg-linear-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                        {audience.title}
                                    </span>
                                    <span className="block text-lg text-violet-200">
                                        {audience.subtitle}
                                    </span>
                                </h3>

                                <a
                                    href={contact().url}
                                    className="mt-8 inline-flex w-full max-w-60 items-center justify-center gap-2 rounded-xl border border-white/30 bg-linear-to-r from-indigo-700 via-violet-600 to-fuchsia-400 px-6 py-3 text-base font-semibold tracking-wide text-white uppercase transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0b26] focus-visible:outline-none"
                                >
                                    Learn More
                                    <span className="sr-only">
                                        about how we help {audience.title}{' '}
                                        {audience.subtitle}
                                    </span>
                                    <ArrowRight
                                        aria-hidden="true"
                                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
