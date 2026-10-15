import { ImageIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type LandingImageProps = {
    src: string;
    alt: string;
    className?: string;
    showFileName?: boolean;
};

/**
 * Image that falls back to a branded placeholder while the file is missing
 * from public/images, so sections can ship before the real photos exist.
 */
export default function LandingImage({
    src,
    alt,
    className,
    showFileName = false,
}: LandingImageProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(() => {
        const image = imageRef.current;

        if (image?.complete && image.naturalWidth === 0) {
            setHasFailed(true);
        }
    }, []);

    if (hasFailed) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={cn(
                    'flex flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,rgb(139_92_246/0.45),transparent_60%),radial-gradient(circle_at_80%_90%,rgb(103_232_249/0.3),transparent_55%)] bg-indigo-950 text-white/60',
                    className,
                )}
            >
                <ImageIcon
                    aria-hidden="true"
                    className={showFileName ? 'size-12' : 'size-6'}
                    strokeWidth={1.25}
                />
                {showFileName && (
                    <span className="px-4 text-center font-mono text-xs break-all">
                        {src.split('/').pop()}
                    </span>
                )}
            </div>
        );
    }

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            draggable={false}
            onError={() => setHasFailed(true)}
            className={cn('object-cover', className)}
        />
    );
}
