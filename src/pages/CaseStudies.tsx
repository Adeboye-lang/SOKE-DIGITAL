import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { m } from 'framer-motion';
import PageTransition from '../components/PageTransition';

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    client?: string;
    content?: string;
}

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
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const CaseStudies: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const DEFAULT_PROJECTS: Project[] = [
        {
            id: 'ura',
            title: 'URA',
            category: 'Strategy',
            client: 'Brand Development',
            image: '/ura.jpeg',
            description: 'URA is a tech startup we supported with brand development, digital marketing, organizational structuring, and business strategy to prepare the business for growth.'
        },
        {
            id: 'chef-ima',
            title: 'Chef Ima',
            category: 'Marketing',
            client: 'Culinary Brand',
            image: '/chefima.jpeg',
            description: 'Chef Ima is a premium culinary brand we supported with brand development, digital marketing campaigns, and event marketing.'
        },
        {
            id: 'puradia',
            title: 'Puradia',
            category: 'Branding',
            client: 'Visual Identity',
            image: '/puradia.jpeg',
            description: 'Puradia is a brand we supported with brand development, including brand strategy, visual identity design, and branding asset creation.'
        }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch dynamic projects from 'portfolio' collection
                const q = query(collection(db, "portfolio"));
                const querySnapshot = await getDocs(q);
                const items: Project[] = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Avoid duplicates if a dynamic project has the same ID as a default one (e.g. 'ura')
                    // Logic: Dynamic overrides default if ID matches
                    items.push({
                        id: doc.id,
                        title: data.title,
                        category: data.category,
                        image: data.imageUrl || data.image || 'https://via.placeholder.com/800x600', // Handle naming difference
                        description: data.description,
                        client: data.client,
                        content: data.content
                    } as Project);
                });

                // Merge: Filter out default projects that are already in fetched items (by ID OR Title)
                const fetchedIds = new Set(items.map(p => p.id));
                const fetchedTitles = new Set(items.map(p => p.title.toLowerCase()));

                const uniqueDefaults = DEFAULT_PROJECTS.filter(p =>
                    !fetchedIds.has(p.id) &&
                    !fetchedTitles.has(p.title.toLowerCase())
                );

                // Combine: Dynamic first, then hardcoded
                setProjects([...items, ...uniqueDefaults]);

            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects(DEFAULT_PROJECTS);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <PageTransition>
            <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">

                {/* HERO SECTION */}
                <section className="relative px-6 py-32 md:py-48 max-w-7xl mx-auto flex flex-col justify-end min-h-[50vh]">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <m.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="relative z-10"
                    >
                        <m.h1
                            variants={fadeInUp}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none"
                        >
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Works.</span>
                        </m.h1>
                        <m.p
                            variants={fadeInUp}
                            className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light border-l border-slate-800 pl-6"
                        >
                            We don't just design brands; we engineer growth. <br className="hidden md:block" />
                            Explore how we've helped ambitious African founders scale.
                        </m.p>
                    </m.div>
                </section>

                {/* PROJECT GRID */}
                <section className="px-4 pb-32">
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center py-32 border border-dashed border-slate-800 rounded-3xl mx-auto max-w-4xl">
                            <p className="text-slate-500 mb-4">No case studies published yet.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-24 max-w-[1600px] mx-auto">
                            {projects.map((project, index) => (
                                <m.div
                                    key={project.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                    className={`group flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-[4/3] w-full overflow-hidden rounded-md relative cursor-pointer">
                                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] scale-105 group-hover:scale-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2 px-4 md:px-0">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className="h-px w-8 bg-blue-500"></span>
                                                <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">{project.category}</span>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>

                                            {project.client && (
                                                <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-4">{project.client}</p>
                                            )}

                                            <p className="text-slate-400 text-lg leading-relaxed max-w-md line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="pt-6">
                                                <Link to={`/our-portfolio/${project.id}`} className="inline-flex items-center gap-3 text-white border-b border-transparent hover:border-blue-50 pb-1 transition-all text-sm font-bold uppercase tracking-widest group/btn">
                                                    View Case Study
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA SECTION */}
                <section className="py-32 bg-blue-950 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto px-6 text-center relative z-10"
                    >
                        <m.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Ready to be our next <br />success story?
                        </m.h2>
                        <m.p variants={fadeInUp} className="text-blue-200 text-xl mb-12 max-w-xl mx-auto font-light">
                            We only partner with founders ready to scale. If that's you, let's talk.
                        </m.p>
                        <m.div variants={fadeInUp}>
                            <Link to="/book-call" className="inline-block bg-white text-blue-950 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl shadow-blue-900/50">
                                Start Your Project
                            </Link>
                        </m.div>
                    </m.div>
                </section>
            </div>
        </PageTransition>
    );
};

export default CaseStudies;
