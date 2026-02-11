import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const PartnershipSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 relative z-10"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                    Partnership Models
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Three ways to <span className="text-blue-500">work</span> with us.
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Whether you need advice, execution, or a full-scale partner, we have a model that fits your growth stage.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            >
                {/* Card 1: Consulting */}
                <motion.div variants={cardVariant} className="group relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-blue-900/50 transition-all duration-500">
                    <div className="bg-slate-800/50 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col overflow-hidden relative">
                        <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.002 6.002 0 0 0-5.303-7.5l-.6.75m5.903 6.75 5.903-6.75-.6-.75A6.002 6.002 0 0 0 12 12.75" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Consulting</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Strategic advice and audits for teams who need direction but have the capacity to execute internally.
                        </p>
                        <div className="mt-auto">
                            <Link to="/services" className="text-blue-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                View Details <span>→</span>
                            </Link>
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </motion.div>

                {/* Card 2: Project */}
                <motion.div variants={cardVariant} className="group relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-blue-900/50 transition-all duration-500">
                    <div className="bg-slate-800/50 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col overflow-hidden relative">
                        <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m5.904 6.75-2.5-3.03" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Project Builds</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Specific, high-impact deliverables. We build the website, the funnel, or the campaign, then hand you the keys.
                        </p>
                        <div className="mt-auto">
                            <Link to="/services" className="text-blue-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                View Details <span>→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Partnership */}
                <motion.div variants={cardVariant} className="group relative rounded-3xl p-1 bg-gradient-to-b from-blue-500 to-blue-900 shadow-xl shadow-blue-900/20 transform md:-translate-y-4">
                    <div className="bg-slate-900 h-full rounded-[20px] p-8 flex flex-col overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Full Partnership</h3>
                        <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                            We become your growth department. Full ownership of strategy, marketing, and systems. We win when you win.
                        </p>
                        <div className="mt-auto">
                            <Link to="/how-we-work" className="text-white font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                Learn How It Works <span>→</span>
                            </Link>
                        </div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PartnershipSection;
