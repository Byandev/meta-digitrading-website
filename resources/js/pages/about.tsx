import { Head } from '@inertiajs/react';

import AboutCompanySection from '@/components/landing/about-company-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <AboutCompanySection />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
