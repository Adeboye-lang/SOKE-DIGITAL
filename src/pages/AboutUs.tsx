import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

const AboutUs: React.FC = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-white font-sans selection:bg-blue-100">

                {/* 1. HERO SECTION: Clean & Impactful */}
                <div className="relative pt-32 pb-24 px-6 md:px-12 border-b border-slate-100 overflow-hidden">
                    <m.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-7xl mx-auto relative z-10"
                    >
                        <m.span
                            variants={fadeInUp}
                            className="inline-block py-2 px-6 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-slate-900 shadow-sm"
                        >
                            About Soke
                        </m.span>
                        <m.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]"
                        >
                            Building the Africa <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">we believe in.</span>
                        </m.h1>
                        <m.div
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 mt-16"
                        >
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                We are not just a digital agency. We are an infrastructure for growth, designed to help African founders scale their vision into reality.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-slate-200 flex-1"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Est. 2024</span>
                            </div>
                        </m.div>
                    </m.div>
                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                </div>

                {/* 2. MANIFESTO SECTION */}
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="py-32 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden"
                >
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                            "We believe that the future of Africa belongs to those who build it.
                            Not with hope alone, but with <span className="text-blue-500">strategy</span>, <span className="text-blue-500">systems</span>, and <span className="text-blue-500">scale</span>."
                        </h2>
                        <p className="text-slate-500 uppercase tracking-[0.2em] text-sm font-bold">The Soke Philosophy</p>
                    </div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </m.div>

                {/* 3. APPROACH / ORIGIN */}
                <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <m.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" as const }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Modern corporate infrastructure" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <p className="text-sm font-bold text-slate-900">"Talent is universal. Opportunity is not. We are bridging that gap."</p>
                            </div>
                        </m.div>
                        <m.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-6">Our Approach</h3>
                            <h2 className="text-4xl font-bold text-slate-900 mb-8">Not your typical agency.</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Most agencies deliver "assets"—a logo, a website, a slide deck. We deliver outcomes.
                                </p>
                                <p>
                                    Soke Digital was born from a frustration with the status quo. We saw brilliant African founders struggling not because they lacked vision, but because they lacked the infrastructure to execute that vision at scale.
                                </p>
                                <p>
                                    We partner with you to build the engine, not just paint the car.
                                </p>
                            </div>
                        </m.div>
                    </div>
                </div>

                {/* 4. TEAM GRID */}
                <div className="py-24 bg-slate-50 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The Builders</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">Meet the leadership team driving the vision.</p>
                        </m.div>

                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Member 1: Seamas */}
                            <m.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="h-96 overflow-hidden bg-slate-200 relative">
                                    <div className="w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'top center' }}>
                                        <img src="/Seamas.jpg" alt="Seamas Vincent Ideh" className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="https://www.linkedin.com/in/seamas-ideh-abb139236/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-blue-900 hover:text-blue-600 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.348 6.169h2.352v1.08h.031c.327-.622 1.129-1.278 2.321-1.278 2.478 0 2.934 1.636 2.934 3.763v4.364H11.59v-3.957c0-.943-.017-2.155-1.31-2.155-1.311 0-1.512 1.026-1.512 2.086v4.026H6.348V6.169z" /></svg></a>
                                        <a href="https://www.instagram.com/theseamasvincent/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-pink-600 hover:text-pink-500 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.046-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg></a>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Seamas Vincent Ideh</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Founder and CEO</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">Saw the gap in African business building and decided to close it. Passionate about sustainable growth.</p>
                                </div>
                            </m.div>

                            {/* Member 2: Esosa */}
                            <m.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="h-96 overflow-hidden bg-slate-200 relative">
                                    <div className="w-full h-full" style={{ transform: 'scale(1.35)', transformOrigin: 'top center' }}>
                                        <img src="/Esosa.JPG" alt="Esosa Eghobamien" className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="https://www.linkedin.com/in/esosa-eghobamien-5269681b1/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-blue-900 hover:text-blue-600 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.348 6.169h2.352v1.08h.031c.327-.622 1.129-1.278 2.321-1.278 2.478 0 2.934 1.636 2.934 3.763v4.364H11.59v-3.957c0-.943-.017-2.155-1.31-2.155-1.311 0-1.512 1.026-1.512 2.086v4.026H6.348V6.169z" /></svg></a>
                                        <a href="https://www.instagram.com/esosa_edosa?igsh=NG5mbGhzajJoODV6&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-pink-600 hover:text-pink-500 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598.28.11-.704.24-1.485.276-.843.038-1.096.046-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg></a>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Esosa Eghobamien</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Operations Lead</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">The engine behind the vision. Turns chaos into order and strategy into execution.</p>
                                </div>
                            </m.div>

                            {/* Member 3: Naze Terdoo */}
                            <m.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="h-96 overflow-hidden bg-slate-200 relative">
                                    <div className="w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'top center' }}>
                                        <img src="/Terdo.jpeg" alt="Naze Terdoo" className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="https://www.linkedin.com/in/terdoo-naze-1a18373a5" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-blue-900 hover:text-blue-600 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.348 6.169h2.352v1.08h.031c.327-.622 1.129-1.278 2.321-1.278 2.478 0 2.934 1.636 2.934 3.763v4.364H11.59v-3.957c0-.943-.017-2.155-1.31-2.155-1.311 0-1.512 1.026-1.512 2.086v4.026H6.348V6.169z" /></svg></a>
                                        <a href="https://www.instagram.com/_ter_doo/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-pink-600 hover:text-pink-500 shadow-md"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598.28.11-.704.24-1.485.276-.843.038-1.096.046-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg></a>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Naze Terdoo</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Client Success Manager</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">Ensures all Soke Digital Clients and Partners are properly and efficiently served.</p>
                                </div>
                            </m.div>

                        </m.div>
                    </div>
                </div>

                {/* 5. FOUNDERS GRID */}
                <div className="py-24 bg-white px-6 md:px-12">
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16 max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-900 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-4">
                            Ideal Partners
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            The <span className="text-blue-900">Founders</span> We Partner With
                        </h2>
                    </m.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" as const }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=1200" alt="Founders with traction" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.7]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent"></div>
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <span className="inline-block py-1 px-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-4 rounded-lg w-fit">Growth Stage</span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Founders with traction<br />looking to <span className="text-blue-200">scale</span></h3>
                                <p className="text-blue-50/90 text-sm md:text-lg leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">You have a product, you have sales. Now you need the systems to multiply by 10x without breaking.</p>
                            </div>
                        </m.div>

                        {/* Card 2 */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
                            className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200" alt="Structural Foundation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.7]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <span className="inline-block py-1 px-3 bg-slate-700/40 backdrop-blur-sm border border-slate-500/30 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4 rounded-lg w-fit">Mindset</span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Entrepreneurs prepared<br />to <span className="text-blue-200">invest in quality</span></h3>
                                <p className="text-slate-200/90 text-sm md:text-lg leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">We don't do shortcuts. We build foundations that last decades. If you want a quick fix, we aren't for you.</p>
                            </div>
                        </m.div>
                    </div>
                </div>

                {/* 6. LEGACY / CTA */}
                <div className="py-32 px-6 md:px-12 text-center bg-white border-t border-slate-100">
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
                            Built to <span className="text-blue-900">last.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 font-light">
                            We are not here for a quick exit. We are here to build the institutions that will define the next century of African business.
                        </p>
                        <Link to="/contact" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-900 transition-all hover:scale-105 shadow-xl">
                            Partner With Us
                        </Link>
                    </m.div>
                </div>

            </div>
        </PageTransition>
    );
};

export default AboutUs;
