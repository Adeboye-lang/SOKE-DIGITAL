import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';

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
                <div className="relative h-[60vh] w-full overflow-hidden bg-slate-900">
                    {post.imageUrl ? (
                        <m.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 10, ease: "easeOut" as const }}
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                    )}
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
                    <article className="max-w-none">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-12 font-['Inter'] pb-8 border-b border-slate-100">
                            <span className="uppercase tracking-widest font-bold text-blue-900">{post.category || 'Insight'}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{post.date?.seconds ? new Date(post.date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : (post.date || 'Recently published')}</span>
                        </div>

                        <ReactMarkdown
                            components={{
                                h1: ({ node, ...props }) => <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-slate-900 mt-16 mb-8 leading-tight" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug" {...props} />,
                                p: ({ node, ...props }) => <p className="font-['Merriweather'] text-lg md:text-xl text-slate-700 leading-loose mb-8 font-light" {...props} />,
                                ul: ({ node, ...props }) => <ul className="font-['Merriweather'] list-disc list-outside ml-6 mb-8 text-lg text-slate-700 space-y-3 leading-relaxed" {...props} />,
                                ol: ({ node, ...props }) => <ol className="font-['Merriweather'] list-decimal list-outside ml-6 mb-8 text-lg text-slate-700 space-y-3 leading-relaxed" {...props} />,
                                li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                                blockquote: ({ node, ...props }) => (
                                    <blockquote className="font-['Playfair_Display'] border-l-4 border-blue-900 pl-6 my-10 text-2xl md:text-3xl italic text-slate-800 leading-relaxed" {...props} />
                                ),
                                a: ({ node, ...props }) => <a className="text-blue-700 hover:text-blue-900 underline decoration-blue-200 hover:decoration-blue-900 underline-offset-4 transition-all" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </article>

                    <div className="mt-20 pt-10 border-t border-slate-100">
                        {/* 1. Subscribe Section */}
                        <SubscribeSection />

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
