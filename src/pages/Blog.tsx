import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';
import SEOHead from '../components/SEOHead';

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

// Reusable Card Component - Editorial Style
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
        <m.div variants={fadeInUp} className="group cursor-pointer flex flex-col gap-5" onClick={onReadMore}>
            {/* Image Container with precise aspect ratio and subtle hover zoom */}
            <div className="overflow-hidden aspect-[4/3] w-full bg-slate-100 flex items-center justify-center relative">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #64748b 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                )}
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
            </div>

            {/* Content Container - No background, purely whitespace driven */}
            <div className="flex flex-col gap-3 px-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    <span className="text-blue-600 font-sans">{category}</span>
                    <span className="opacity-50">•</span>
                    <span className="font-sans">{readTime}</span>
                </div>

                {/* Title using Playfair Display */}
                <h3 className="text-2xl font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors duration-300">
                    {title}
                </h3>

                {/* Excerpt using standard readable font */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-sans">
                    {description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2 pt-2 mt-auto">
                    {authorName && <span className="text-xs font-semibold text-slate-900 font-sans uppercase tracking-wider">By {authorName}</span>}
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
    const [activeCategory, setActiveCategory] = useState<string>('All Stories');

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
    // HANDLERS & COMPUTED
    // ---------------------------------------------------------------------------
    const handleReadMore = (postId: string) => {
        navigate(`/blog/${postId}`);
    };

    const categories = ['All Stories', 'Strategy', 'Operations', 'Marketing', 'Technology'];

    // Filter posts
    const filteredPosts = activeCategory === 'All Stories'
        ? posts
        : posts.filter(post => post.category?.toLowerCase() === activeCategory.toLowerCase());

    // Separate Featured (Newest overall) vs Grid Posts 
    // We only show a featured post if 'All Stories' is selected and there is at least 1 post
    const showFeatured = activeCategory === 'All Stories' && posts.length > 0;
    const featuredPost = showFeatured ? posts[0] : null;
    const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;


    return (
        <PageTransition>
            <SEOHead
                title="Insights & Strategies | SOKE DIGITAL Blog"
                description="Read our latest insights, strategies, and case studies on scaling African businesses, building world-class teams, and optimizing operations."
                canonicalUrl="/blog"
            />
            <div className="bg-white pt-24 pb-16 min-h-screen flex flex-col relative font-sans selection:bg-blue-100">

                {/* ---------------------------------------------------------------------------
                   HEADER SECTION
                   --------------------------------------------------------------------------- */}
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="pt-24 pb-12 px-6 md:px-12 border-b border-slate-200"
                >
                    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                        <m.span variants={fadeInUp} className="block text-blue-600 font-bold tracking-widest text-xs uppercase mb-6">The Soke Journal</m.span>
                        <m.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-slate-900 mb-8 tracking-tighter max-w-4xl font-serif">
                            Insights for the <span className="italic font-serif text-slate-600">modern African builder.</span>
                        </m.h1>
                    </div>
                </m.div>

                {/* ---------------------------------------------------------------------------
                   MAIN CONTENT AREA
                   --------------------------------------------------------------------------- */}
                <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-16 w-full min-h-[600px]">

                    {loading ? (
                        <div className="flex justify-center py-32">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-32 px-4 border border-dashed border-slate-200 rounded-3xl bg-slate-50/50 relative overflow-hidden group max-w-4xl mx-auto">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                            <div className="relative z-10 bg-white p-4 rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10 font-serif">Editorial in Progress</h3>
                            <p className="text-slate-500 max-w-md text-center relative z-10 leading-relaxed font-sans">
                                Our team is currently researching and drafting the next set of strategic insights. Check back soon for deep dives into African market dynamics.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* FEATURED ARTICLE HERO (Only on 'All Stories' tab) */}
                            {featuredPost && (
                                <m.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    className="mb-20 group cursor-pointer"
                                    onClick={() => handleReadMore(featuredPost.id)}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                        {/* Large Feature Image */}
                                        <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 relative order-2 lg:order-1">
                                            {featuredPost.imageUrl ? (
                                                <img
                                                    src={featuredPost.imageUrl}
                                                    alt={featuredPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #64748b 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                                            )}
                                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
                                        </div>

                                        {/* Feature Content */}
                                        <div className="flex flex-col gap-6 order-1 lg:order-2 lg:pr-12">
                                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                                                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{featuredPost.category}</span>
                                                <span className="opacity-50">•</span>
                                                <span>{featuredPost.readTime || "5 min read"}</span>
                                            </div>

                                            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-[1.1] group-hover:text-blue-800 transition-colors duration-300">
                                                {featuredPost.title}
                                            </h2>

                                            <p className="text-slate-600 text-lg leading-relaxed font-sans line-clamp-3">
                                                {featuredPost.summary || featuredPost.content.substring(0, 200) + "..."}
                                            </p>

                                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-2">
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">
                                                    {featuredPost.author ? featuredPost.author.charAt(0) : 'S'}
                                                </div>
                                                <div className="flex flex-col">
                                                    {featuredPost.author && <span className="text-sm font-bold text-slate-900">{featuredPost.author}</span>}
                                                    <span className="text-xs text-slate-500">{featuredPost.date || 'Recent'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            )}

                            {/* EDITORIAL GRID + SIDEBAR */}
                            <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 items-start border-t border-slate-200 pt-16">

                                {/* Sticky Sidebar (Desktop) / Horizontal Scroll (Mobile) */}
                                <div className="lg:sticky lg:top-32 w-full pt-2">
                                    <h3 className="hidden lg:block text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Explore Topics</h3>

                                    <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={`whitespace-nowrap flex-shrink-0 text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === cat
                                                        ? 'bg-slate-900 text-white shadow-md'
                                                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Article Grid */}
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-10 pb-4 border-b border-slate-100">
                                        {activeCategory === 'All Stories' && showFeatured ? 'Latest Articles' : activeCategory}
                                    </h3>

                                    {gridPosts.length > 0 ? (
                                        <m.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-100px" }}
                                            variants={staggerContainer}
                                            className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
                                        >
                                            {gridPosts.map(post => (
                                                <ArticleCard
                                                    key={post.id}
                                                    category={post.category || 'Opinion'}
                                                    readTime={post.readTime || "5 min read"}
                                                    title={post.title}
                                                    description={post.summary || post.content.substring(0, 100) + "..."}
                                                    imageSrc={post.imageUrl || ''}
                                                    authorName={post.author}
                                                    onReadMore={() => handleReadMore(post.id)}
                                                />
                                            ))}
                                        </m.div>
                                    ) : (
                                        <div className="py-20 text-center">
                                            <p className="text-slate-500 text-lg">No articles found in this category.</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </>
                    )}

                    {/* ---------------------------------------------------------------------------
                       BOTTOM CTA SECTIONS
                       --------------------------------------------------------------------------- */}
                    <div className="mt-32 border-t border-slate-200 pt-20">
                        <SubscribeSection />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden mt-12">
                            <div className="relative z-10 max-w-2xl">
                                <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Ready to scale your systems?</h3>
                                <p className="text-slate-300 text-lg leading-relaxed font-sans">
                                    Stop guessing. Let's design the strategy and infrastructure that takes your business to the next level of growth.
                                </p>
                            </div>
                            <div className="relative z-10 shrink-0">
                                <Link
                                    to="/book-call"
                                    className="inline-block px-10 py-5 bg-white text-slate-900 font-bold tracking-wide uppercase text-sm rounded-full hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1"
                                >
                                    Book a Discovery Call
                                </Link>
                            </div>

                            {/* Minimalist Graphic */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -translate-x-10 translate-y-10"></div>
                        </div>
                    </div>

                </div>
            </div>
        </PageTransition>
    );
};

export default Blog;
