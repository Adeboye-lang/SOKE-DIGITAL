import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, deleteDoc, doc, addDoc, type QuerySnapshot, type DocumentData } from 'firebase/firestore';
import { db } from '../../firebase';
import { DEFAULT_PROJECTS } from '../../utils/seedData';

interface Project {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
}

const PortfolioManager: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [seeding, setSeeding] = useState(false);

    useEffect(() => {
        // Real-time listener for portfolio collection
        const unsubscribe = onSnapshot(collection(db, 'portfolio'), (snapshot: QuerySnapshot<DocumentData>) => {
            const projectsData: Project[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Project));
            setProjects(projectsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteDoc(doc(db, 'portfolio', id));
            } catch (error) {
                console.error("Error deleting document: ", error);
                alert("Failed to delete project.");
            }
        }
    };

    const handleSeed = async () => {
        if (!window.confirm("Import demo projects to database?")) return;
        setSeeding(true);
        try {
            const projectPromises = DEFAULT_PROJECTS.map(p => addDoc(collection(db, "portfolio"), {
                ...p,
                createdAt: new Date()
            }));
            await Promise.all(projectPromises);
            alert("Demo projects imported!");
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
                    <h1 className="text-3xl font-bold text-slate-900">Portfolio</h1>
                    <p className="text-slate-500 mt-1">Manage your case studies and project showcases.</p>
                </div>
                <Link
                    to="/admin/portfolio/new"
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                    <span>+</span> New Project
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {projects.length === 0 ? (
                    <div className="p-12 text-center text-slate-500">
                        <p className="mb-4 text-lg">No projects found.</p>
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <Link to="/admin/portfolio/new" className="text-blue-600 font-bold hover:underline">Create your first project</Link>
                            <span className="text-xs">or</span>
                            <button
                                onClick={handleSeed}
                                disabled={seeding}
                                className="text-sm font-semibold text-slate-400 hover:text-blue-600 disabled:opacity-50"
                            >
                                {seeding ? 'Importing...' : 'Import Demo Projects'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <th className="p-4 w-24">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-4">
                                        <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                            {project.imageUrl ? (
                                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs">No Img</div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-slate-900">{project.title}</td>
                                    <td className="p-4 text-slate-500 text-sm">{project.category}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link
                                            to={`/admin/portfolio/edit/${project.id}`}
                                            className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project.id)}
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

export default PortfolioManager;
