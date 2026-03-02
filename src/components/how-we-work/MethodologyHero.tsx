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

const MethodologyHero: React.FC = () => {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
                    alt="City skyline"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Texture/Scanline Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <m.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10 text-white max-w-4xl mx-auto"
            >
                <div className="flex flex-col items-center">
                    <m.div variants={fadeInUp} className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 mb-8 backdrop-blur-md">
                        <span className="block py-2 px-6 rounded-full bg-slate-900/80 text-blue-100 text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                            Our Methodology
                        </span>
                    </m.div>

                    <m.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
                        Vision to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Reality.</span>
                    </m.h1>

                    <m.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 drop-shadow-md">
                        We don't just advise. We build. Bridging the gap between ambitious strategy and flawless execution with precision and speed.
                    </m.p>

                    <m.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300">
                            Discover Our Process
                        </button>
                        <button className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide border border-slate-600 hover:bg-white/5 hover:border-white transition-all duration-300">
                            View Case Studies
                        </button>
                    </m.div>
                </div>
            </m.div>

            {/* Scroll Indicator */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </m.div>
        </section>
    );
};

export default MethodologyHero;
