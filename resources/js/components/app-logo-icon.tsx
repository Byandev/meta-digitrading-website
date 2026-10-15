import type { ImgHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export default function AppLogoIcon({
    className,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/meta-digitrading-logo.png"
            alt="Meta Digitrading"
            className={cn('w-auto object-contain', className)}
            {...props}
        />
    );
}
