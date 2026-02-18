import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// Note: Navbar is rendered in App.tsx layout for public pages, so we only need the content here.

interface BlogPost {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    readTime: string; // "5 min read"
    author?: string;
    date: any;
    content: string;
    summary?: string; // Derived from content if missing
}

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
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Reusable Card Component - Modern Minimalist
const ArticleCard: React.FC<{
    category: string;
    readTime: string;
    title: string;
    description: string;
    imageSrc: string;
    authorName?: string;
    onReadMore: () => void;
}> = ({ category, readTime, title, description, imageSrc, authorName, onReadMore }) => {
    return (
        <m.div variants={fadeInUp} className="group cursor-pointer flex flex-col gap-4" onClick={onReadMore}>
            <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span className="text-blue-600">{category}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-900 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center gap-2 pt-1">
                    {authorName && <span className="text-xs font-semibold text-slate-900">By {authorName}</span>}
                </div>
            </div>
        </m.div>
    );
};

const Blog: React.FC = () => {
    const navigate = useNavigate();
    // ---------------------------------------------------------------------------
    // STATE: Posts & Loading
    // ---------------------------------------------------------------------------
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, 'blog_posts'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const fetchedPosts: BlogPost[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as BlogPost));
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // ---------------------------------------------------------------------------
    // STATE: Gating Logic (Lead Capture)
    // ---------------------------------------------------------------------------
    const [isRegistered, setIsRegistered] = useState(() => {
        return localStorage.getItem('soke_blog_registered') === 'true';
    });

    const [gateData, setGateData] = useState({ name: '', email: '', role: '' });
    const [submittingGate, setSubmittingGate] = useState(false);

    // ---------------------------------------------------------------------------
    // HANDLERS
    // ---------------------------------------------------------------------------
    const handleGateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittingGate(true);
        try {
            await addDoc(collection(db, "leads"), {
                ...gateData,
                date: new Date(),
                source: 'blog_gate'
            });
            localStorage.setItem('soke_blog_registered', 'true');
            setIsRegistered(true);
        } catch (error) {
            console.error("Error saving lead:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmittingGate(false);
        }
    };

    const handleReadMore = (postId: string) => {
        navigate(`/blog/${postId}`);
    };

    if (!isRegistered) {
        return (
            <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
                <m.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full"
                >
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            Soke Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            Unlock Strategic Intelligence.
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Join 5,000+ African founders accessing our premium operational frameworks and market analysis.
                        </p>
                    </div>

                    <form onSubmit={handleGateSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="gate-name" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                            <input
                                id="gate-name"
                                required
                                value={gateData.name}
                                onChange={e => setGateData({ ...gateData, name: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="e.g. Adeboye Bello"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="gate-email" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Work Email</label>
                            <input
                                id="gate-email"
                                required
                                type="email"
                                value={gateData.email}
                                onChange={e => setGateData({ ...gateData, email: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="gate-role" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Role / Interest</label>
                            <input
                                id="gate-role"
                                required
                                value={gateData.role}
                                onChange={e => setGateData({ ...gateData, role: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="e.g. Founder, Investor"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submittingGate}
                            className="w-full bg-white text-slate-950 font-bold py-4 rounded-lg hover:bg-slate-100 transition-all hover:scale-[1.01] active:scale-[0.99] mt-4 shadow-xl shadow-white/5"
                        >
                            {submittingGate ? 'Unlocking Access...' : 'Read Articles'}
                        </button>

                        <p className="text-center text-[10px] text-slate-600 mt-6">
                            Professional insights for professional builders. No spam.
                        </p>
                    </form>
                </m.div>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="bg-white min-h-screen relative font-sans selection:bg-blue-100">

                {/* ---------------------------------------------------------------------------
                   MAIN CONTENT
                   --------------------------------------------------------------------------- */}

                {/* Header / Hero */}
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="pt-32 pb-16 px-6 md:px-12 border-b border-slate-100"
                >
                    <div className="max-w-7xl mx-auto">
                        <m.span variants={fadeInUp} className="block text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">The Soke Journal</m.span>
                        <m.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter max-w-4xl">
                            Insights for the <br className="hidden md:block" />
                            <span className="italic font-serif text-slate-600">modern African builder.</span>
                        </m.h1>

                        {/* Categories */}
                        <m.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                            <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">All Stories</button>
                            <button className="px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">Strategy</button>
                            <button className="px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">Operations</button>
                            <button className="px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">Marketing</button>
                            <button className="px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">Technology</button>
                        </m.div>
                    </div>
                </m.div>

                {/* Content Area */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-[600px]">

                    {/* Featured / Grid */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
                        </div>
                    ) : posts.length > 0 ? (
                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                        >
                            {posts.map(post => (
                                <ArticleCard
                                    key={post.id}
                                    category={post.category || 'Opinion'}
                                    readTime={post.readTime || "5 min read"}
                                    title={post.title}
                                    description={post.summary || post.content.substring(0, 100) + "..."}
                                    imageSrc={post.imageUrl || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000'}
                                    authorName={post.author}
                                    onReadMore={() => handleReadMore(post.id)}
                                />
                            ))}
                        </m.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 px-4 border border-dashed border-slate-200 rounded-3xl bg-slate-50/50 relative overflow-hidden group">
                            {/* Subtle Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                            <div className="relative z-10 bg-white p-4 rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Editorial in Progress</h3>
                            <p className="text-slate-500 max-w-md text-center relative z-10 leading-relaxed">
                                Our team is currently researching and drafting the next set of strategic insights. Check back soon for deep dives into African market dynamics.
                            </p>
                        </div>
                    )}


                </div>
            </div>
        </PageTransition>
    );
};

export default Blog;
