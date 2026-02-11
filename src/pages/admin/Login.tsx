import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/admin/dashboard');
        } catch (err: any) {
            console.error("Google Login Failed:", err);
            setError('Failed to sign in with Google.');
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/dashboard');
        } catch (err: any) {
            console.error("Login Failed:", err);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                {/* Blue Blur Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative z-10 border border-slate-100/50">
                    <div className="text-center mb-10">
                        <img src="/Soke Web Icon.png" alt="Soke Digital" className="h-16 mx-auto mb-6" />
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Portal</h1>
                        <p className="text-slate-500 text-sm mt-2">Secure access for Soke Digital staff.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <div className="rounded-lg bg-red-50 p-4 border border-red-100 text-red-600 text-sm font-medium text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="admin@sokedigital.com"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/10 hover:bg-blue-600 hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all text-sm"
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                    </div>
                </div>

                <p className="absolute bottom-8 text-center text-xs text-slate-400 font-medium">
                    &copy; {new Date().getFullYear()} Soke Digital. Authorized personnel only.
                </p>
            </div>
        </PageTransition>
    );
};

export default AdminLogin;
