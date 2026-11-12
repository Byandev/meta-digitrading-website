import { Head } from '@inertiajs/react';

import CtaSection from '@/components/landing/cta-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import PageHeroSection from '@/components/landing/page-hero-section';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';
import ServicesSection from '@/components/landing/services-section';
import WhoWeHelpSection from '@/components/landing/who-we-help-section';

export default function Services() {
    return (
        <>
            <Head title="Services" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <PageHeroSection
                        id="what-we-do"
                        eyebrow="Start Something Bigger"
                        title="What"
                        highlight="We Do"
                    >
                        <p>
                            <span className="font-semibold text-violet-400">
                                Meta Digitrading
                            </span>{' '}
                            is your{' '}
                            <span className="font-semibold text-cyan-300">
                                all-in-one e-commerce solutions provider
                            </span>
                            , empowering businesses to sell smarter, faster, and
                            better in the digital age.
                        </p>
                        <p className="border-l-2 border-cyan-300/70 pl-6 text-white/90">
                            We are dedicated to helping entrepreneurs, SMEs, and
                            established brands build, scale, and sustain their
                            online presence through reliable, transparent, and
                            future-ready digital solutions. At Meta Digitrading,
                            we don’t just create platforms — we create
                            possibilities, driving growth and prosperity through
                            innovation and trust.
                        </p>
                    </PageHeroSection>
                    <WhoWeHelpSection />
                    <ServicesSection />
                    <CtaSection showExploreServices={false} />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
