import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const Privacy: React.FC = () => {
    const [activeSection, setActiveSection] = useState('who-we-are');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'who-we-are', label: '1. Who We Are' },
        { id: 'info-collect', label: '2. Information We Collect' },
        { id: 'how-use', label: '3. How We Use Your Information' },
        { id: 'legal-basis', label: '4. Legal Basis for Processing' },
        { id: 'sharing', label: '5. Sharing and Disclosure' },
        { id: 'cookies', label: '6. Cookies and Tracking' },
        { id: 'retention', label: '7. Data Retention' },
        { id: 'security', label: '8. Data Security' },
        { id: 'rights', label: '9. Your Rights' },
        { id: 'transfers', label: '10. International Transfers' },
        { id: 'links', label: '11. Third-Party Links' },
        { id: 'updates', label: '12. Updates to This Policy' },
        { id: 'contact', label: '13. Contact Us' },
    ];

    return (
        <PageTransition>
            <div className="bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="bg-blue-900 text-white py-20 px-6 md:px-12 lg:px-24">
                    <m.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="max-w-7xl mx-auto"
                    >
                        <m.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</m.h1>
                        <m.p variants={fadeInUp} className="text-blue-200 text-lg max-w-2xl">Your privacy matters to us. Here's how we protect your information.</m.p>
                        <m.div variants={fadeInUp} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            Last Updated: January 2026
                        </m.div>
                    </m.div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col lg:flex-row gap-16">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4 hidden lg:block">
                        <m.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="sticky top-32"
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Table of Contents</h3>
                            <nav className="space-y-1 border-l border-gray-200">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-4 py-2 text-sm transition-all duration-200 border-l-2 -ml-[2px] ${activeSection === item.id
                                            ? 'border-blue-600 text-blue-900 font-semibold bg-blue-50'
                                            : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="mt-8 text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                Back to top
                            </button>
                        </m.div>
                    </div>

                    {/* Main Content */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-3/4"
                    >
                        <div className="prose prose-slate prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

                            <div className="mb-12">
                                <p className="text-slate-600 leading-relaxed">
                                    Sókè Digital ("Sókè", "we", "our", or "us") is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with us through our website, social media platforms, services, and any other digital or offline touchpoints.
                                </p>
                                <p className="text-slate-600 font-medium">By accessing or using our services, you agree to the terms of this Privacy Policy.</p>
                            </div>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="who-we-are" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">1</span>
                                    Who We Are
                                </h2>
                                <p className="text-slate-600">Sókè Digital is a business development firm that helps African founders and businesses build profitable, sustainable, and digitally integrated businesses through Strategy, Marketing, and Infrastructure.</p>
                                <p className="text-slate-600 mt-4">For the purposes of applicable data protection laws, Sókè Digital is the data controller of the personal information you provide to us.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="info-collect" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">2</span>
                                    Information We Collect
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">a. Information You Provide Directly</h3>
                                    <p className="text-slate-600 mb-4">You may provide personal information when you:</p>
                                    <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
                                        <li>Fill out forms on our website</li>
                                        <li>Book a discovery call or consultation</li>
                                        <li>Subscribe to our newsletters or updates</li>
                                        <li>Contact us via email, DM, phone, or contact forms</li>
                                        <li>Enter into a service agreement with us</li>
                                    </ul>
                                    <p className="text-slate-600 mb-2">This information may include:</p>
                                    <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                                        <div className="bg-gray-50 p-3 rounded">Full name</div>
                                        <div className="bg-gray-50 p-3 rounded">Email address</div>
                                        <div className="bg-gray-50 p-3 rounded">Phone number</div>
                                        <div className="bg-gray-50 p-3 rounded">Business name and details</div>
                                        <div className="bg-gray-50 p-3 rounded">Role or title</div>
                                        <div className="bg-gray-50 p-3 rounded">Project or business information</div>
                                        <div className="bg-gray-50 p-3 rounded col-span-2">Payment and billing details (processed via third-party providers)</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">b. Information Collected Automatically</h3>
                                    <p className="text-slate-600 mb-4">When you visit our website or interact with our digital platforms, we may automatically collect:</p>
                                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                        <li>IP address</li>
                                        <li>Browser type and version</li>
                                        <li>Device information</li>
                                        <li>Pages visited and time spent</li>
                                        <li>Referral sources</li>
                                        <li>Cookies and similar tracking technologies</li>
                                    </ul>
                                </div>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="how-use" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">3</span>
                                    How We Use Your Information
                                </h2>
                                <p className="text-slate-600 mb-4">We use your information to:</p>
                                <ul className="grid md:grid-cols-1 gap-3">
                                    {[
                                        'Respond to inquiries and communicate with you',
                                        'Conduct discovery sessions and assessments',
                                        'Deliver our services effectively',
                                        'Manage contracts, invoicing, and payments',
                                        'Improve our website, content, and service offerings',
                                        'Send updates, insights, or marketing communications (where consent is given)',
                                        'Comply with legal, regulatory, or contractual obligations'
                                    ].map((use) => (
                                        <li key={use} className="flex items-start gap-3 text-slate-600">
                                            <span className="text-blue-500 mt-1">✔</span>
                                            <span>{use}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-slate-800 font-semibold border-l-4 border-blue-500 pl-4 bg-blue-50 py-2">We do not sell, rent, or trade your personal data.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="legal-basis" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">4</span>
                                    Legal Basis for Processing
                                </h2>
                                <p className="text-slate-600 mb-4">Where applicable, we process your personal data based on one or more of the following legal grounds:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="border border-gray-200 p-4 rounded-lg">
                                        <h4 className="font-bold text-slate-800">Consent</h4>
                                        <p className="text-sm text-slate-500">You have given us clear permission.</p>
                                    </div>
                                    <div className="border border-gray-200 p-4 rounded-lg">
                                        <h4 className="font-bold text-slate-800">Contract</h4>
                                        <p className="text-sm text-slate-500">Performance of a contract or steps prior to one.</p>
                                    </div>
                                    <div className="border border-gray-200 p-4 rounded-lg">
                                        <h4 className="font-bold text-slate-800">Legal Obligation</h4>
                                        <p className="text-sm text-slate-500">Compliance with the law.</p>
                                    </div>
                                    <div className="border border-gray-200 p-4 rounded-lg">
                                        <h4 className="font-bold text-slate-800">Legitimate Interests</h4>
                                        <p className="text-sm text-slate-500">Our business interests (respecting your rights).</p>
                                    </div>
                                </div>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="sharing" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">5</span>
                                    Sharing and Disclosure of Information
                                </h2>
                                <p className="text-slate-600 mb-4">We may share your information only in the following circumstances:</p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                                    <li>With trusted third-party service providers (e.g., payment processors, CRM tools, hosting services) strictly for business operations</li>
                                    <li>With professional advisors (legal, accounting, compliance)</li>
                                    <li>Where required by law, regulation, or legal process</li>
                                    <li>In connection with a business restructuring, merger, or sale (with appropriate safeguards)</li>
                                </ul>
                                <p className="text-sm text-slate-500 italic">All third parties are required to handle your data securely and in line with applicable data protection laws.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="cookies" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">6</span>
                                    Cookies and Tracking Technologies
                                </h2>
                                <p className="text-slate-600 mb-4">We use cookies and similar technologies to:</p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                    <li>Improve website performance</li>
                                    <li>Understand user behavior</li>
                                    <li>Analyze traffic and usage patterns</li>
                                </ul>
                                <p className="mt-4 text-slate-600">You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect site functionality.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="retention" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">7</span>
                                    Data Retention
                                </h2>
                                <p className="text-slate-600 mb-4">We retain personal information only for as long as necessary to:</p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                    <li>Fulfill the purposes outlined in this policy</li>
                                    <li>Meet legal, accounting, or regulatory requirements</li>
                                    <li>Resolve disputes and enforce agreements</li>
                                </ul>
                                <p className="mt-4 text-slate-600">When data is no longer required, it is securely deleted or anonymized.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="security" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">8</span>
                                    Data Security
                                </h2>
                                <p className="text-slate-600 mb-4">We implement appropriate technical and organizational measures to protect your personal information against:</p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
                                    <li>Unauthorized access</li>
                                    <li>Loss or misuse</li>
                                    <li>Alteration or disclosure</li>
                                </ul>
                                <p className="text-slate-600 font-medium bg-yellow-50 p-4 border-l-4 border-yellow-400">However, no digital system is completely secure, and we cannot guarantee absolute security.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="rights" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">9</span>
                                    Your Rights
                                </h2>
                                <p className="text-slate-600 mb-4">Depending on your location and applicable laws, you may have the right to:</p>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        <li className="flex items-center gap-2 text-slate-700"><span>🔹</span> Access your personal data</li>
                                        <li className="flex items-center gap-2 text-slate-700"><span>🔹</span> Request correction or updates</li>
                                        <li className="flex items-center gap-2 text-slate-700"><span>🔹</span> Request deletion of your data</li>
                                        <li className="flex items-center gap-2 text-slate-700"><span>🔹</span> Object to/restrict processing</li>
                                        <li className="flex items-center gap-2 text-slate-700"><span>🔹</span> Withdraw consent at any time</li>
                                    </ul>
                                </div>
                                <p className="mt-4 text-slate-600">To exercise these rights, please contact us using the details below.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="transfers" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">10</span> International Data Transfers</h2>
                                <p className="text-slate-600">Your information may be processed or stored outside your country of residence. Where this occurs, we take reasonable steps to ensure adequate data protection safeguards are in place.</p>
                            </section>

                            <section id="links" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">11</span> Third-Party Links</h2>
                                <p className="text-slate-600">Our website or platforms may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies separately.</p>
                            </section>

                            <section id="updates" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">12</span> Updates to This Policy</h2>
                                <p className="text-slate-600">We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal obligations. Updates will be posted on this page with a revised "Last updated" date.</p>
                            </section>

                            <div className="bg-blue-900 text-white p-8 rounded-2xl text-center" id="contact">
                                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                                <p className="mb-6 opacity-90">If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:</p>
                                <p className="text-xl font-bold">Sókè Digital</p>
                                <div className="space-y-1 mt-4">
                                    <p><a href="mailto:clientservice@sokedigital.com.ng" className="underline hover:text-blue-200">clientservice@sokedigital.com.ng</a></p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-blue-800 opacity-75 text-sm">
                                    <p>By engaging with Sókè Digital, you acknowledge that you have read and understood this Privacy Policy.</p>
                                </div>
                            </div>

                        </div>
                    </m.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Privacy;
