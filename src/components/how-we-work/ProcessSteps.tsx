import React from 'react';
import { m } from 'framer-motion';

const ProcessSteps: React.FC = () => {
    return (
        <div className="space-y-0 relative">
            {/* Timeline Connector */}
            <m.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-200 to-transparent z-10 transform -translate-x-1/2"
            ></m.div>


            {/* 1. Discover */}
            <section className="flex flex-col md:flex-row min-h-[550px] group relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-blue-100 rounded-full z-20 items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                </div>

                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-white flex flex-col justify-center px-8 md:px-16 lg:pl-24 lg:pr-20 py-24 relative overflow-hidden"
                >
                    <span className="absolute top-10 right-10 text-[180px] font-bold text-slate-50 opacity-40 select-none leading-none -z-0">01</span>
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                            Phase 1
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Map the<br /><span className="text-blue-900">Market Reality</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light max-w-lg">
                            "We don't just look at where you want to go. We analyze the terrain, identify the barriers, and find the exact gap in the market."
                        </p>
                        <ul className="space-y-4 text-sm text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></span>
                                Market Research & Feasibility
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></span>
                                Positioning & Entry Strategy
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></span>
                                Stakeholder Alignment
                            </li>
                        </ul>
                    </div>
                </m.div>
                <div className="flex-1 relative min-h-[400px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                        alt="Discover Phase"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60"></div>
                </div>
            </section>

            {/* 2. Design */}
            <section className="flex flex-col md:flex-row-reverse min-h-[550px] group relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-purple-100 rounded-full z-20 items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
                </div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-slate-50 flex flex-col justify-center px-8 md:px-16 lg:pr-24 lg:pl-24 py-24 relative overflow-hidden z-30"
                >
                    <span className="absolute top-10 left-0 text-[180px] font-bold text-white opacity-100 select-none leading-none -z-0 drop-shadow-sm">02</span>
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-900 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-100">
                            Phase 2
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Build the<br /><span className="text-purple-900">Blueprint</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light max-w-lg">
                            "Action without a plan is chaos. We translate high-level strategy into a clear operational roadmap—allocating resources, timelines, and risks."
                        </p>
                        <ul className="space-y-4 text-sm text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-500 ring-4 ring-purple-50"></span>
                                GTM Action Plan
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-500 ring-4 ring-purple-50"></span>
                                Resource & Capital Allocation
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-500 ring-4 ring-purple-50"></span>
                                Infrastructure & SOP Design
                            </li>
                        </ul>
                    </div>
                </m.div>
                <div className="flex-1 relative min-h-[400px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        alt="Design Phase"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60"></div>
                </div>
            </section>

            {/* 3. Deliver */}
            <section className="flex flex-col md:flex-row min-h-[550px] group relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-emerald-100 rounded-full z-20 items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></div>
                </div>

                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-white flex flex-col justify-center px-8 md:px-16 lg:pl-24 lg:pr-20 py-24 relative overflow-hidden"
                >
                    <span className="absolute top-10 right-10 text-[180px] font-bold text-slate-50 opacity-40 select-none leading-none -z-0">03</span>
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
                            Phase 3
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Break into the<br /><span className="text-emerald-900">Market</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light max-w-lg">
                            "A strategy is only as good as its execution. We move from the boardroom to the streets, managing the teams and driving the actual market launch."
                        </p>
                        <ul className="space-y-4 text-sm text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
                                On-Ground Rollout
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
                                Vendor & Partner Management
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
                                Direct Market Penetration
                            </li>
                        </ul>
                    </div>
                </m.div>
                <div className="flex-1 relative min-h-[400px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                        alt="Deliver Phase"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60"></div>
                </div>
            </section>

            {/* 4. Scale */}
            <section className="flex flex-col md:flex-row-reverse min-h-[550px] group relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-indigo-100 rounded-full z-20 items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                </div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-slate-50 flex flex-col justify-center px-8 md:px-16 lg:pr-24 lg:pl-24 py-24 relative overflow-hidden z-30"
                >
                    <span className="absolute top-10 left-0 text-[180px] font-bold text-white opacity-100 select-none leading-none -z-0 drop-shadow-sm">04</span>
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
                            Phase 4
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Sustain the<br /><span className="text-indigo-900">Growth</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light max-w-lg">
                            "Breaking in is phase one. Staying there is phase two. We optimize the systems we built to ensure long-term market dominance."
                        </p>
                        <ul className="space-y-4 text-sm text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></span>
                                Performance Review
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></span>
                                Systems Optimization
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></span>
                                Expansion Planning
                            </li>
                        </ul>
                    </div>
                </m.div>
                <div className="flex-1 relative min-h-[400px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        alt="Scale Phase"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60"></div>
                </div>
            </section>

        </div>
    );
};

export default ProcessSteps;
