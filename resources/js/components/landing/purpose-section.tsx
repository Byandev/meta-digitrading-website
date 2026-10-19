import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function PurposeSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="purpose"
            className="relative isolate flex min-h-dvh items-center overflow-hidden bg-black py-24 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -z-10 h-[32rem] w-[60rem] max-w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/30 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-48 -z-10 size-[28rem] rounded-full bg-indigo-700/35 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -top-32 -right-48 -z-10 size-[28rem] rounded-full bg-cyan-500/20 blur-3xl"
            />

            <div
                ref={ref}
                className={cn(
                    'mx-auto w-full max-w-7xl px-6 text-center lg:px-10',
                    revealStyles,
                    hiddenUntilInView,
                )}
            >
                <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
                    <span className="bg-linear-to-r from-white via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                        Massive Transformative
                    </span>{' '}
                    <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                        Purpose
                    </span>
                </h2>

                <p className="mx-auto mt-10 max-w-3xl text-2xl leading-snug font-medium text-balance text-white sm:text-3xl">
                    Our <span className="text-cyan-300">vision</span> is to make{' '}
                    <span className="text-cyan-300">
                        prosperity a living reality for everyone
                    </span>
                    .
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/65">
                    To inspire a generation that drives progress through
                    compassion, innovation, and collective growth. We dream of a
                    future where opportunities know no boundaries, where every
                    potential is nurtured, and where people are empowered to
                    thrive, uplift others, and create a world filled with
                    purpose, hope, and lasting impact.
                </p>
            </div>
        </section>
    );
}
