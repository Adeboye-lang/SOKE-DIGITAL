import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategory from '../components/services/ServiceCategory';
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

const Services: React.FC = () => {

    const strategyServices = [
        {
            title: "Business Model Design",
            subtitle: "Define how the business creates, delivers, and captures value.",
            description: "We work with you to clarify your revenue streams, cost structures, and value propositions to ensure long-term viability."
        },
        {
            title: "Product & Service Structure",
            subtitle: "Codify what you sell into scalable products.",
            description: "Moving from ad-hoc services to defined products allows for scale. We help structure your offerings for maximum clarity."
        },
        {
            title: "Market Positioning Strategy",
            subtitle: "Define where the business sits in the market.",
            description: "We analyze the competition and find your unique space. Pricing, messaging, and targeting align to own this space."
        },
        {
            title: "Growth Planning",
            subtitle: "Establish a structured approach to growth.",
            description: "Growth shouldn't be accidental. We build a roadmap with clear KPIs and milestones to measure progress."
        }
    ];

    const marketingServices = [
        {
            title: "Brand Strategy & Identity",
            subtitle: "Define how the brand looks, speaks, and feels.",
            description: "We build a cohesive brand system that communicates trust and authority across all channels."
        },
        {
            title: "Digital Marketing Campaigns",
            subtitle: "Visibility, traffic, and leads across digital channels.",
            description: "We build and manage campaigns on Meta, LinkedIn, Google, and TikTok to drive results that matter."
        },
        {
            title: "Product Marketing",
            subtitle: "Positioning and packaging products for the market.",
            description: "We help you articulate the value of your specific products to the right audience to drive adoption."
        },
        {
            title: "Growth Marketing",
            subtitle: "Full funnel acquisition and revenue growth.",
            description: "Data-driven marketing that focuses on the entire customer journey, from awareness to retention."
        },
        {
            title: "Content Production",
            subtitle: "High-quality assets that tell your story.",
            description: "From video production to copywriting, we create compelling content that engages your audience and drives action across all platforms."
        }
    ];

    const infrastructureServices = [
        {
            title: "Digital Platform Development",
            subtitle: "Build the user-facing technology platforms.",
            description: "Websites, apps, and client portals that deliver a seamless experience for your customers."
        },
        {
            title: "Technology Stack Setup",
            subtitle: "Select and implement the right tools for the business.",
            description: "CRM, ERP, Project Management—we help you choose and configure the software effectively."
        },
        {
            title: "Operations & Workflow Design",
            subtitle: "Optimize internal business operations.",
            description: "We map out your processes and find efficiencies to save time and reduce errors."
        },
        {
            title: "Team & Governance Structure",
            subtitle: "Structure teams and operations for scalable growth.",
            description: "Who does what? We help define roles, responsibilities, and reporting lines for clarity."
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <ServicesHero />

                <ServiceCategory
                    title={<>Strategy <span className="text-blue-900">Services</span></>}
                    services={strategyServices}
                />

                <ServiceCategory
                    title={<>Marketing <span className="text-blue-900">Services</span></>}
                    services={marketingServices}
                />

                <ServiceCategory
                    title={<>Infrastructure <span className="text-blue-900">Services</span></>}
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
                        Ready to Build a Business
                    </m.h2>
                    <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        That Scales?
                    </m.h2>
                    <m.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-10 max-w-md mx-auto">
                        Schedule a consultation to discuss your specific needs.
                    </m.p>
                    <m.div variants={fadeInUp}>
                        <Link to="/book-call" className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-blue-800 transition-all inline-block shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
                            Book a Discovery Call
                        </Link>
                    </m.div>
                </m.div>
            </div>
        </PageTransition>
    );
};

export default Services;
