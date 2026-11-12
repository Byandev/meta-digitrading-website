import { cn } from '@/lib/utils';

const entranceStyles =
    'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none';

export default function ServicesHeroSection() {
    return (
        <section
            id="what-we-do"
            className="relative isolate flex min-h-dvh items-center overflow-hidden bg-black"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgb(124_58_237/0.7),rgb(49_46_129/0.5)_45%,transparent_75%)]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] bg-size-[64px_64px]"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/2 -right-40 -z-10 size-[28rem] -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgb(103_232_249/0.85),rgb(34_211_238/0.35)_35%,transparent_70%)] blur-2xl sm:size-[40rem] lg:right-0"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-48 -z-10 size-[28rem] rounded-full bg-indigo-600/30 blur-3xl"
            />

            <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-10 lg:pt-32 lg:pb-24 sm:pt-36 sm:pb-24">
                <div className="max-w-2xl">
                    <p
                        className={cn(
                            'inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm',
                            entranceStyles,
                        )}
                    >
                        <span className="size-2 rounded-full bg-cyan-300" />
                        Start Something Bigger
                    </p>
                    <h1
                        className={cn(
                            'mt-6 text-5xl font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl',
                            entranceStyles,
                            'delay-100',
                        )}
                    >
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            What{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            We Do
                        </span>
                    </h1>

                    <div
                        className={cn(
                            'mt-8 flex flex-col gap-6 text-base leading-relaxed text-pretty text-white/70 sm:text-lg',
                            entranceStyles,
                            'delay-200',
                        )}
                    >
                        <p>
                            <span className="font-semibold text-violet-400">
                                Meta Digitrading
                            </span>{' '}
                            is your{' '}
                            <span className="font-semibold text-cyan-300">
                                all-in-one e-commerce solutions provider
                            </span>
                            , empowering businesses to sell smarter, faster,
                            and better in the digital age.
                        </p>
                        <p className="border-l-2 border-cyan-300/70 pl-6 text-white/90">
                            We are dedicated to helping entrepreneurs, SMEs, and
                            established brands build, scale, and sustain their
                            online presence through reliable, transparent, and
                            future-ready digital solutions. At Meta Digitrading,
                            we don’t just create platforms — we create
                            possibilities, driving growth and prosperity through
                            innovation and trust.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
