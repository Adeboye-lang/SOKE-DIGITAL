import React from 'react';
import { motion } from 'framer-motion';

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

const ServicesHero: React.FC = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=2000"
                    alt="Corporate meeting"
                    className="w-full h-full object-cover scale-105 opacity-20"
                />
                {/* Gradient overlay transitioning to page background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-50"></div>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10 max-w-5xl"
            >
                <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 border border-blue-100 rounded-full bg-blue-50/80 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase mb-8 text-blue-900 shadow-sm">
                    Our Expertise
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-slate-900">
                    Everything Your <br className="hidden md:block" />
                    <span className="text-blue-900">Business Needs to Scale</span>
                </motion.h1>
                <motion.div variants={fadeInUp} className="h-1 w-24 bg-blue-900 mx-auto mb-8 rounded-full"></motion.div>
                <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-bold tracking-[0.3em] uppercase">
                    Strategy &bull; Marketing &bull; Infrastructure
                </motion.p>
            </motion.div>
        </section>
    );
};

export default ServicesHero;
