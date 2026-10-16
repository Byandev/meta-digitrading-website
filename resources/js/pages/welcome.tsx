import { Head } from '@inertiajs/react';

import CoreValuesSection from '@/components/landing/core-values-section';
import CtaSection from '@/components/landing/cta-section';
import FeaturedProductSection from '@/components/landing/featured-product-section';
import HeroSection from '@/components/landing/hero-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import ServicesSection from '@/components/landing/services-section';
import VideoShowcaseSection from '@/components/landing/video-showcase-section';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <HeroSection />
                    <ServicesSection />
                    <FeaturedProductSection />
                    <CoreValuesSection />
                    <VideoShowcaseSection />
                    <CtaSection />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
