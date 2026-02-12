import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

interface Project {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    client?: string;
    description: string;
    content?: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) return;
            try {
                // Check if it's a hardcoded ID first (ura, chef-ima, puradia)
                // Actually, CaseStudies uses dynamic fetching now primarily, but falls back to hardcoded.
                // But for detailed view, we likely only have content for DB items.
                // If the user clicks a hardcoded item, it might not exist in DB unless we seeded it.
                // Assuming we are using DB.

                const docRef = doc(db, 'portfolio', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProject({ id: docSnap.id, ...docSnap.data() } as Project);
                } else {
                    // Fallback for hardcoded items if they are not in DB?
                    // The user said "leave the ones there so normal people can see it".
                    // The ones "there" are hardcoded in CaseStudies.tsx.
                    // If I click them, I need to see something.
                    // I will replicate the hardcoded data here as fallback if DB fails?
                    // Or I should Seed them to DB?
                    // Seeding is better but I can't do it easily without running code.
                    // I'll check hardcoded IDs.

                    const hardcoded = [
                        {
                            id: 'ura',
                            title: 'URA',
                            category: 'Strategy',
                            client: 'Brand Development',
                            imageUrl: '/ura.jpeg',
                            description: 'URA is a tech startup we supported with brand development, digital marketing, organizational structuring, and business strategy to prepare the business for growth.',
                            content: '## Overview\n\nURA is a tech startup we supported with brand development, digital marketing, organizational structuring, and business strategy.\n\n### The Challenge\n\nPreparing the business for scalable growth while establishing a strong market presence.\n\n### Our Solution\n\nWe implemented a comprehensive strategy covering visual identity, market positioning, and operational structure.'
                        },
                        {
                            id: 'chef-ima',
                            title: 'Chef Ima',
                            category: 'Marketing',
                            client: 'Culinary Brand',
                            imageUrl: '/chefima.jpeg',
                            description: 'Chef Ima is a premium culinary brand we supported with brand development, digital marketing campaigns, and event marketing.',
                            content: '## Overview\n\nChef Ima is a premium culinary brand.\n\n### Services\n\n- Brand Development\n- Digital Marketing Campaigns\n- Event Marketing'
                        },
                        {
                            id: 'puradia',
                            title: 'Puradia',
                            category: 'Branding',
                            client: 'Visual Identity',
                            imageUrl: '/puradia.jpeg',
                            description: 'Puradia is a brand we supported with brand development, including brand strategy, visual identity design, and branding asset creation.',
                            content: '## Overview\n\nPuradia required a distinct visual identity.\n\n### Our Approach\n\nWe focused on creating a clean, modern aesthetic that resonates with their target audience.'
                        }
                    ];

                    const found = hardcoded.find(p => p.id === id);
                    if (found) {
                        setProject(found);
                    } else {
                        console.log('No such document!');
                    }
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center flex-col gap-4 text-white">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/our-portfolio" className="text-blue-400 hover:text-blue-300 transition-colors">← Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500 selection:text-white pb-32">
                {/* Header / Hero */}
                <div className="relative h-[70vh] w-full overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" as const }}
                        src={project.imageUrl || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600'}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                    <div className="absolute inset-0 flex items-end">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                            }}
                            className="max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full"
                        >
                            <motion.div variants={fadeInUp}>
                                <Link to="/our-portfolio" className="inline-block text-white/60 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white">
                                    ← Back to Work
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div>
                                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">
                                        <span>{project.category}</span>
                                        {project.client && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                                <span className="text-white/80">{project.client}</span>
                                            </>
                                        )}
                                    </div>
                                    <h1 className="text-5xl md:text-8xl font-bold text-white leading-none">
                                        {project.title}
                                    </h1>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Content Body */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
                    className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        {/* Sidebar / Meta */}
                        <div className="md:col-span-4 space-y-8">
                            <div>
                                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Service</h3>
                                <p className="text-slate-400">{project.category}</p>
                            </div>
                            {project.client && (
                                <div>
                                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Client</h3>
                                    <p className="text-slate-400">{project.client}</p>
                                </div>
                            )}
                            <div>
                                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Description</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-8">
                            <article className="prose prose-lg prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-blue-400 prose-img:rounded-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-blue-100">
                                <ReactMarkdown>{project.content || project.description}</ReactMarkdown>
                            </article>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 md:mt-32 p-8 md:p-12 bg-blue-900/20 rounded-3xl border border-blue-900/50 text-center">
                        <h3 className="text-3xl font-bold text-white mb-6">Inspired by this project?</h3>
                        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Let's collaborate to build something extraordinary for your brand.</p>
                        <Link to="/book-call" className="inline-block bg-white text-blue-950 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105">
                            Start Your Project
                        </Link>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default ProjectDetail;
