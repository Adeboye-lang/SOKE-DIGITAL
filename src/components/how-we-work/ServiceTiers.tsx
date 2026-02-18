import React from 'react';
import { m } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const ServiceTiers: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Engagement Models</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Choose how we build together.</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                </m.div>

                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
                >
                    {/* Consulting */}
                    <m.div variants={fadeInUp} className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group relative overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-blue-600/80">Advisory</h3>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                            Strategy & Frameworks
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-sm mb-8">
                            We guide, you execute. Get the blueprint, strategy, and accountability you need to build with confidence.
                        </p>
                    </m.div>

                    {/* Partnership */}
                    <m.div variants={fadeInUp} className="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden transform md:-translate-y-6 hover:scale-105 transition-all duration-500 border border-slate-800 ring-4 ring-blue-500/10">
                        {/* Blob */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 opacity-20 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 blur-[60px] rounded-full -ml-10 -mb-10 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <span className="py-1 px-3 bg-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg">Most Popular</span>
                            </div>

                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-blue-400">Collaborative</h3>
                            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                                Co-Execution
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-sm mb-8 font-light">
                                We execute together. You stay involved in key decisions while we handle the heavy lifting, systems, and optimization.
                            </p>
                            <ul className="space-y-4 text-sm text-slate-300 mb-8 border-t border-white/10 pt-8">
                                <li className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">✓</span> Shared execution model
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">✓</span> Faster feedback loops
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">✓</span> Dedicated growth team
                                </li>
                            </ul>
                        </div>
                    </m.div>

                    {/* Premium */}
                    <m.div variants={fadeInUp} className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group relative overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-blue-600/80">Turnkey</h3>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                            End-to-End Ownership
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-sm mb-8">
                            We build and run it. You set the vision, we deliver the business. Strategy, execution, and ops from one place.
                        </p>
                    </m.div>
                </m.div>
            </div>
        </section>
    );
};

export default ServiceTiers;
