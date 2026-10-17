import LandingImage from '@/components/landing/landing-image';
import { cn } from '@/lib/utils';

const entranceStyles =
    'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none';

export default function AboutCompanySection() {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-black"
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
                className="absolute -right-48 bottom-0 -z-10 size-[32rem] rounded-full bg-cyan-500/20 blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 lg:px-10 lg:pt-44 lg:pb-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p
                            className={cn(
                                'inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm',
                                entranceStyles,
                            )}
                        >
                            <span className="size-2 rounded-full bg-cyan-300" />
                            About Our Company
                        </p>
                        <h1
                            className={cn(
                                'mt-6 text-5xl font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl',
                                entranceStyles,
                                'delay-100',
                            )}
                        >
                            <span className="block bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                                Meta
                            </span>
                            <span className="block bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                                Digitrading
                            </span>
                        </h1>

                        <div
                            className={cn(
                                'mt-8 flex flex-col gap-6 text-lg leading-relaxed text-pretty text-white/70',
                                entranceStyles,
                                'delay-200',
                            )}
                        >
                            <p>
                                Founded in 2024, Meta Digitrading is a
                                forward-thinking company specializing in digital
                                trading and e-commerce solutions. We are driven
                                by our passion for innovation and our commitment
                                to helping individuals and businesses thrive in
                                the ever-evolving digital landscape.
                            </p>
                            <p className="border-l-2 border-cyan-300/70 pl-6 text-white/90">
                                At Meta Digitrading, we believe in creating
                                opportunities that go beyond
                                transactions—empowering growth, connectivity,
                                and prosperity through smart, sustainable, and
                                technology-driven solutions.
                            </p>
                        </div>
                    </div>

                    <div
                        className={cn(
                            'group relative aspect-3/2 overflow-hidden rounded-3xl border border-white/10 bg-[#07040f]',
                            entranceStyles,
                            'delay-300',
                        )}
                    >
                        <LandingImage
                            src="/images/about/team.png"
                            alt="The Meta Digitrading team cheering together at a company event"
                            className="size-full transition duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-600/35 via-violet-900/20 to-indigo-950/45 mix-blend-multiply"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
