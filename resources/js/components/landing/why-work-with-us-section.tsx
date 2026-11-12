import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type Benefit = {
    title: string;
    description: string;
};

const benefits: Benefit[] = [
    {
        title: 'Growth Opportunities',
        description:
            'Continuous learning and career development in a fast-growing company.',
    },
    {
        title: 'Work-Life Balance',
        description:
            'We believe in sustainable work practices and employee well-being.',
    },
    {
        title: 'Innovative Culture',
        description:
            'Work on cutting-edge projects that shape the future of digital commerce.',
    },
    {
        title: 'Collaborative Team',
        description:
            'Work with talented professionals who are passionate about their craft.',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function WhyWorkWithUsSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="why-work-with-us"
            className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32"
        >
            <div ref={ref} className="mx-auto max-w-5xl px-6 lg:px-10">
                <h2
                    className={cn(
                        'text-center text-3xl font-bold tracking-tight text-balance uppercase sm:text-5xl',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                        Why Work{' '}
                    </span>
                    <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                        With Meta Digitrading
                    </span>
                </h2>

                <ul className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <li
                            key={benefit.title}
                            style={{
                                transitionDelay: `${150 + index * 100}ms`,
                            }}
                            className={cn(
                                'relative rounded-2xl bg-linear-to-br from-violet-500/80 to-cyan-300/70 p-px shadow-[0_24px_40px_-24px_rgb(167_139_250/0.5)]',
                                revealStyles,
                                hiddenUntilInView,
                            )}
                        >
                            <article className="h-full rounded-[calc(1rem-1px)] bg-linear-to-b from-[#05030d] via-[#0d0b26] to-[#2f4a5a] px-6 py-6 sm:px-7">
                                <h3 className="text-xl font-semibold tracking-wide text-white uppercase sm:text-2xl">
                                    {benefit.title}
                                </h3>
                                <p className="mt-2 text-base leading-relaxed text-pretty text-white/75">
                                    {benefit.description}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
