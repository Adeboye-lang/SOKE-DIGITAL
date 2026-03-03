import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const PortfolioEditor: React.FC = () => {
    const { id } = useParams(); // If ID exists, we are editing
    const navigate = useNavigate();
    const isEditing = !!id;

    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [client, setClient] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Fetch existing data if editing
    useEffect(() => {
        const fetchData = async () => {
            if (isEditing && id) {
                setIsLoading(true);
                try {
                    const docRef = doc(db, 'portfolio', id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setTitle(data.title || '');
                        setCategory(data.category || '');
                        setClient(data.client || '');
                        setDescription(data.description || '');
                        setImageUrl(data.imageUrl || '');
                        setPreviewUrl(data.imageUrl || '');
                        setContent(data.content || '');
                    } else {
                        alert('Project not found!');
                        navigate('/admin/portfolio');
                    }
                } catch (error) {
                    console.error("Error fetching project:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [id, isEditing, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const projectData = {
                title,
                category,
                client,
                description,
                content,
                imageUrl: imageUrl,
                updatedAt: new Date(),
            };

            if (isEditing && id) {
                // Update existing
                await updateDoc(doc(db, 'portfolio', id), projectData);
            } else {
                // Create new
                await addDoc(collection(db, 'portfolio'), {
                    ...projectData,
                    createdAt: new Date(),
                });
            }

            navigate('/admin/portfolio');
        } catch (error) {
            console.error("Error saving project:", error);
            alert("Failed to save project. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/admin/portfolio')} className="text-slate-500 hover:text-blue-600 transition-colors">
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-slate-900">
                    {isEditing ? 'Edit Project' : 'New Project'}
                </h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="portfolio-title" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Title</label>
                            <input
                                id="portfolio-title"
                                required
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. Ura Financial"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="portfolio-category" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Category</label>
                            <input
                                id="portfolio-category"
                                required
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. Fintech, Branding"
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="portfolio-client" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Client / Sub-Category (Optional)</label>
                            <input
                                id="portfolio-client"
                                type="text"
                                value={client}
                                onChange={(e) => setClient(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. Brand Development"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label htmlFor="portfolio-description" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Short Description</label>
                        <textarea
                            id="portfolio-description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                            placeholder="Brief overview of the project and impact..."
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Cover Image</span>

                        <div className="flex items-start gap-8">
                            <div className="w-64 h-48 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden relative group">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center text-slate-400 p-4">
                                        <p className="text-sm">No image provided</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-4">
                                <p className="text-sm text-slate-500">
                                    Paste a high-quality image URL for the project cover.
                                    You can use hosted image links (like from Unsplash or Imgur) or local paths (like `/portfolio1.jpg`).
                                </p>
                                <div className="pt-2">
                                    <label htmlFor="portfolio-image-url" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Image URL (Required)</label>
                                    <input
                                        id="portfolio-image-url"
                                        type="text"
                                        required
                                        value={imageUrl}
                                        onChange={(e) => {
                                            setImageUrl(e.target.value);
                                            setPreviewUrl(e.target.value);
                                        }}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                        placeholder="https://... or /path/to/image.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content (Markdown) */}
                    <div className="space-y-2">
                        <label htmlFor="portfolio-content" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Case Study (Markdown)</label>
                        <p className="text-xs text-slate-500">You can use Markdown for formatting (e.g., # for headers, ** for bold, - for lists).</p>
                        <textarea
                            id="portfolio-content"
                            rows={15}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono text-sm"
                            placeholder="# Project Overview...&#10;&#10;## Challenge...&#10;&#10;## Solution..."
                        />
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Saving...' : 'Save Project'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PortfolioEditor;
