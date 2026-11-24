import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageHeroSectionProps = {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    children: ReactNode;
    backgroundImage?: string;
};

const entranceStyles =
    'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none';

/**
 * Full-screen hero shared by the public inner pages (Services, Careers, ...).
 */
export default function PageHeroSection({
    id,
    eyebrow,
    title,
    highlight,
    children,
    backgroundImage,
}: PageHeroSectionProps) {
    return (
        <section
            id={id}
            className="relative isolate flex min-h-dvh items-center overflow-hidden bg-black"
        >
            {backgroundImage && (
                <>
                    <img
                        src={backgroundImage}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="absolute inset-0 -z-20 size-full object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/85 to-black/50"
                    />
                </>
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgb(124_58_237/0.7),rgb(49_46_129/0.5)_45%,transparent_75%)]"
            />

            <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:px-10 lg:pt-32 lg:pb-24">
                <div className="max-w-2xl">
                    <p
                        className={cn(
                            'inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm',
                            entranceStyles,
                        )}
                    >
                        <span className="size-2 rounded-full bg-cyan-300" />
                        {eyebrow}
                    </p>
                    <h1
                        className={cn(
                            'mt-6 text-5xl font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl',
                            entranceStyles,
                            'delay-100',
                        )}
                    >
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            {title}{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            {highlight}
                        </span>
                    </h1>

                    <div
                        className={cn(
                            'mt-8 flex flex-col gap-6 text-base leading-relaxed text-pretty text-white/70 sm:text-lg',
                            entranceStyles,
                            'delay-200',
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
