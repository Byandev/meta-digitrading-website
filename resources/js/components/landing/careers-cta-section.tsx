import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function CareersCtaSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="next-step"
            className="relative isolate overflow-hidden bg-linear-to-b from-black via-[#3a1f94] to-[#a58ee6] pt-16 pb-24 sm:pt-24 sm:pb-36 lg:pb-44"
        >
            <div
                ref={ref}
                className={cn(
                    'mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-10',
                    revealStyles,
                    hiddenUntilInView,
                )}
            >
                <h2 className="rounded-xl border border-white/40 bg-linear-to-r from-blue-700 via-indigo-600 to-fuchsia-400 px-6 py-3 text-xl font-semibold tracking-wide text-balance text-white uppercase shadow-[0_0_40px_-8px_rgb(139_92_246/0.9)] sm:px-14 sm:text-3xl lg:text-4xl">
                    Ready to Take the Next Step?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-white/90 sm:text-lg">
                    Send your application today and take the first step toward a
                    meaningful career with META!
                </p>
            </div>
        </section>
    );
}
