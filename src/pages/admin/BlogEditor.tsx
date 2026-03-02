import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

const BlogEditor: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [readTime, setReadTime] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (isEditing && id) {
                setIsLoading(true);
                try {
                    const docRef = doc(db, 'blog_posts', id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setTitle(data.title || '');
                        setCategory(data.category || '');
                        setSummary(data.summary || '');
                        setContent(data.content || '');
                        setAuthor(data.author || '');
                        setReadTime(data.readTime || '');
                        setImageUrl(data.imageUrl || '');
                        setPreviewUrl(data.imageUrl || '');
                    } else {
                        alert('Post not found!');
                        navigate('/admin/blog');
                    }
                } catch (error) {
                    console.error("Error fetching post:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [id, isEditing, navigate]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            let finalImageUrl = imageUrl;

            if (imageFile) {
                const storageRef = ref(storage, `blog/${Date.now()}_${imageFile.name}`);
                const snapshot = await uploadBytes(storageRef, imageFile);
                finalImageUrl = await getDownloadURL(snapshot.ref);
            }

            const postData = {
                title,
                category,
                summary,
                content,
                author,
                readTime,
                imageUrl: finalImageUrl,
                updatedAt: new Date(),
            };

            if (isEditing && id) {
                await updateDoc(doc(db, 'blog_posts', id), postData);
            } else {
                await addDoc(collection(db, 'blog_posts'), {
                    ...postData,
                    createdAt: new Date(),
                    date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                });
            }

            navigate('/admin/blog');
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Failed to save post.");
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
                <button onClick={() => navigate('/admin/blog')} className="text-slate-500 hover:text-blue-600 transition-colors">
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-slate-900">
                    {isEditing ? 'Edit Article' : 'New Article'}
                </h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="blog-title" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Article Title</label>
                            <input
                                id="blog-title"
                                required
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. The Future of African Tech"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="blog-category" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Category</label>
                            <input
                                id="blog-category"
                                required
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. Strategy, Insights"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="blog-author" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Author Name</label>
                            <input
                                id="blog-author"
                                required
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. Terdo Tsumba"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="blog-readtime" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Read Time</label>
                            <input
                                id="blog-readtime"
                                required
                                type="text"
                                value={readTime}
                                onChange={(e) => setReadTime(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. 5 min read"
                            />
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                        <label htmlFor="blog-summary" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Short Summary</label>
                        <textarea
                            id="blog-summary"
                            rows={3}
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                            placeholder="A brief teaser for the blog card..."
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <label htmlFor="blog-content" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Content</label>
                        <textarea
                            id="blog-content"
                            required
                            rows={12}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono text-sm leading-relaxed"
                            placeholder="Write your article here using Markdown or HTML..."
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
                                        <p className="text-sm">No image selected</p>
                                    </div>
                                )}
                                <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white font-bold text-sm">
                                    Change Image
                                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Publishing...' : 'Publish Article'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogEditor;
