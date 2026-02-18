import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import PublicLayout from './layout/PublicLayout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import HowWeWork from './pages/HowWeWork';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BookCall from './pages/BookCall';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Admin
import AdminLogin from './pages/admin/Login';
import AdminLayout from './layout/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminDashboard from './pages/admin/Dashboard';
import PortfolioManager from './pages/admin/PortfolioManager';
import PortfolioEditor from './pages/admin/PortfolioEditor';
import BlogManager from './pages/admin/BlogManager';
import BlogEditor from './pages/admin/BlogEditor';
import ProjectDetail from './pages/ProjectDetail';

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
    </Router>
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;