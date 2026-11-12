import { ArrowRight } from 'lucide-react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function CtaSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="get-started"
            className="relative isolate overflow-hidden bg-linear-to-b from-[#3a1f94] to-black py-16 lg:py-32 sm:py-24"
        >
            <div
                ref={ref}
                className={cn(
                    'mx-auto max-w-6xl px-6 text-center lg:px-10',
                    revealStyles,
                    hiddenUntilInView,
                )}
            >
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase sm:text-sm">
                    Here&apos;s to the next chapter
                </p>
                <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
                    <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                        Ready to{' '}
                    </span>
                    <span className="bg-linear-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                        Transform Your Business?
                    </span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-white/75 lg:text-xl sm:text-lg">
                    Let&apos;s work together to make your digital success a
                    reality. Contact us today to learn how META Digitrading can
                    help you thrive.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:mt-10">
                    <a
                        href="#contact"
                        className={cn(
                            'group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-700 via-indigo-600 to-fuchsia-500 px-9 text-base font-semibold tracking-wide text-white uppercase shadow-[0_0_40px_-8px_rgb(139_92_246/0.9)] ring-1 ring-white/25 transition hover:shadow-[0_0_56px_-6px_rgb(139_92_246/1)] hover:brightness-110',
                            focusRingStyles,
                        )}
                    >
                        Get Started
                        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#services"
                        className={cn(
                            'inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/5 px-9 text-base font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition hover:border-white/45 hover:bg-white/10',
                            focusRingStyles,
                        )}
                    >
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
}
