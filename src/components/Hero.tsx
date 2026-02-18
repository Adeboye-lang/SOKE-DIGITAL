import React from 'react';
import { Link } from 'react-router-dom';
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

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50 skew-x-[-12deg] transform origin-top translate-x-32 hidden md:block"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

                {/* Text Content */}
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex-1 text-center md:text-left"
                >
                    <m.div variants={fadeInUp} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                        <span className="text-blue-700 text-xs font-bold tracking-widest uppercase">
                            Business Development Firm
                        </span>
                    </m.div>
                    <m.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Can Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business Model</span> Handle Growth?
                    </m.h1>
                    <m.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
                        We help founder-led companies design and execute strategies and systems that drive scalable growth.
                    </m.p>

                    <m.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Link
                            to="/book-call"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800 transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                        >
                            Book Discovery Call
                        </Link>
                        <Link
                            to="/services"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:border-blue-300 hover:text-blue-700 transition-all text-center"
                        >
                            View Our Work
                        </Link>
                    </m.div>
                </m.div>

                {/* Hero Visual */}
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" as const }}
                    className="flex-1 w-full relative max-w-lg md:max-w-xl"
                >
                    <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                            alt="Agency Team"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply"></div>

                        {/* Floating Badge */}
                        <m.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                    10x
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Growth Focus</p>
                                    <p className="text-slate-900 font-bold leading-tight">Systems designed for scale.</p>
                                </div>
                            </div>
                        </m.div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl"></div>
                </m.div>
            </div>
        </section>
    );
};

export default Hero;
