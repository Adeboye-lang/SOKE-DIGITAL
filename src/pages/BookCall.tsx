import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// --- Calendar Helpers ---
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "circOut" as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const BookCall: React.FC = () => {
    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        description: '',
    });

    // Calendar State
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today); // For viewing month
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Specific day selected
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [step, setStep] = useState<1 | 2>(1); // 1 = Calendar/Time, 2 = Details
    const [submitted, setSubmitted] = useState(false);

    // Generate Calendar Grid
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const calendarDays = [];

    // Empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isSelected = selectedDate?.toDateString() === date.toDateString();
        const isToday = today.toDateString() === date.toDateString();
        const isPast = date < new Date(today.setHours(0, 0, 0, 0));

        calendarDays.push(
            <button
                key={day}
                disabled={isPast}
                onClick={() => handleDateClick(date)}
                className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${isSelected ? 'bg-blue-600 text-white shadow-lg scale-110' : ''}
                    ${!isSelected && !isPast ? 'hover:bg-blue-50 text-slate-700 hover:text-blue-600' : ''}
                    ${isToday && !isSelected ? 'border border-blue-600 text-blue-600' : ''}
                    ${isPast ? 'text-gray-300 cursor-not-allowed hidden md:flex' : ''} 
                    ${isPast ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : ''}
                `}
            >
                {day}
            </button>
        );
    }

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        setSelectedTime(null);
        setLoadingSlots(true);

        // Simulate fetching slots
        setTimeout(() => {
            // Generate some "random" slots
            const slots = [
                "09:00 AM", "09:30 AM", "10:00 AM", "11:30 AM",
                "02:00 PM", "03:30 PM", "04:00 PM"
            ];
            // Filter randomly to look "real"
            setAvailableSlots(slots.filter(() => Math.random() > 0.3));
            setLoadingSlots(false);
        }, 600);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep(2); // Auto advance to details
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_qicgo0k";
        const TEMPLATE_ID = "template_kixzs9s";
        const PUBLIC_KEY = "w_h6JEy_O4e1xuYFB";

        try {
            console.log("Preparing to send booking email:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
            const templateParams = {
                to_name: "Adeboye",
                from_name: formData.fullName,
                from_email: formData.email,
                phone_number: formData.phone,
                booking_date: selectedDate?.toLocaleDateString(),
                booking_time: selectedTime,
                challenge_description: formData.description,
                reply_to: formData.email
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            console.log('Booking admin notification sent!');
            setSubmitted(true);
        } catch (error: any) {
            console.error('Failed to send booking email:', error);
            if (error.text) {
                console.error('EmailJS Error Text:', error.text);
            }
            alert('We encountered a connection error. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setSubmitted(false);
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ fullName: '', email: '', phone: '', description: '' });
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-blue-100">

                {/* Left Panel: Executive Briefing & Value */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="lg:w-2/5 bg-slate-950 text-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-md bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
                            Executive Briefing
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            Strategy. <br />
                            Systems. <br />
                            <span className="text-blue-500">Scale.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed mb-12 text-lg max-w-md font-light">
                            Book a 30-minute consultation to diagnose your growth blockers and outline a roadmap for scale.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="space-y-8">
                            <div>
                                <h4 className="font-bold text-white text-sm mb-2">Who this is for:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400 text-sm">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Founders with a live product or service (post-revenue).</span>
                                    </li>
                                    { /* DTC Line Removed */}
                                    <li className="flex items-start gap-3 text-slate-400 text-sm">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Companies ready to invest in serious infrastructure.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-slate-800 relative z-10">
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Current Availability</p>
                        <p className="text-white">Limited slots for February 2026.</p>
                    </motion.div>
                </motion.div>

                {/* Right Panel: Interactive Scheduler */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                    className="lg:w-3/5 bg-slate-50 p-4 md:p-12 lg:p-16 flex items-center justify-center overflow-y-auto"
                >
                    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden min-h-[600px] flex flex-col border border-slate-100">

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex-1 flex flex-col items-center justify-center p-12 text-center"
                            >
                                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">You're Booked!</h2>
                                <p className="text-slate-500 mb-8 max-w-md text-lg">
                                    We've sent a calendar invitation to <strong className="text-slate-900">{formData.email}</strong>. Prepare for a high-value session.
                                </p>
                                <button onClick={resetForm} className="text-blue-600 font-bold hover:underline uppercase tracking-wide text-sm">
                                    Book another call
                                </button>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
                                    <h2 className="text-xl font-bold text-slate-900">
                                        {step === 1 ? 'Select Date & Time' : 'Your Details'}
                                    </h2>
                                    {step === 2 && (
                                        <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-1 font-medium transition-colors">
                                            ← Back
                                        </button>
                                    )}
                                </div>

                                <div className="flex-1 overflow-y-auto bg-white">
                                    {step === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-8 grid md:grid-cols-2 gap-12 h-full"
                                        >
                                            {/* Calendar Widget */}
                                            <div>
                                                <div className="flex items-center justify-between mb-6">
                                                    <button onClick={handlePrevMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">←</button>
                                                    <span className="font-bold text-slate-800 text-lg">{monthNames[month]} {year}</span>
                                                    <button onClick={handleNextMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">→</button>
                                                </div>
                                                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                                        <div key={d} className="text-xs font-bold text-slate-300 py-1">{d}</div>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-7 gap-2 place-items-center">
                                                    {calendarDays}
                                                </div>
                                                <div className="mt-6 text-xs text-slate-400 text-center font-medium bg-slate-50 py-2 rounded-lg">
                                                    West Africa Time (WAT)
                                                </div>
                                            </div>

                                            {/* Time Slots Widget */}
                                            <div className="md:border-l md:border-slate-100 md:pl-8 pt-8 md:pt-0">
                                                <h3 className="font-bold text-slate-900 mb-6">
                                                    {selectedDate
                                                        ? selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
                                                        : 'Select a date'}
                                                </h3>

                                                {!selectedDate && (
                                                    <div className="flex items-center justify-center h-48 text-slate-400 text-sm italic bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                                        Choose a date to view availability
                                                    </div>
                                                )}

                                                {loadingSlots && (
                                                    <div className="flex items-center justify-center h-48">
                                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                                    </div>
                                                )}

                                                {selectedDate && !loadingSlots && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar"
                                                    >
                                                        {availableSlots.length > 0 ? availableSlots.map((slot, i) => (
                                                            <motion.button
                                                                key={slot}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: i * 0.05 }}
                                                                onClick={() => handleTimeSelect(slot)}
                                                                className="w-full text-center py-3 rounded-xl border border-blue-100 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.02]"
                                                            >
                                                                {slot}
                                                            </motion.button>
                                                        )) : (
                                                            <div className="text-center text-sm text-slate-400 py-8">
                                                                No slots available.
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, ease: "easeOut" as const }}
                                            className="p-8"
                                        >
                                            <div className="mb-8 bg-blue-50 p-6 rounded-2xl flex items-center justify-between border border-blue-100">
                                                <div>
                                                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Confirming Appointment</p>
                                                    <p className="text-blue-900 font-bold text-lg">
                                                        {selectedDate?.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} • <span className="text-blue-600">{selectedTime}</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                                        <input
                                                            required
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            className="w-full border-b border-slate-200 focus:border-blue-600 outline-none py-3 bg-transparent transition-all text-slate-900 placeholder:text-slate-300"
                                                            placeholder="Jane Doe"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                                        <input
                                                            required
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full border-b border-slate-200 focus:border-blue-600 outline-none py-3 bg-transparent transition-all text-slate-900 placeholder:text-slate-300"
                                                            placeholder="jane@company.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full border-b border-slate-200 focus:border-blue-600 outline-none py-3 bg-transparent transition-all text-slate-900 placeholder:text-slate-300"
                                                        placeholder="+234..."
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">What's your biggest challenge right now?</label>
                                                    <textarea
                                                        required
                                                        rows={3}
                                                        name="description"
                                                        value={formData.description}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-blue-600 outline-none transition-all mt-2 text-slate-900 placeholder:text-slate-300"
                                                        placeholder="E.g., We are struggling to scale our logistics..."
                                                    ></textarea>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl shadow-xl hover:bg-blue-600 hover:shadow-blue-900/20 hover:-translate-y-1 transition-all mt-6 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                                                >
                                                    {isSubmitting ? 'Confirming...' : 'Complete Booking'}
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default BookCall;
