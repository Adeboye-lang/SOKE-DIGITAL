import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, deleteDoc, doc, addDoc, type QuerySnapshot, type DocumentData } from 'firebase/firestore';
import { db } from '../../firebase';
import { DEFAULT_POSTS } from '../../utils/seedData';

interface BlogPost {
    id: string;
    title: string;
    category: string;
    author: string;
    date: any; // Timestamp or string
}

const BlogManager: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [seeding, setSeeding] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'blog_posts'), (snapshot: QuerySnapshot<DocumentData>) => {
            const postsData: BlogPost[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as BlogPost));
            setPosts(postsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteDoc(doc(db, 'blog_posts', id));
            } catch (error) {
                console.error("Error deleting post: ", error);
                alert("Failed to delete post.");
            }
        }
    };

    const handleSeed = async () => {
        if (!window.confirm("Import demo articles to database?")) return;
        setSeeding(true);
        try {
            const postPromises = DEFAULT_POSTS.map(p => addDoc(collection(db, "blog_posts"), {
                ...p,
                createdAt: new Date()
            }));
            await Promise.all(postPromises);
            alert("Demo articles imported!");
        } catch (error) {
            console.error("Seeding failed:", error);
            alert("Failed to import.");
        } finally {
            setSeeding(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Blog Posts</h1>
                    <p className="text-slate-500 mt-1">Manage your articles and insights.</p>
                </div>
                <Link
                    to="/admin/blog/new"
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                    <span>+</span> New Post
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {posts.length === 0 ? (
                    <div className="p-12 text-center text-slate-500">
                        <p className="mb-4 text-lg">No posts found.</p>
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <Link to="/admin/blog/new" className="text-blue-600 font-bold hover:underline">Write your first article</Link>
                            <span className="text-xs">or</span>
                            <button
                                onClick={handleSeed}
                                disabled={seeding}
                                className="text-sm font-semibold text-slate-400 hover:text-blue-600 disabled:opacity-50"
                            >
                                {seeding ? 'Importing...' : 'Import Demo Articles'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Author</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {posts.map((post) => (
                                <tr key={post.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-4 font-bold text-slate-900">{post.title}</td>
                                    <td className="p-4 text-slate-500 text-sm">{post.category}</td>
                                    <td className="p-4 text-slate-500 text-sm">{post.author}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link
                                            to={`/admin/blog/edit/${post.id}`}
                                            className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="inline-block px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BlogManager;
