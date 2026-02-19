import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getCountFromServer, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { DEFAULT_POSTS, DEFAULT_PROJECTS } from '../../utils/seedData';

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState({ portfolio: 0, blog: 0 });
    const [recentItems, setRecentItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [seeding, setSeeding] = useState(false);

    // Dynamic Greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    const fetchStats = async () => {
        try {
            // Stats
            const pColl = collection(db, "portfolio");
            const bColl = collection(db, "blog_posts");
            const pSnap = await getCountFromServer(pColl);
            const bSnap = await getCountFromServer(bColl);

            // Recent Activity (Fetch last 3 blog posts for now, or combine)
            const recentQuery = query(bColl, orderBy('createdAt', 'desc'), limit(3));
            const recentSnap = await getDocs(recentQuery);
            const recentdata = recentSnap.docs.map(d => ({ id: d.id, ...d.data(), type: 'Article' }));

            setStats({
                portfolio: pSnap.data().count,
                blog: bSnap.data().count
            });
            setRecentItems(recentdata);
        } catch (e) {
            console.log("Error fetching counts", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const handleSeed = async () => {
        if (!window.confirm("This will add demo content to your database. Continue?")) return;
        setSeeding(true);
        try {
            if (stats.portfolio === 0) {
                const projectPromises = DEFAULT_PROJECTS.map(p => addDoc(collection(db, "portfolio"), { ...p, createdAt: new Date() }));
                await Promise.all(projectPromises);
            }
            if (stats.blog === 0) {
                const blogPromises = DEFAULT_POSTS.map(p => addDoc(collection(db, "blog_posts"), { ...p, createdAt: new Date() }));
                await Promise.all(blogPromises);
            }
            await fetchStats();
            alert("Database seeded successfully!");
        } catch (error) {
            console.error("Seeding failed:", error);
            alert("Failed to seed database.");
        } finally {
            setSeeding(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) return;

        try {
            await deleteDoc(doc(db, "blog_posts", id));

            // Update local state
            setRecentItems(prev => prev.filter(item => item.id !== id));
            setStats(prev => ({ ...prev, blog: prev.blog - 1 }));

            alert("Post deleted successfully.");
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post.");
        }
    };

    const handleExportLeads = async () => {
        if (!window.confirm("Download all leads as CSV?")) return;

        try {
            const querySnapshot = await getDocs(collection(db, "leads"));
            if (querySnapshot.empty) {
                alert("No leads found to export.");
                return;
            }

            // Define CSV headers
            const headers = ["Name", "Email", "Role", "Date", "Source"];

            // Map data to CSV rows
            const rows = querySnapshot.docs.map(doc => {
                const data = doc.data();
                const date = data.date?.toDate ? data.date.toDate().toLocaleDateString() : 'N/A';

                // Escape fields associated with CSV format (like commas)
                const escape = (str: string) => `"${String(str || '').replace(/"/g, '""')}"`;

                return [
                    escape(data.name),
                    escape(data.email),
                    escape(data.role),
                    escape(date),
                    escape(data.source)
                ].join(",");
            });

            // Combine headers and rows
            const csvContent = [headers.join(","), ...rows].join("\n");

            // Create download link
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", `soke_leads_export_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Error exporting leads:", error);
            alert("Failed to export leads. Check console for details.");
        }
    };

    const handleExportSubscribers = async () => {
        if (!window.confirm("Download all subscribers as CSV?")) return;

        try {
            const querySnapshot = await getDocs(collection(db, "subscribers"));
            if (querySnapshot.empty) {
                alert("No subscribers found to export.");
                return;
            }

            const headers = ["Email", "Signed Up At"];
            const rows = querySnapshot.docs.map(doc => {
                const data = doc.data();
                const date = data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString() : 'N/A';
                return [`"${data.email}"`, `"${date}"`].join(",");
            });

            const csvContent = [headers.join(","), ...rows].join("\n");
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", `soke_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Error exporting subscribers:", error);
            alert("Failed to export subscribers.");
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* 1. Header Section with Gradient Card */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/10">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>

                <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            System Operational
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{getGreeting()}, Admin.</h1>
                        <p className="text-slate-300 max-w-lg">
                            Ready to manage your global presence? active {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleExportLeads}
                            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 font-bold text-sm transition-colors flex items-center gap-2"
                        >
                            <span>📥</span> Export Leads
                        </button>
                        <button
                            onClick={handleExportSubscribers}
                            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 font-bold text-sm transition-colors flex items-center gap-2"
                        >
                            <span>📬</span> Export Subs
                        </button>
                        {(stats.portfolio === 0 || stats.blog === 0) && !loading && (
                            <button
                                onClick={handleSeed}
                                disabled={seeding}
                                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm transition-colors shadow-lg shadow-blue-900/20"
                            >
                                {seeding ? 'Seeding...' : '⚡️ Setup Demo Data'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Portfolio Stat */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">LIVE</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Portfolio Projects</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{loading ? '...' : stats.portfolio}</h3>
                    </div>
                    <Link to="/admin/portfolio" className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Manage Projects →
                    </Link>
                </div>

                {/* Blog Stat */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-purple-200 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">LIVE</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Published Insights</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{loading ? '...' : stats.blog}</h3>
                    </div>
                    <Link to="/admin/blog" className="mt-4 text-sm font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1">
                        Manage Articles →
                    </Link>
                </div>

                {/* Quick Action Card (New) */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center gap-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Create New</p>
                    <Link to="/admin/portfolio/new" className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group">
                        <span className="font-bold text-slate-700">Project Case Study</span>
                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-blue-600">+</span>
                    </Link>
                    <Link to="/admin/blog/new" className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group">
                        <span className="font-bold text-slate-700">Insight Article</span>
                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-purple-600">+</span>
                    </Link>
                </div>
            </div>

            {/* 3. Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
                        <Link to="/admin/blog" className="text-sm font-bold text-blue-600 hover:underline">View All</Link>
                    </div>

                    <div className="space-y-4">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-16 bg-slate-50 rounded-xl w-full"></div>
                                <div className="h-16 bg-slate-50 rounded-xl w-full"></div>
                            </div>
                        ) : recentItems.length > 0 ? (
                            recentItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group relative">
                                    {/* Main Clickable Area */}
                                    <div
                                        role="button"
                                        tabIndex={0}
                                        className="absolute inset-0 cursor-pointer z-0"
                                        onClick={() => window.location.href = `/admin/blog/edit/${item.id}`}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = `/admin/blog/edit/${item.id}`; } }}
                                    ></div>

                                    <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0 relative z-10 pointer-events-none">
                                        {item.imageUrl && <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />}
                                    </div>
                                    <div className="flex-1 relative z-10 pointer-events-none">
                                        <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                        <p className="text-xs text-slate-500">
                                            {item.category} • Posted by {item.author || 'Admin'}
                                        </p>
                                    </div>
                                    <div className="text-right flex items-center gap-4 relative z-10">
                                        <span className="text-xs font-medium text-slate-400 pointer-events-none">
                                            {item.createdAt?.toDate ? item.createdAt.toDate().toLocaleDateString() : 'Recently'}
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(item.id);
                                            }}
                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            title="Delete Post"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                                No recent activity found.
                            </div>
                        )}
                    </div>
                </div>

                {/* Side Panel: Tips or Status */}
                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }}></div>
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-4">Soke Tips</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <h4 className="font-bold text-sm">Visual Consistency</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        Ensure all portfolio cover images use the same aspect ratio (16:9 recommended) for a perfect grid alignment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <h4 className="font-bold text-sm">SEO Tags</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        Use descriptive titles for your blog posts. They become the page title and URL slug automatically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
