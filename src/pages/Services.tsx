import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategory from '../components/services/ServiceCategory';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const Services: React.FC = () => {

    const strategyServices = [
        {
            title: "Market Research & Audits",
            subtitle: "Evaluate viability before deployment.",
            description: "Deep-dive analysis of your target market to ensure your entry strategy is backed by data, not just intuition."
        },
        {
            title: "Operational Roadmaps",
            subtitle: "Step-by-step blueprints for market entry.",
            description: "Translating high-level goals into tactical, actionable steps with clear resource allocation."
        },
        {
            title: "Risk Mitigation",
            subtitle: "Identify and neutralize threats early.",
            description: "Proactive assessment of regulatory, competitive, and operational risks in your new territory."
        }
    ];

    const marketingServices = [
        {
            title: "Sales & Pitch Decks",
            subtitle: "Arm your ground team with the right tools.",
            description: "Persuasive, high-conversion collateral designed specifically for B2B acquisition and investor relations."
        },
        {
            title: "Video Production",
            subtitle: "Show, don't just tell.",
            description: "High-impact video assets that communicate your value proposition clearly and professionally."
        },
        {
            title: "Digital Presence Build-Out",
            subtitle: "Establish immediate authority.",
            description: "Rapid deployment of localized websites, landing pages, and digital touchpoints for your new market."
        }
    ];

    const infrastructureServices = [
        {
            title: "Local Vendor Management",
            subtitle: "We handle the ground network.",
            description: "Sourcing, vetting, and managing the local partners required for your business to function."
        },
        {
            title: "SOP Development",
            subtitle: "Standardize your success.",
            description: "Creating robust Standard Operating Procedures so your new branch operates with the same efficiency as HQ."
        },
        {
            title: "Performance Dashboards",
            subtitle: "Real-time visibility into ground ops.",
            description: "Setting up the tech stack and reporting structures so you have full oversight from anywhere."
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <ServicesHero />

                <ServiceCategory
                    title={<>Go-to-Market <span className="text-blue-900">Strategy</span></>}
                    services={strategyServices}
                />

                <ServiceCategory
                    title={<>Execution Collateral <span className="text-blue-900">& Content</span></>}
                    services={marketingServices}
                />

                <ServiceCategory
                    title={<>Operational <span className="text-blue-900">Infrastructure</span></>}
                    services={infrastructureServices}
                />

                {/* CTA Section */}
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="py-32 bg-white text-center border-t border-slate-100"
                >
                    <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Ready to Establish Your
                    </m.h2>
                    <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Market Presence?
                    </m.h2>
                    <m.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-10 max-w-md mx-auto">
                        Deploy your strategy with precision.
                    </m.p>
                    <m.div variants={fadeInUp}>
                        <Link to="/book-call" className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-blue-800 transition-all inline-block shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
                            Schedule a Strategy Session
                        </Link>
                    </m.div>
                </m.div>
            </div>
        </PageTransition>
    );
};

export default Services;
