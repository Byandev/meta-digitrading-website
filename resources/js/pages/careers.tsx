import { Head } from '@inertiajs/react';

import CareersCtaSection from '@/components/landing/careers-cta-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import OpenPositionsSection from '@/components/landing/open-positions-section';
import PageHeroSection from '@/components/landing/page-hero-section';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';
import WhyWorkWithUsSection from '@/components/landing/why-work-with-us-section';

export default function Careers() {
    return (
        <>
            <Head title="Careers" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <PageHeroSection
                        id="join-our-team"
                        eyebrow="Start Something Bigger"
                        title="Join"
                        highlight="Our Team"
                    >
                        <p>
                            At{' '}
                            <span className="font-semibold text-violet-300">
                                META
                            </span>
                            , we believe that great things happen when
                            passionate people grow together. Be part of a team
                            that creates opportunities, makes an impact, and
                            turns possibilities into reality.
                        </p>
                    </PageHeroSection>
                    <WhyWorkWithUsSection />
                    <OpenPositionsSection />
                    <CareersCtaSection />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
