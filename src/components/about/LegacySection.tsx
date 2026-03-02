import React from 'react';
import { Link } from 'react-router-dom';

const LegacySection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-16 items-center max-w-7xl mx-auto relative z-10">

                {/* Image Side */}
                <div className="flex-1 w-full order-2 md:order-1">
                    <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1548625361-9872e4f07e5f?auto=format&fit=crop&q=80&w=1200"
                            alt="Pyramids - Built to last"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        {/* Floating Badge */}
                        <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg">
                            <span className="text-white text-xs font-bold uppercase tracking-widest block mb-1">Established</span>
                            <span className="text-2xl font-bold text-white">4,500+ Years</span>
                        </div>

                        {/* Quote Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-10">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <p className="text-white font-medium italic text-xl leading-relaxed">
                                    "We focus on permanence. We build businesses that will stand the test of time."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 order-1 md:order-2">
                    <div className="mb-10">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Built to <span className="text-blue-900">last</span>.<br />
                            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">matter</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                In a world of quick wins and flash-in-the-pan success, we choose a different path. We are obsessed with foundations, systems, and long-term viability.
                            </p>
                            <p>
                                Just like the wonders of our continent that have stood for millennia, we believe African businesses should be built with the future in mind.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1">
                            Let's build together
                        </Link>
                        <Link to="/case-studies" className="text-slate-600 font-semibold hover:text-blue-900 transition-colors flex items-center gap-2 group">
                            View Case Studies <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section at bottom */}
            <div className="mt-32 mx-auto max-w-4xl text-center border-t border-slate-200 pt-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to start your journey?</h2>
                <p className="text-slate-500 mb-10 max-w-lg mx-auto">Take the first step towards building a legacy that outlasts you.</p>
                <Link to="/book-call" className="bg-white text-blue-900 border-2 border-slate-100 px-10 py-4 rounded-full font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 inline-block">
                    Schedule a Discovery Call
                </Link>
            </div>
        </section>
    );
};

export default LegacySection;
