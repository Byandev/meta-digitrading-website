import { Clock, Film, Play, Sparkle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

/**
 * The anniversary video, hosted on S3 via VITE_ANNIVERSARY_VIDEO_URL and
 * falling back to public/videos/ locally. A missing video shows a branded
 * placeholder instead.
 */
const showcaseVideo = {
    src:
        import.meta.env.VITE_ANNIVERSARY_VIDEO_URL ||
        '/videos/META_1ST_ANNIV.mp4',
    title: 'Meta Digitrading first anniversary video',
};

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

const revealStyles =
    'transition duration-700 ease-out motion-reduce:transition-none';

const sparkles = [
    { position: 'top-24 left-[8%]', size: 'size-4', delay: '0s' },
    { position: 'top-40 right-[10%]', size: 'size-6', delay: '0.8s' },
    { position: 'top-[22rem] left-[18%]', size: 'size-3', delay: '1.6s' },
    { position: 'top-16 right-[28%]', size: 'size-3', delay: '2.2s' },
    { position: 'top-[18rem] right-[20%]', size: 'size-4', delay: '1.2s' },
    { position: 'top-56 left-[30%]', size: 'size-2.5', delay: '2.8s' },
];

function formatDuration(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function ShowcaseVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);
    const [duration, setDuration] = useState<number | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        if (
            video.error ||
            video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE
        ) {
            setHasFailed(true);
        } else if (Number.isFinite(video.duration)) {
            setDuration(video.duration);
        }
    }, []);

    const startVideo = () => {
        setHasStarted(true);
        void videoRef.current?.play();
    };

    if (hasFailed) {
        return (
            <div
                role="img"
                aria-label={showcaseVideo.title}
                className="flex size-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgb(139_92_246/0.45),transparent_60%),radial-gradient(circle_at_80%_90%,rgb(103_232_249/0.3),transparent_55%)] bg-indigo-950 text-white/60"
            >
                <Film
                    aria-hidden="true"
                    className="size-14"
                    strokeWidth={1.25}
                />
                <span className="px-4 text-center font-mono text-xs break-all">
                    {showcaseVideo.src.split('/').pop()}
                </span>
            </div>
        );
    }

    return (
        <>
            <video
                ref={videoRef}
                src={showcaseVideo.src}
                title={showcaseVideo.title}
                controls={hasStarted}
                playsInline
                preload="metadata"
                onError={() => setHasFailed(true)}
                onLoadedMetadata={(event) =>
                    setDuration(event.currentTarget.duration)
                }
                onPlay={() => setHasStarted(true)}
                className="size-full bg-black object-cover"
            />

            {!hasStarted && (
                <button
                    type="button"
                    onClick={startVideo}
                    aria-label={`Play ${showcaseVideo.title}`}
                    className={cn(
                        'group absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/70 via-black/10 to-black/30 transition',
                        focusRingStyles,
                    )}
                >
                    <span className="relative flex size-20 items-center justify-center lg:size-28">
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full bg-violet-400/40 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute -inset-3 rounded-full border border-white/15 lg:-inset-4"
                        />
                        <span className="relative flex size-full items-center justify-center rounded-full border border-white/30 bg-linear-to-br from-violet-500/80 to-cyan-400/70 shadow-[0_0_60px_-5px_rgb(139_92_246/0.9)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-active:scale-95">
                            <Play
                                aria-hidden="true"
                                className="ml-1 size-8 fill-white text-white lg:size-11"
                            />
                        </span>
                    </span>

                    <span className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 lg:inset-x-8 lg:bottom-7">
                        <span className="text-left">
                            <span className="block text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                                Watch the film
                            </span>
                            <span className="mt-1 hidden text-base font-semibold text-white sm:block lg:text-2xl sm:text-lg">
                                Our First Year Together
                            </span>
                        </span>
                        {duration !== null && Number.isFinite(duration) && (
                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-xs text-white/90 backdrop-blur-md">
                                <Clock
                                    aria-hidden="true"
                                    className="size-3.5"
                                />
                                {formatDuration(duration)}
                            </span>
                        )}
                    </span>
                </button>
            )}
        </>
    );
}

