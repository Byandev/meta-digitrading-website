import LandingImage from '@/components/landing/landing-image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type Founder = {
    name: string;
    role: string;
    bio: string;
    image: string;
};

/**
 * Drop the founder portraits into public/images/founders/ using these file
 * names. Transparent PNG cut-outs sit best on the card's violet glow.
 * Missing files show a branded placeholder instead.
 */
const founders: Founder[] = [
    {
        name: 'Vonnaire Vince Menchate',
        role: 'Chief Marketing Officer',
        bio: 'Filipino entrepreneur and e-commerce specialist dedicated to helping entrepreneurs achieve success and fulfillment. Former CEO of LZPN Digitech, sharing valuable insights on e-commerce, business growth, and entrepreneurship.',
        image: '/images/founders/vonnaire-vince-menchate.png',
    },
    {
        name: 'Aquarius Juson',
        role: 'Chief Flow Officer',
        bio: 'Filipino transformational coach dedicated to empowering entrepreneurs for exponential growth with ease and soul. Helps leaders align purpose with performance, guiding them toward meaningful success and authentic transformation.',
        image: '/images/founders/aquarius-juson.png',
    },
    {
        name: 'Leo Francis Ardina',
        role: 'Chief Executive Officer',
        bio: 'Filipino sales and wealth coach, entrepreneur, and mentor known for expertise in sales, investments, and personal development. Empowers individuals to achieve financial success and career growth through practical insights and inspiring content.',
        image: '/images/founders/leo-francis-ardina.png',
    },
    {
        name: 'Bryan Paolo Castro',
        role: 'Chief Exponential Officer',
        bio: 'Filipino investment coach, business mentor, and content creator dedicated to promoting financial literacy and business growth. Through platforms like TikTok, Instagram, and YouTube, he inspires and equips individuals to build smarter financial and entrepreneurial futures.',
        image: '/images/founders/bryan-paolo-castro.png',
    },
];

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

export default function FoundersSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="founders"
            className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-black py-24 lg:h-dvh lg:min-h-0 lg:pt-24 lg:pb-8"
        >
            <div
                aria-hidden="true"
                className="absolute top-1/3 -left-64 -z-10 size-[36rem] rounded-full bg-indigo-700/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/4 -right-64 -z-10 size-[36rem] rounded-full bg-cyan-500/25 blur-3xl"
            />

            <div
                ref={ref}
                className="mx-auto flex w-full max-w-[96rem] flex-1 flex-col justify-center px-6 lg:min-h-0 lg:px-10"
            >
                <div
                    className={cn(
                        'mx-auto flex max-w-3xl flex-col items-center text-center',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl">
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            Our{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            Founders
                        </span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-white/70 lg:text-base">
                        Meet the visionary leaders behind META Digitrading,
                        bringing decades of combined expertise in digital
                        trading, e-commerce, and business transformation.
                    </p>
                </div>

                <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:min-h-0 lg:flex-1 lg:grid-cols-4">
                    {founders.map((founder, index) => (
                        <li
                            key={founder.name}
                            style={{
                                transitionDelay: `${150 + index * 100}ms`,
                            }}
                            className={cn(
                                'group relative rounded-3xl p-px lg:min-h-0',
                                revealStyles,
                                hiddenUntilInView,
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-3xl bg-linear-to-b from-violet-400/70 via-indigo-500/30 to-cyan-300/60"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-500 via-indigo-500/60 to-cyan-300 opacity-0 shadow-[0_24px_60px_-20px_rgb(139_92_246/0.8)] transition-opacity duration-500 group-hover:opacity-100"
                            />

                            <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#07040f]">
                                <div className="relative aspect-4/5 overflow-hidden bg-linear-to-b lg:aspect-auto lg:min-h-0 lg:flex-1 from-violet-500/80 via-indigo-950 via-55% to-[#07040f]">
                                    <LandingImage
                                        src={founder.image}
                                        alt={`Portrait of ${founder.name}`}
                                        showFileName
                                        className="size-full object-contain object-bottom transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#07040f] via-[#07040f]/80 to-transparent"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 px-6 pb-1">
                                        <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                                            {founder.name}
                                        </h3>
                                        <p className="mt-0.5 text-sm font-medium text-cyan-300">
                                            {founder.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col px-6 pt-3 pb-6 lg:flex-none">
                                    <p className="text-sm leading-relaxed text-pretty text-white/70">
                                        {founder.bio}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
