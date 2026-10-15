import { Head } from '@inertiajs/react';

import HeroSection from '@/components/landing/hero-section';
import LandingNavigation from '@/components/landing/landing-navigation';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <HeroSection />
                </main>
            </div>
        </>
    );
}
