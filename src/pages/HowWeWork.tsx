import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
                            subtitle="Process | Systems | Scale"
                            cards={[
                                {
                                    title: "Strategy shapes everything",
                                    description: "We don't move without a plan. Every action is calculated. Every resource is aligned.",
                                    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                                },
                                {
                                    title: "Marketing pulls customers in",
                                    description: "We build the magnet that attracts your ideal client. No chasing, just attracting.",
                                    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                                },
                                {
                                    title: "Infrastructure makes it scalable",
                                    description: "We build the machine that handles the demand. Systems that don't break under pressure.",
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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative z-10 text-center max-w-2xl mx-auto px-6"
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                            Partnership | Business Development
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to build something <span className="text-blue-400">sustainable?</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-10 font-light">
                            We don't work with everyone. But if you're ready to build a real business with real systems, we should talk.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link to="/book-call" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all inline-block text-sm uppercase tracking-wide">
                                Book a Discovery Call
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default HowWeWork;
