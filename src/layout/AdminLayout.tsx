import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import PageTransition from '../components/PageTransition';

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin/login');
    };

    const getPageTitle = () => {
        const path = location.pathname;
        if (path.includes('dashboard')) return 'Dashboard';
        if (path.includes('portfolio')) return 'Portfolio Manager';
        if (path.includes('blog')) return 'Editorial Manager';
        return 'Admin';
    };

    // Sidebar navigation items
    const navItems = [
        { path: "/admin/dashboard", icon: "📊", label: "Dashboard" },
        { path: "/admin/portfolio", icon: "💼", label: "Portfolio" },
        { path: "/admin/blog", icon: "📝", label: "Insights / Blog" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-blue-100">
            {/* Sidebar */}
            <aside className="w-72 bg-slate-900 text-white flex flex-col fixed h-full z-20 shadow-2xl shadow-slate-900/50">
                {/* Brand Header */}
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <img src="/Soke Web Icon.png" alt="Soke" className="h-8 w-auto" />
                        <div>
                            <h1 className="text-sm font-bold tracking-widest uppercase">Soke Digital</h1>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Control Center</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-8 space-y-1">
                    <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>

                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="text-lg opacity-80 group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="font-medium text-sm">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* User / Logout */}
                <div className="p-4 border-t border-white/5 bg-slate-950/30">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold shadow-lg">
                            SD
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-white">Admin User</p>
                            <p className="text-xs text-slate-500 truncate w-32">admin@sokedigital.com</p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-xs font-bold uppercase tracking-wider"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 ml-72 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="bg-white border-b border-slate-100 h-16 sticky top-0 z-10 px-8 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800">{getPageTitle()}</h2>
                    <div className="flex items-center gap-4">
                        <a href="/" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
                            View Live Site <span>↗</span>
                        </a>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-auto">
                    <div className="max-w-6xl mx-auto">
                        {/* 
                            We key the PageTransition by location.pathname so that 
                            switching routes triggers the exit/enter animations. 
                        */}
                        <PageTransition key={location.pathname}>
                            <Outlet />
                        </PageTransition>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
