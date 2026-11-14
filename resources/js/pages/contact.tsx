import { Head } from '@inertiajs/react';

import ContactSection from '@/components/landing/contact-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingNavigation from '@/components/landing/landing-navigation';
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';

export default function Contact() {
    return (
        <>
            <Head title="Contact Us" />
            <div className="relative min-h-screen bg-black font-sans text-white">
                <LandingNavigation />
                <main>
                    <ContactSection />
                </main>
                <LandingFooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
