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

const Terms: React.FC = () => {
    const [activeSection, setActiveSection] = useState('welcome');

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
        { id: 'welcome', label: 'Welcome' },
        { id: 'about', label: '1. About Our Services' },
        { id: 'timelines', label: '2. Timelines & Delivery' },
        { id: 'client-responsibilities', label: '3. What You Need to Do' },
        { id: 'third-party', label: '4. Third-Party Services' },
        { id: 'payment', label: '5. Investment & Payment' },
        { id: 'refunds', label: '6. Refunds & Cancellations' },
        { id: 'ip', label: '7. Intellectual Property' },
        { id: 'confidentiality', label: '8. Confidentiality' },
        { id: 'portfolio', label: '9. Portfolio & Case Studies' },
        { id: 'liability', label: '10. Limitations of Liability' },
        { id: 'termination', label: '11. Ending Our Agreement' },
        { id: 'disputes', label: '12. Resolving Disagreements' },
        { id: 'other', label: '13. Other Important Bits' },
        { id: 'questions', label: '14. Questions?' },
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
                        <m.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</m.h1>
                        <m.p variants={fadeInUp} className="text-blue-200 text-lg max-w-2xl">Building businesses that work, grow, and last requires a solid foundation. Here is ours.</m.p>
                        <m.div variants={fadeInUp} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            Last Updated: January 2025
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

                            <section id="welcome" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Welcome</h2>
                                <p className="text-slate-600 leading-relaxed">Thank you for considering Sókè Digital for your business development needs.</p>
                                <p className="text-slate-600 leading-relaxed">These Terms and Conditions outline how we work together, what you can expect from us, and what we need from you to deliver excellent results.</p>
                                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r text-blue-900 font-medium">
                                    Please read these Terms carefully. By engaging our services, you agree to these terms.
                                </div>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="about" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">1</span>
                                    About Our Services
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">What We Do</h3>
                                    <p className="text-slate-600 mb-4">Sókè Digital is a business development firm that helps African founders turn their vision into profitable, lasting businesses.</p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {['Strategy', 'Marketing', 'Infrastructure'].map((item) => (
                                            <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <strong className="block text-blue-900 mb-1">{item}</strong>
                                                <span className="text-sm text-slate-500">
                                                    {item === 'Strategy' && 'Business direction & growth planning'}
                                                    {item === 'Marketing' && 'Demand generation & visibility'}
                                                    {item === 'Infrastructure' && 'Physical & digital systems'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3">How We Work</h3>
                                <div className="bg-slate-900 text-white p-6 rounded-xl mb-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 font-bold">•</span>
                                            <span><strong>Consulting:</strong> We guide, you execute</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 font-bold">•</span>
                                            <span><strong>Project Management:</strong> We execute together</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 font-bold">•</span>
                                            <span><strong>Full Ownership:</strong> We build and run it</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-slate-600 mb-4">Every project flows through our four-phase framework:</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">1. Discover</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">2. Design</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">3. Deliver</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">4. Scale & Sustain</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-2">Your Specific Scope</h3>
                                <p className="text-slate-600">The exact services, deliverables, timelines, and investment for your project are detailed in your signed Proposal or Statement of Work, which forms part of this agreement.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="timelines" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">2</span>
                                    Timelines & Delivery
                                </h2>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">About Timelines</h3>
                                <p className="text-slate-600 mb-4">The timelines in your proposal are good-faith estimates based on the agreed scope, timely responses, and no third-party delays.</p>
                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r text-yellow-800 text-sm mb-6">
                                    <strong>Important:</strong> Timelines are estimates, not guarantees. Actual delivery depends on many factors.
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">Delays can happen if:</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                                            <li>Feedback takes &gt;5 business days</li>
                                            <li>Information is missing or changes</li>
                                            <li>Scope changes occur</li>
                                            <li>Third-party service issues</li>
                                            <li>Uncontrollable events (power, internet)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">If you cause delays:</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                                            <li>Contract remains valid</li>
                                            <li>No refunds on fees</li>
                                            <li>Monthly fees continue</li>
                                            <li>We may prioritize other projects</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 italic">If you're unresponsive for 30+ days, we may need to re-scope and charge additional fees.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="client-responsibilities" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">3</span>
                                    What You Need to Do
                                </h2>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-slate-900">Please Do:</h3>
                                        <ul className="space-y-2 text-slate-600 text-sm">
                                            <li className="flex gap-2"><span className="text-green-500">✓</span> Provide complete information</li>
                                            <li className="flex gap-2"><span className="text-green-500">✓</span> Give access to necessary systems</li>
                                            <li className="flex gap-2"><span className="text-green-500">✓</span> Respond promptly</li>
                                            <li className="flex gap-2"><span className="text-green-500">✓</span> Consolidate feedback</li>
                                            <li className="flex gap-2"><span className="text-green-500">✓</span> Treat our team with respect</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-slate-900">Please Don't:</h3>
                                        <ul className="space-y-2 text-slate-600 text-sm">
                                            <li className="flex gap-2"><span className="text-red-500">✕</span> Make excessive demands out of scope</li>
                                            <li className="flex gap-2"><span className="text-red-500">✕</span> Reject valid work without reason</li>
                                            <li className="flex gap-2"><span className="text-red-500">✕</span> Expect unpromised guarantees</li>
                                            <li className="flex gap-2"><span className="text-red-500">✕</span> Abuse or threaten team members</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-6 text-red-600 text-sm font-medium bg-red-50 p-3 rounded border border-red-100 inline-block">If behavior becomes unreasonable or abusive, we may terminate immediately without refund.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="third-party" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">4</span>
                                    Third-Party Services
                                </h2>
                                <p className="text-slate-600 mb-4">We may need to use services like domain hosting, email platforms, payment gateways, or software subscriptions.</p>
                                <p className="font-semibold text-slate-800">Unless agreed otherwise: You pay for these direct. We help set up, but do not control them.</p>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="payment" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">5</span>
                                    Investment & Payment
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <h3 className="text-lg font-bold text-blue-900 mb-2">Consulting Engagements</h3>
                                        <p className="text-sm text-slate-500 mb-4">One-off strategic projects (2-6 weeks)</p>
                                        <div className="flex justify-between items-center text-sm border-t pt-4">
                                            <span className="font-medium text-slate-700">70% Deposit</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="font-medium text-slate-700">30% On Delivery</span>
                                        </div>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <h3 className="text-lg font-bold text-blue-900 mb-2">Project Management Engagements</h3>
                                        <p className="text-sm text-slate-500 mb-4">Monthly retainer, minimum 3-month commitment</p>
                                        <div className="text-sm border-t pt-4 text-slate-600">
                                            First month upfront. Subsequent months invoiced on the 1st (due in 7 days). Auto-renews.
                                        </div>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <h3 className="text-lg font-bold text-blue-900 mb-2">Full Ownership Engagements</h3>
                                        <p className="text-sm text-slate-500 mb-4">Complete business building</p>
                                        <div className="grid grid-cols-3 gap-2 text-center text-xs border-t pt-4">
                                            <div className="bg-gray-50 p-2 rounded">40% Deposit</div>
                                            <div className="bg-gray-50 p-2 rounded">30% Blueprint</div>
                                            <div className="bg-gray-50 p-2 rounded">30% Go Live</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-slate-50 p-5 rounded-lg text-sm text-slate-600">
                                    <p><strong>Late Payments:</strong> Due within 7 days. &gt;14 days late may incur 5% fee and work pause.</p>
                                    <p className="mt-2"><strong>Taxes:</strong> Fees exclude VAT/taxes unless stated.</p>
                                </div>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            <section id="refunds" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">6</span>
                                    Refunds & Cancellations
                                </h2>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r mb-8">
                                    <h3 className="text-lg font-bold text-red-900 mb-2">Strict Refund Policy</h3>
                                    <p className="text-red-800">Deposits are non-refundable once work begins. Once we do the work, fees are earned.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">No refunds for:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                            <li>Change of heart/direction</li>
                                            <li>Business market failure</li>
                                            <li>Inability to implement advice</li>
                                            <li>Delays caused by you</li>
                                            <li>Unhappiness with spec-compliant work</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Refunds only if:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                            <li>We fail to deliver promised work due to our fault</li>
                                            <li>We materially breach terms</li>
                                        </ul>
                                        <p className="text-xs text-slate-500 mt-2">*Refunds cover undelivered work only.</p>
                                    </div>
                                </div>
                            </section>

                            <div className="w-full h-px bg-gray-100 mb-16"></div>

                            {/* Grouping smaller sections to save vertical space but keeping them distinct */}
                            <div className="space-y-16">
                                <section id="ip" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">7</span> Intellectual Property</h2>
                                    <p className="text-slate-600 mb-4"><strong>You Own:</strong> Final deliverables created for you and materials you provided, once paid in full.</p>
                                    <p className="text-slate-600"><strong>We Own:</strong> Our methods, frameworks, templates, and pre-existing knowledge. Work remains ours until fully paid.</p>
                                </section>

                                <section id="confidentiality" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">8</span> Confidentiality</h2>
                                    <p className="text-slate-600">We keep your business secrets. You keep ours. Exceptions apply for public info or legal requirements.</p>
                                </section>

                                <section id="portfolio" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">9</span> Portfolio</h2>
                                    <p className="text-slate-600">We love to show off our work. We may use your project in our portfolio unless you ask us not to in writing.</p>
                                </section>

                                <section id="liability" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">10</span> Liability</h2>
                                    <div className="bg-gray-100 p-4 rounded text-sm text-slate-700">
                                        <p className="mb-2"><strong>Cap:</strong> Total liability limited to amount paid in last 12 months.</p>
                                        <p><strong>Exclusions:</strong> Lost profits, data, indirect damages, third-party issues, force majeure.</p>
                                    </div>
                                </section>
                            </div>

                            <div className="w-full h-px bg-gray-100 mt-16 mb-16"></div>

                            <section id="termination" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">11</span>
                                    Ending Our Agreement
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">If You Cancel:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                            <li><strong>Consulting:</strong> Anytime with notice. Pay for work done.</li>
                                            <li><strong>Projects/Ownership:</strong> 30 days notice. Pay notice period + current month. 50% of remaining contract if minimum applies.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">If We Cancel:</h4>
                                        <p className="text-sm text-slate-600 mb-2">Immediate termination for non-payment, abuse, breach of terms, or unresponsive &gt;14 days.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-center font-bold text-slate-900">Termination does not equal Refund.</p>
                            </section>

                            <section id="disputes" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">12</span> Resolving Disagreements</h2>
                                <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                                    <li>Good faith discussion</li>
                                    <li>Mediation</li>
                                    <li>Legal action (Nigerian Courts)</li>
                                </ol>
                            </section>

                            <section id="other" className="mb-16 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">13</span> Other Important Bits</h2>
                                <p className="text-sm text-slate-600">Agreement is Terms + Proposal. Updates posted online. We act as independent contractors.</p>
                            </section>

                            <div className="bg-blue-900 text-white p-8 rounded-2xl text-center" id="questions">
                                <h2 className="text-2xl font-bold mb-4">14. Questions?</h2>
                                <p className="mb-6 opacity-90">We're happy to discuss any part of these terms.</p>
                                <div className="space-y-1">
                                    <p><a href="mailto:clientservice@sokedigital.com.ng" className="underline hover:text-blue-200">clientservice@sokedigital.com.ng</a></p>
                                    <p><a href="tel:09118172903" className="hover:text-blue-200">09118172903</a></p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-blue-800 opacity-75 text-sm">
                                    <p>By signing our Proposal or starting work, you agree to these Terms.</p>
                                    <p className="font-bold mt-2 text-lg">Let's build something great together.</p>
                                </div>
                            </div>

                        </div>
                    </m.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Terms;
