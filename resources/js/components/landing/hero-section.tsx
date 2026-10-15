import { ArrowRight, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const entranceStyles =
    'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none';

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative isolate flex min-h-svh items-center overflow-hidden bg-black"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgb(124_58_237/0.85),rgb(49_46_129/0.6)_45%,transparent_75%)]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] bg-size-[64px_64px]"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/4 -right-48 -z-10 size-[40rem] rounded-full bg-[radial-gradient(circle,rgb(103_232_249/0.9)_0%,rgb(34_120_150/0.5)_35%,transparent_70%)] motion-safe:animate-pulse motion-safe:[animation-duration:8s]"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/2 -left-72 -z-10 size-[36rem] rounded-full bg-indigo-700/40 blur-3xl"
            />

            <div className="mx-auto w-full max-w-7xl px-6 pt-36 pb-28 lg:px-10 lg:pt-44">
                <p
                    className={cn(
                        'inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm',
                        entranceStyles,
                    )}
                >
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full rounded-full bg-cyan-300 opacity-75 motion-safe:animate-ping" />
                        <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
                    </span>
                    Start Something Bigger
                </p>

                <h1
                    className={cn(
                        'mt-8 max-w-6xl bg-linear-to-r from-violet-100 via-violet-400 to-cyan-300 bg-clip-text text-5xl leading-[0.95] font-bold tracking-tight text-balance text-transparent uppercase sm:text-6xl lg:text-7xl xl:text-[5.5rem]',
                        entranceStyles,
                        'delay-100',
                    )}
                >
                    Making Prosperity a Reality for Everyone
                </h1>

                <p
                    className={cn(
                        'mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-white/70 lg:text-xl',
                        entranceStyles,
                        'delay-200',
                    )}
                >
                    Transform your business with intelligent e-commerce
                    solutions, expert consulting, and cutting-edge technology.
                    We help entrepreneurs and established businesses scale
                    faster.
                </p>

                <div
                    className={cn(
                        'mt-10 flex flex-col gap-4 sm:flex-row sm:items-center',
                        entranceStyles,
                        'delay-300',
                    )}
                >
                    <a
                        href="#contact"
                        className={cn(
                            'group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-700 via-indigo-600 to-fuchsia-500 px-8 text-base font-semibold tracking-wide text-white uppercase shadow-[0_0_40px_-8px_rgb(139_92_246/0.8)] ring-1 ring-white/20 transition hover:shadow-[0_0_56px_-6px_rgb(139_92_246/0.95)] hover:brightness-110',
                            focusRingStyles,
                        )}
                    >
                        Get Started
                        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#about"
                        className={cn(
                            'inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10',
                            focusRingStyles,
                        )}
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to next section"
                className={cn(
                    'absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-white/50 transition hover:text-white lg:block',
                    focusRingStyles,
                )}
            >
                <ChevronDown className="size-6 motion-safe:animate-bounce" />
            </a>
        </section>
    );
}
