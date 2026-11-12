import { Link } from '@inertiajs/react';
import { ArrowRight, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { about, home } from '@/routes';

const navigationItems = [
    { title: 'Home', href: home().url },
    { title: 'About Us', href: about().url },
    { title: 'Services', href: `${home().url}#services` },
    { title: 'Careers', href: `${home().url}#careers` },
    { title: 'FAQs', href: `${home().url}#faqs` },
    { title: 'Contact Us', href: `${home().url}#contact` },
];

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0618] focus-visible:outline-none';

export default function LandingNavigation() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => setHasScrolled(window.scrollY > 16);

        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });

        return () => window.removeEventListener('scroll', updateScrollState);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-40 border-b transition-all duration-300',
                hasScrolled
                    ? 'border-white/10 bg-[#0b0618]/75 shadow-lg shadow-black/20 backdrop-blur-xl'
                    : 'border-transparent bg-transparent',
            )}
        >
            <nav
                aria-label="Main"
                className={cn(
                    'mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10',
                    hasScrolled ? 'py-3' : 'py-6 lg:py-8',
                )}
            >
                <Link
                    href={home()}
                    className={cn(
                        'flex items-center gap-3 rounded-md',
                        focusRingStyles,
                    )}
                >
                    <AppLogoIcon
                        className={cn(
                            'transition-all duration-300',
                            hasScrolled ? 'h-9' : 'h-10 lg:h-12',
                        )}
                    />
                    <span className="hidden text-base font-semibold tracking-wide text-white uppercase sm:inline lg:text-xl sm:text-lg">
                        Meta Digitrading
                    </span>
                </Link>

                <ul className="hidden items-center gap-1 lg:flex">
                    {navigationItems.map((item) => (
                        <li key={item.title}>
                            <a
                                href={item.href}
                                className={cn(
                                    'group relative block rounded-md px-3 py-2 text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-white',
                                    focusRingStyles,
                                )}
                            >
                                {item.title}
                                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-violet-400 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href={`${home().url}#contact`}
                    className={cn(
                        'hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-[#1a0b3d] uppercase transition hover:bg-cyan-200 lg:inline-flex',
                        focusRingStyles,
                    )}
                >
                    Get Started
                    <ArrowRight className="size-4" />
                </a>

                <Sheet>
                    <SheetTrigger
                        className={cn(
                            'rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden',
                            focusRingStyles,
                        )}
                        aria-label="Open navigation menu"
                    >
                        <Menu className="size-6" />
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-72 border-white/10 bg-[#0b0618]/95 p-6 text-white backdrop-blur-xl sm:p-8"
                    >
                        <SheetTitle className="sr-only">
                            Navigation menu
                        </SheetTitle>
                        <AppLogoIcon className="h-10 self-start" />
                        <ul className="mt-6 flex flex-col gap-1">
                            {navigationItems.map((item) => (
                                <li key={item.title}>
                                    <SheetClose asChild>
                                        <a
                                            href={item.href}
                                            className={cn(
                                                'block rounded-md px-3 py-3 text-base font-medium tracking-wider text-white/80 uppercase transition hover:bg-white/5 hover:text-white',
                                                focusRingStyles,
                                            )}
                                        >
                                            {item.title}
                                        </a>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                        <SheetClose asChild>
                            <a
                                href={`${home().url}#contact`}
                                className={cn(
                                    'mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold tracking-wide text-[#1a0b3d] uppercase',
                                    focusRingStyles,
                                )}
                            >
                                Get Started
                                <ArrowRight className="size-4" />
                            </a>
                        </SheetClose>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
