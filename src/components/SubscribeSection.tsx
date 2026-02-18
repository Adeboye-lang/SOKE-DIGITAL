import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const SubscribeSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await addDoc(collection(db, 'subscribers'), {
                email,
                createdAt: new Date(),
                source: window.location.pathname
            });
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Error subscribing:", error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center border border-slate-100 mb-16 relative overflow-hidden">
            <div className="relative z-10">
                <span className="text-3xl mb-4 block">📩</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Built for founders building in Nigeria.
                </h3>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto text-lg">
                    Get insights like this in your inbox. No fluff, just scalable strategies.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl font-bold max-w-lg mx-auto border border-green-200">
                        Thanks for subscribing! You're on the list. 🚀
                    </div>
                ) : (
                    <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            className="flex-1 px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm disabled:opacity-60"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 disabled:opacity-70 whitespace-nowrap"
                        >
                            {status === 'loading' ? 'Joining...' : 'Subscribe'}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p className="text-red-500 text-sm mt-4 font-bold">
                        Something went wrong. Please try again.
                    </p>
                )}
            </div>

            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[150%] bg-blue-600 rounded-full blur-[100px]"></div>
            </div>
        </div>
    );
};

export default SubscribeSection;
