import React from 'react';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import GapSection from '../components/GapSection';
import PillarsSection from '../components/PillarsSection';
import PartnershipSection from '../components/PartnershipSection';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
    return (
        <PageTransition>
            <div className="bg-white">
                <Hero />




                <SectionDivider />

                <div className="space-y-0">
                    <GapSection
                        category="THE REALITY"
                        title={<>The gap between <span className="text-blue-600">vision</span> and<br />execution</>}
                        description="You have the vision, the heart, and the drive. But somewhere between the idea and the execution, things get lost. We bridge that divide with actionable strategy."
                        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Strategy Session"
                        overlayTitle="Strategy without teeth"
                        overlayText="It's not enough to be smart. You need a plan that bites back. A timeline that works. And people who care."
                    />

                    <GapSection
                        category="THE NOISE"
                        reverse={true}
                        title={<>Great <span className="text-blue-600">Ideas</span> Don't<br /><span className="text-blue-600">Sell</span> Themselves</>}
                        description="The best product in the world will fail if no one knows about it. We turn noise into signal and browsers into buyers with targeted marketing."
                        imageSrc="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Billboards"
                        overlayTitle="Marketing that whispers"
                        overlayText="Don't just shout. Speak clearly. To the right people. At the right time."
                    />

                    <GapSection
                        category="THE SCALE"
                        title={<>The Gap Between<br /><span className="text-blue-600">Vision</span> and<br /><span className="text-blue-600">Infrastructure</span></>}
                        description="Growth breaks things. If your systems aren't ready, success can destroy you. We build the rails for your train to run on."
                        imageSrc="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1200"
                        imageAlt="Infrastructure"
                        overlayTitle="Systems That Sweat"
                        overlayText="Do your processes work when you sleep? Or do they need constant supervision?"
                    />
                </div>

                <PillarsSection />

                <PartnershipSection />

                <CTASection />
            </div>
        </PageTransition>
    );
};

export default Home;
