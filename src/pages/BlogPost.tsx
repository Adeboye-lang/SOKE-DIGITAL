import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';

interface BlogPost {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    readTime: string;
    author?: string;
    date: any;
    content: string;
    summary?: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            try {
                const docRef = doc(db, 'blog_posts', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center flex-col gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
                <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-white font-sans selection:bg-blue-100 pb-32">
                {/* Header / Hero */}
                <div className="relative h-[60vh] w-full overflow-hidden">
                    <m.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" as const }}
                        src={post.imageUrl || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600'}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                    <div className="absolute inset-0 flex items-end">
                        <m.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                            }}
                            className="max-w-4xl mx-auto px-6 md:px-12 pb-24 w-full"
                        >
                            <m.div variants={fadeInUp}>
                                <Link to="/blog" className="inline-block text-white/80 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
                                    ← Back to Insights
                                </Link>
                            </m.div>

                            <m.div variants={fadeInUp} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
                                <span>{post.category || 'Opinion'}</span>
                                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                <span className="text-white/80">{post.readTime || '5 min read'}</span>
                            </m.div>

                            <m.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                {post.title}
                            </m.h1>

                            <m.div variants={fadeInUp} className="flex items-center gap-4">
                                {post.author && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">{post.author}</p>
                                            <p className="text-white/50 text-xs">Author</p>
                                        </div>
                                    </div>
                                )}
                            </m.div>
                        </m.div>
                    </div>
                </div>

                {/* Content Body */}
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
                    className="max-w-3xl mx-auto px-6 md:px-12 py-20"
                >
                    <article className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-img:rounded-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-700">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </article>

                    <div className="mt-20 pt-10 border-t border-slate-100">
                        {/* 1. Subscribe Section */}
                        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 mb-12 text-center border border-slate-100">
                            <span className="text-2xl mb-4 block">📩</span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                Built for founders building in Nigeria.
                            </h3>
                            <p className="text-slate-600 mb-6 max-w-md mx-auto">
                                Get insights like this in your inbox. No fluff, just scalable strategies.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                                />
                                <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* 2. Book Call CTA */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-blue-900/20">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to scale your systems?</h3>
                                <p className="text-blue-100 max-w-lg">
                                    Stop guessing. Let's design the strategy that takes you to the next level.
                                </p>
                            </div>
                            <Link
                                to="/book-call"
                                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
                            >
                                Book a Discovery Call
                            </Link>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-3">Share:</h4>
                            <button onClick={() => navigator.share({ title: post.title, url: window.location.href })} className="px-5 py-2 bg-slate-100 rounded-full text-slate-700 font-bold hover:bg-slate-200 transition-colors text-sm">
                                Share Article
                            </button>
                        </div>
                    </div>
                </m.div>
            </div>
        </PageTransition>
    );
};

export default BlogPost;
