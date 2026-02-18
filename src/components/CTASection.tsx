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

const CTASection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 flex flex-col items-center justify-center text-center px-4">
            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.2 }}
            >
                <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    Ready to <span className="text-blue-700">build</span> something
                </m.h2>
                <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    that <span className="text-blue-700">lasts</span>
                </m.h2>

                <m.p variants={fadeInUp} className="text-gray-400 text-xs uppercase tracking-widest mb-10">
                    LOGISTICS AND SUPPLY CHAIN | AFRICA'S SYSTEMS | SCALABLE
                </m.p>

                <m.div variants={fadeInUp}>
                    <Link to="/book-call" className="bg-blue-800 text-white px-8 py-4 rounded font-semibold shadow-lg hover:bg-blue-900 transition-all hover:scale-105 active:scale-95 inline-block">
                        Book a Discovery Call
                    </Link>
                </m.div>
            </m.div>
        </section>
    );
};

export default CTASection;
