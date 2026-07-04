import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import MethodologyHero from '../components/how-we-work/MethodologyHero';
import ServiceTiers from '../components/how-we-work/ServiceTiers';
import ProcessSteps from '../components/how-we-work/ProcessSteps';
import InfoGridSection from '../components/InfoGridSection';
import PageTransition from '../components/PageTransition';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const HowWeWork: React.FC = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-white">
                <MethodologyHero />
                <ServiceTiers />
                <ProcessSteps />

                <div className="bg-slate-50 py-24 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="relative z-10">
                        <InfoGridSection
                            title={<>How it all <span className="text-blue-800">connects</span></>}
                            subtitle="Ecosystem Synergy"
                            cards={[
                                {
                                    title: "Professional Services",
                                    description: "Our on-ground execution team acts as your bridge into the market, ensuring your strategy translates directly into operational success.",
                                    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                                },
                                {
                                    title: "Business Education",
                                    description: "LearnWithSoke transforms informal businesses into structured enterprises, creating a pipeline of investment-ready organizations.",
                                    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                                },
                                {
                                    title: "Strategic Deployment",
                                    description: "With ground-level intelligence and structured partners, we deploy capital where it creates the highest measurable impact.",
                                    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                                }
                            ]}
                        />
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <div className="py-24 relative overflow-hidden bg-slate-900">
                    {/* Background Blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full -ml-32 -mb-32"></div>

                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative z-10 text-center max-w-2xl mx-auto px-6"
                    >
                        <m.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                            PARTNERSHIP | BUSINESS DEVELOPMENT
                        </m.span>
                        <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to break into<br /> <span className="text-blue-400">new markets?</span>
                        </m.h2>
                        <m.p variants={fadeInUp} className="text-slate-400 text-lg mb-10 font-light">
                            We don't just advise. We execute. If you're ready to build a sustainable footprint in the African market, let's talk.
                        </m.p>
                        <m.div variants={fadeInUp}>
                            <Link to="/book-call" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all inline-block text-sm uppercase tracking-wide">
                                Schedule a Strategy Session
                            </Link>
                        </m.div>
                    </m.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default HowWeWork;
