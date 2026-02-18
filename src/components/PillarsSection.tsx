import React from 'react';
import { m } from 'framer-motion';

interface PillarCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, description, icon }) => (
    <m.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:bg-white border border-slate-100 group"
    >
        <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </m.div>
);

const PillarsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <m.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Foundation</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        Three pillars of <span className="text-blue-600">Business Excellence</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-light">
                        We don't rely on luck. We build on structure.
                    </p>
                </m.div>
                <m.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden md:block"
                >
                    <div className="h-1 w-24 bg-slate-200 rounded-full"></div>
                </m.div>
            </div>

            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <PillarCard
                    title="Strategy that moves"
                    description="Clear execution plans that take you from point A to point B. No fluff, just actionable roadmaps."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                    }
                />
                <PillarCard
                    title="Marketing that converts"
                    description="Campaigns that speak to the heart of your customer. We turn attention into revenue."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                        </svg>
                    }
                />
                <PillarCard
                    title="Infrastructure that scales"
                    description="Build systems that can handle 10x your current load. Automation, SOPs, and tech stacks."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    }
                />
            </m.div>
        </section>
    );
};

export default PillarsSection;
