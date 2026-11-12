import { Head } from '@inertiajs/react';

import CtaSection from '@/components/landing/cta-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';
import ServicesHeroSection from '@/components/landing/services-hero-section';
import ServicesSection from '@/components/landing/services-section';
import WhoWeHelpSection from '@/components/landing/who-we-help-section';

export default function Services() {
    return (
        <>
            <Head title="Services" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <ServicesHeroSection />
                    <WhoWeHelpSection />
                    <ServicesSection />
                    <CtaSection />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