function AnniversarySeal({ className }: { className?: string }) {
    return (
        <div aria-hidden="true" className={cn('size-28 lg:size-36', className)}>
            <div className="relative size-full rounded-full border border-white/20 bg-[#0d0624]/80 shadow-[0_0_50px_-8px_rgb(139_92_246/0.9)] backdrop-blur-md">
                <svg
                    viewBox="0 0 120 120"
                    className="absolute inset-0 size-full motion-safe:animate-spin motion-safe:[animation-duration:24s]"
                >
                    <defs>
                        <path
                            id="anniversary-seal-path"
                            d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                        />
                    </defs>
                    <text className="fill-white/80 text-[9px] font-semibold uppercase">
                        <textPath
                            href="#anniversary-seal-path"
                            textLength="282"
                            lengthAdjust="spacing"
                        >
                            1st Anniversary • Meta Digitrading •
                        </textPath>
                    </text>
                </svg>
                <span className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-cyan-400 text-white">
                    <span className="text-2xl leading-none font-black lg:text-4xl sm:text-3xl">
                        1
                    </span>
                    <span className="mt-0.5 text-[0.5rem] font-bold tracking-[0.2em] uppercase lg:text-[0.6rem]">
                        Year
                    </span>
                </span>
            </div>
        </div>
    );
}

export default function VideoShowcaseSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    const hiddenUntilInView = isInView
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100';

    return (
        <section
            id="showcase"
            className="relative isolate overflow-hidden bg-linear-to-b from-black via-[#140a38] via-50% to-[#3a1f94] py-16 lg:py-32 sm:py-24"
        >
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -z-10 h-[30rem] w-[70rem] max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet-600/30 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[120%] -translate-x-1/2 translate-y-1/3 rounded-[50%] bg-violet-500/40 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_40%_at_50%_85%,black,transparent)] bg-size-[56px_56px]"
            />
            {sparkles.map((sparkle) => (
                <Sparkle
                    key={sparkle.position}
                    aria-hidden="true"
                    style={{ animationDelay: sparkle.delay }}
                    className={cn(
                        'absolute -z-10 fill-cyan-200 text-cyan-200 opacity-60 motion-safe:animate-[twinkle_3.2s_ease-in-out_infinite]',
                        sparkle.position,
                        sparkle.size,
                    )}
                />
            ))}

            <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
                <div
                    className={cn(
                        'relative mx-auto flex max-w-3xl flex-col items-center text-center',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-1/2 bg-linear-to-b from-violet-400/12 to-transparent to-70% bg-clip-text text-[18rem] leading-none font-black text-transparent select-none [-webkit-text-stroke:1px_rgb(167_139_250/0.14)] lg:text-[26rem]"
                    >
                        1
                    </span>

                    <p className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm">
                        <Sparkle
                            aria-hidden="true"
                            className="size-3.5 fill-cyan-300 text-cyan-300"
                        />
                        Milestone · Year One
                    </p>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
                        <span className="block bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            Celebrating
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            1 Year of Meta
                        </span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-white/70 lg:text-xl sm:text-lg">
                        One year of building brands, growing businesses, and
                        making prosperity a reality. Thank you for being part of
                        the journey.
                    </p>
                </div>

                <div
                    className={cn(
                        'relative mt-8 delay-150 lg:mt-16 sm:mt-12',
                        revealStyles,
                        hiddenUntilInView,
                    )}
                >
                    <div className="scroll-zoom-in relative">
                        <div className="rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500/50 to-cyan-300 p-px shadow-[0_0_100px_-20px_rgb(139_92_246/0.9)] sm:rounded-3xl">
                            <div className="relative aspect-video overflow-hidden rounded-[calc(1rem-1px)] bg-black sm:rounded-[calc(1.5rem-1px)]">
                                <ShowcaseVideo />
                            </div>
                        </div>
                        <AnniversarySeal className="absolute -top-10 -right-3 hidden sm:block lg:-top-14 lg:-right-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
