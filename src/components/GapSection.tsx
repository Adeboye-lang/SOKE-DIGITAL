import React from 'react';
import { motion } from 'framer-motion';

interface GapSectionProps {
    category: string;
    title: React.ReactNode;
    description: string;
    imageSrc: string;
    imageAlt: string;
    overlayTitle?: string;
    overlayText?: string;
    reverse?: boolean;
}

const GapSection: React.FC<GapSectionProps> = ({
    category,
    title,
    description,
    imageSrc,
    imageAlt,
    overlayTitle,
    overlayText,
    reverse = false
}) => {
    return (
        <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[600px]`}>
            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="flex-1 bg-white flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative z-10"
            >
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-blue-600"></span>
                    {category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                    {title}
                </h2>
                <div className="w-20 h-1 bg-blue-200 mb-8"></div>
                <p className="text-slate-600 leading-relaxed text-lg font-light max-w-lg">
                    {description}
                </p>
            </motion.div>

            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
                className="flex-1 relative min-h-[400px] overflow-hidden group"
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors duration-500"></div>

                {(overlayTitle || overlayText) && (
                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="border-l-4 border-blue-500 pl-6">
                            {overlayTitle && <h3 className="text-white font-bold text-2xl mb-2">{overlayTitle}</h3>}
                            {overlayText && <p className="text-white/80 text-sm max-w-md leading-relaxed">{overlayText}</p>}
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default GapSection;
