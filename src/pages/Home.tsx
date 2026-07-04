import React from 'react';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import GapSection from '../components/GapSection';
import PillarsSection from '../components/PillarsSection';
import PartnershipSection from '../components/PartnershipSection';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
    return (
        <PageTransition>
            <SEOHead
                title="Business Development & Growth Agency"
                description="SOKE AFRICA is a business development firm helping founder-led companies design and execute strategies and systems that drive scalable growth."
                canonicalUrl="/"
            />
            <main className="bg-white">
                <Hero />




                <SectionDivider />

                <div className="space-y-0">
                    <GapSection
                        category="THE MARKET GAP"
                        title={<>Strategy Without<br /><span className="text-blue-600">On-Ground</span> Execution.</>}
                        description="Breaking into a new market requires more than a strong vision. We bridge the divide with end-to-end Go-to-Market (GTM) Strategy Planning & Execution—taking you from high-level planning to relentless, on-ground reality."
                        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Strategy Session"
                        overlayTitle="Strategy without teeth"
                        overlayText="It's not enough to be smart. You need a plan that bites back. A timeline that works. And people who care."
                    />

                    <GapSection
                        category="THE INFORMAL CEILING"
                        reverse={true}
                        title={<>Growth Stops<br />Without <span className="text-blue-600">Systems.</span></>}
                        description="The informal business sector holds massive potential but often hits a ceiling. We provide accessible and practical business education to help founders build scalable infrastructure, preparing them for formal capital deployment."
                        imageSrc="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Billboards"
                        overlayTitle="Marketing that whispers"
                        overlayText="Don't just shout. Speak clearly. To the right people. At the right time."
                    />

                    <GapSection
                        category="THE CAPITAL DISCONNECT"
                        title={<>Funding That<br /><span className="text-blue-600">Doesn't Fit.</span></>}
                        description="Traditional funding models frequently misalign with how African businesses actually operate. Growth requires capital that understands the terrain. We are creating unique capital deployment models designed specifically for the African market."
                        imageSrc="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Infrastructure"
                        overlayTitle="Systems That Sweat"
                        overlayText="Do your processes work when you sleep? Or do they need constant supervision?"
                    />
                </div>

                <PillarsSection />

                <PartnershipSection />

                <CTASection />
            </main>
        </PageTransition>
    );
};

export default Home;
