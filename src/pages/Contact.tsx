import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// Animation Variants
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
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsApp: '',
        service: '',
        otherServiceDetails: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (service: string) => {
        // Clear other details if switching away from 'Other'
        setFormData({
            ...formData,
            service,
            otherServiceDetails: service !== 'Other' ? '' : formData.otherServiceDetails
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const SERVICE_ID = "service_qicgo0k";
        const TEMPLATE_ID = "template_kixzs9s";
        const PUBLIC_KEY = "FCuESDuZa_P1O7Lb3";

        const serviceText = formData.service === 'Other'
            ? `Other: ${formData.otherServiceDetails}`
            : formData.service;

        console.log("Preparing to send email with params:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });


        const templateParams = {
            to_name: "Adeboye",
            to_email: "sokestudiong@gmail.com, clientservice@sokedigital.com.ng", // Fallback for recipient mapping
            email: "sokestudiong@gmail.com",    // Fallback if mapped to {{email}}
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.whatsApp || "Not Provided",
            service_interest: serviceText,
            message: formData.message,
            reply_to: formData.email
        };

        try {
            // Send to Admin
            const p1 = emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                ...templateParams,
                to_email: "sokestudiong@gmail.com",
                email: "sokestudiong@gmail.com"
            }, PUBLIC_KEY);

            // Send to Client Service
            const p2 = emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                ...templateParams,
                to_email: "clientservice@sokedigital.com.ng",
                email: "clientservice@sokedigital.com.ng"
            }, PUBLIC_KEY);

            await Promise.all([p1, p2]);

            setStatus('success');
            setFormData({ name: '', email: '', whatsApp: '', service: '', otherServiceDetails: '', message: '' });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <PageTransition>
                <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 flex flex-col">
                    <div className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
                        {/* Success Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" as const }}
                            className="bg-white p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 max-w-lg w-full text-center border border-slate-100 relative z-10"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Message Received</h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Thanks for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>We'll be in touch within 24 hours.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="inline-flex items-center justify-center bg-slate-900 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-900 transition-all transform hover:-translate-y-1 hover:shadow-lg shadow-slate-900/20"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    </div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 flex flex-col relative">

                {/* Hero Section */}
                <div className="bg-[#0B1120] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-7xl mx-auto relative z-10"
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-blue-200 tracking-widest uppercase mb-6 backdrop-blur-sm">
                            Contact Us
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">conversation.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                            Ready to transform your vision into reality? We're here to listen, strategize, and build something extraordinary together.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 -mt-16 mb-24 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* Left Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                            className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 lg:col-span-7"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                Send us a message
                                <div className="h-px bg-slate-100 flex-grow ml-4"></div>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=""
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder=""
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2 group md:col-span-2">
                                        <label htmlFor="whatsApp" className="text-xs font-bold text-slate-400 uppercase tracking-widest transition-colors group-focus-within:text-green-600 flex items-center gap-2">
                                            WhatsApp Number
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-green-500" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </label>
                                        <input
                                            id="whatsApp"
                                            type="tel"
                                            name="whatsApp"
                                            value={formData.whatsApp}
                                            onChange={handleChange}
                                            placeholder=""
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interested Service</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {['Strategy', 'Marketing', 'Infrastructure', 'Other'].map((service) => (
                                            <label
                                                key={service}
                                                className={`cursor-pointer border rounded-xl px-4 py-3 flex items-center justify-center transition-all duration-300 relative overflow-hidden group ${formData.service === service
                                                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/20'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={service}
                                                    checked={formData.service === service}
                                                    onChange={() => handleServiceSelect(service)}
                                                    className="sr-only"
                                                />
                                                <span className="font-semibold text-sm relative z-10">{service}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Conditional Input for "Other" - with Animation */}
                                    <AnimatePresence>
                                        {formData.service === 'Other' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" as const }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-2">
                                                    <label htmlFor="otherServiceDetails" className="sr-only">Please specify</label>
                                                    <textarea
                                                        id="otherServiceDetails"
                                                        name="otherServiceDetails"
                                                        value={formData.otherServiceDetails}
                                                        onChange={handleChange}
                                                        rows={2}
                                                        placeholder="Please describe what you are looking for..."
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us a bit about your project or inquiry..."
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3 text-lg"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 h-5 w-5 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Column: Contact Info */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
                            }}
                            className="lg:col-span-5 lg:pt-10 space-y-8"
                        >
                            {/* Email Card */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-500 text-sm mb-2">General inquiries & support</p>
                                        <a href="mailto:clientservice@sokedigital.com.ng" className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors break-all">
                                            clientservice@sokedigital.com.ng
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone Card */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                                        <p className="text-slate-500 text-sm mb-2">Mon - Fri, 9am - 5pm</p>
                                        <a href="tel:09118172903" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                            0911 817 2903
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Office Card */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Office</h3>
                                        <p className="text-slate-500 text-sm mb-2">Come say hello</p>
                                        <p className="text-lg font-bold text-slate-900 leading-tight">
                                            B10 Maj Gen Iliya Street,<br />Abuja, Nigeria
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Socials */}
                            <motion.div variants={fadeInUp} className="pt-4">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Connect with us</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/soke-digital-studio-686793364" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                    <a href="https://www.instagram.com/workwith.soke/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg>
                                    </a>
                                    <a href="https://x.com/sokestudio?s=21" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-black hover:border-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                        <span className="sr-only">X (Twitter)</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
