import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import PublicLayout from './layout/PublicLayout';
import ScrollToTop from './components/ScrollToTop';

import { lazy, Suspense } from 'react';

// Pages
const Home = lazy(() => import('./pages/Home'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));
const Services = lazy(() => import('./pages/Services'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const BookCall = lazy(() => import('./pages/BookCall'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Admin
const AdminLogin = lazy(() => import('./pages/admin/Login'));
import AdminLayout from './layout/AdminLayout'; // Layouts are usually kept static
import ProtectedRoute from './components/admin/ProtectedRoute'; // Wrappers kept static
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const PortfolioManager = lazy(() => import('./pages/admin/PortfolioManager'));
const PortfolioEditor = lazy(() => import('./pages/admin/PortfolioEditor'));
const BlogManager = lazy(() => import('./pages/admin/BlogManager'));
const BlogEditor = lazy(() => import('./pages/admin/BlogEditor'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 md:w-16 md:h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

// Subdomain Redirect Component
const SubdomainRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Admin Route Check
    if (pathname.startsWith('/admin') || hostname.startsWith('admin.')) {
      document.title = 'Soke Digital | Admin Portal';
      // Optionally update favicon here if you had a separate admin icon
      // const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      // if (link) link.href = '/admin-icon.png'; 
    } else {
      document.title = 'SOKE DIGITAL';
    }

    // Check if subdomain is 'admin' (e.g., admin.sokedigital.com.ng)
    // If so, redirect to admin login if not already on an admin route
    if (hostname.startsWith('admin.') && !pathname.startsWith('/admin')) {
      navigate('/admin/login');
    }
  }, [navigate]); // No dependency on location.pathname to avoid loop, but might need it for title update on nav

  return null;
};

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Router>
          <SubdomainRedirect />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="portfolio" element={<PortfolioManager />} />
                <Route path="portfolio/new" element={<PortfolioEditor />} />
                <Route path="portfolio/edit/:id" element={<PortfolioEditor />} />
                <Route path="blog" element={<BlogManager />} />
                <Route path="blog/new" element={<BlogEditor />} />
                <Route path="blog/edit/:id" element={<BlogEditor />} />
              </Route>

              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-portfolio" element={<CaseStudies />} />
                <Route path="/our-portfolio/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/book-call" element={<BookCall />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;