import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, Megaphone, Sparkles, TrendingUp } from 'lucide-react';
import type { MouseEvent } from 'react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type Service = {
    title: string;
    highlight: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    image?: string;
};

const services: Service[] = [
    {
        title: 'Meta',
        highlight: 'Digitrading',
        description:
            'We empower exponential growth — helping businesses move from potential to performance through bold ideas and transformative digital solutions.',
        icon: TrendingUp,
        accent: 'from-violet-600/70 via-indigo-700/40',
    },
    {
        title: 'Meta',
        highlight: 'Advertising',
        description:
            'We create advertising that informs, captivates, and converts — transforming ideas into campaigns that drive exponential growth and lasting brand impact.',
        icon: Megaphone,
        accent: 'from-fuchsia-600/60 via-violet-700/40',
    },
    {
        title: 'Meta',
        highlight: 'Brands',
        description:
            'We build powerful, purpose-driven identities that elevate businesses in the digital space. From vision to voice, we help brands create emotional connections, lasting impressions, and exponential growth.',
        icon: Sparkles,
        accent: 'from-cyan-500/50 via-indigo-700/40',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

function trackSpotlight(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
        '--spotlight-x',
        `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
        '--spotlight-y',
        `${event.clientY - bounds.top}px`,
    );
}

export default function ServicesSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="services"
            className="relative isolate overflow-hidden bg-black py-16 lg:py-32 sm:py-24"
        >
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgb(67_56_202/0.8),rgb(49_46_129/0.4)_45%,transparent_70%)] blur-2xl"
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
                        What We Do
                    </p>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            Our{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-pretty text-white/60 sm:text-lg">
                        Three specialized brands, one goal — helping your
                        business grow from first idea to lasting impact.
                    </p>
                </div>

                <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8 sm:mt-14">
                    {services.map((service, index) => (
                        <li
                            key={service.highlight}
                            style={{
                                transitionDelay: `${150 + index * 120}ms`,
                            }}
                            className={cn(
                                'group relative rounded-2xl p-px md:last:col-span-2 lg:last:col-span-1 sm:rounded-3xl',
                                revealStyles,
                                hiddenUntilInView,
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl bg-white/10 sm:rounded-3xl"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500/50 to-cyan-300 opacity-0 shadow-[0_0_60px_-10px_rgb(139_92_246/0.8)] transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 sm:rounded-3xl"
                            />

                            <article
                                onMouseMove={trackSpotlight}
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-[#07040f] sm:rounded-[calc(1.5rem-1px)]"
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(420px_circle_at_var(--spotlight-x)_var(--spotlight-y),rgb(167_139_250/0.12),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />

                                <div className="relative aspect-[16/10] overflow-hidden md:group-last:aspect-[32/9] lg:group-last:aspect-[16/10]">
                                    {service.image ? (
                                        <img
                                            src={service.image}
                                            alt=""
                                            className="size-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div
                                            className={cn(
                                                'relative flex size-full items-center justify-center bg-linear-to-br to-[#07040f]',
                                                service.accent,
                                            )}
                                        >
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[28px_28px]"
                                            />
                                            <div className="relative flex size-24 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_0_50px_-5px_rgb(167_139_250/0.7)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_70px_0_rgb(103_232_249/0.6)] sm:rounded-3xl">
                                                <service.icon
                                                    aria-hidden="true"
                                                    className="size-11 text-white"
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <span className="absolute top-5 left-6 font-mono text-sm tracking-widest text-white/50">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#07040f] to-transparent"
                                    />
                                </div>

                                <div className="relative z-20 flex flex-1 flex-col p-5 lg:p-8 sm:p-7">
                                    <h3 className="text-xl font-bold tracking-tight uppercase lg:text-[1.7rem] sm:text-2xl">
                                        <span className="text-violet-100">
                                            {service.title}{' '}
                                        </span>
                                        <span className="bg-linear-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                                            {service.highlight}
                                        </span>
                                    </h3>
                                    <p className="mt-4 flex-1 text-base leading-relaxed text-pretty text-white/65">
                                        {service.description}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="mt-8 inline-flex items-center gap-2 self-start rounded-full text-sm font-semibold tracking-wider text-violet-200 uppercase transition-colors hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07040f] focus-visible:outline-none"
                                    >
                                        Learn more
                                        <span className="sr-only">
                                            about {service.title}{' '}
                                            {service.highlight}
                                        </span>
                                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
