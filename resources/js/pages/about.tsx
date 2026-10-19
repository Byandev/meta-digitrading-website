import { Head } from '@inertiajs/react';

import AboutCompanySection from '@/components/landing/about-company-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CultureSection from '@/components/landing/culture-section';
import FoundersSection from '@/components/landing/founders-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import PurposeSection from '@/components/landing/purpose-section';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';
import WhoWeAreSection from '@/components/landing/who-we-are-section';

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <AboutCompanySection />
                    <WhoWeAreSection />
                    <PurposeSection />
                    <CoreValuesSection className="flex min-h-dvh items-center" />
                    <FoundersSection />
                    <CultureSection />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
