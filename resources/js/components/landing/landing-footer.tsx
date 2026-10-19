import { Link } from '@inertiajs/react';

import AppLogoIcon from '@/components/app-logo-icon';
import { cn } from '@/lib/utils';
import { about, home } from '@/routes';

const footerLinkGroups = [
    {
        title: 'Company',
        links: [
            { title: 'Home', href: home().url },
            { title: 'About Us', href: about().url },
            { title: 'Careers', href: `${home().url}#careers` },
            { title: 'FAQs', href: `${home().url}#faqs` },
            { title: 'Contact Us', href: `${home().url}#contact` },
        ],
    },
    {
        title: 'Services',
        links: [
            { title: 'Meta Digitrading', href: `${home().url}#services` },
            { title: 'Meta Advertising', href: `${home().url}#services` },
            { title: 'Meta Brands', href: `${home().url}#services` },
        ],
    },
];

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none';

export default function LandingFooter() {
    return (
        <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent"
            />
            <div
                aria-hidden="true"
                className="absolute -top-40 left-1/2 -z-10 h-80 w-[50rem] max-w-full -translate-x-1/2 rounded-full bg-violet-700/15 blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10 lg:pt-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] sm:gap-12">
                    <div className="max-w-sm">
                        <Link
                            href={home()}
                            className={cn(
                                'inline-flex items-center gap-3 rounded-md',
                                focusRingStyles,
                            )}
                        >
                            <AppLogoIcon className="h-11" />
                            <span className="text-base font-semibold tracking-wide text-white uppercase sm:text-lg">
                                Meta Digitrading
                            </span>
                        </Link>
                        <p className="mt-6 bg-linear-to-r from-violet-200 to-cyan-300 bg-clip-text text-sm font-semibold tracking-[0.2em] text-transparent uppercase">
                            Making Prosperity a Reality for Everyone
                        </p>
                        <p className="mt-4 leading-relaxed text-pretty text-white/60">
                            Intelligent e-commerce solutions, expert consulting,
                            and cutting-edge technology to help businesses scale
                            faster.
                        </p>
                    </div>

                    {footerLinkGroups.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h2 className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                                {group.title}
                            </h2>
                            <ul className="mt-5 flex flex-col gap-3">
                                {group.links.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className={cn(
                                                'rounded-sm text-white/70 transition-colors hover:text-white',
                                                focusRingStyles,
                                            )}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8 text-center sm:mt-16 sm:text-left">
                    <p className="text-sm text-white/50">
                        &copy; {new Date().getFullYear()} Meta Digitrading. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
