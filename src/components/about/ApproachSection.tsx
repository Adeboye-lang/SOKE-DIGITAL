import React from 'react';

const ApproachSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 mx-auto">

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1556761178-bf75337c3754?auto=format&fit=crop&q=80&w=1600"
                            alt="Partnership and Collaboration"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 blur-3xl rounded-full -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                                Our Approach
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                Not just a vendor.<br />
                                A true <span className="text-blue-400">Growth Partner</span>.
                            </h2>
                            <div className="space-y-6">
                                <p className="text-slate-300 text-lg leading-relaxed font-light">
                                    We don't just deliver a service and leave. We integrate with your team, share the risk, and celebrate the wins together.
                                </p>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    Our success metric isn't "project completed." It's "revenue grown," "efficiency gained," and "market share captured."
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 blur-[1px]"></div>
                                    <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-900 blur-[1px]"></div>
                                    <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                                        +50
                                    </div>
                                </div>
                                <span className="text-slate-400 text-sm font-medium">Partners across Africa</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
