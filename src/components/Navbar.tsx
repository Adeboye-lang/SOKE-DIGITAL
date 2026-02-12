import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Portfolio', path: '/our-portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-slate-900 shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <Link to="/" className="flex items-center relative z-50">
        <img src="/Soke Web Icon.png" alt="SOKE DIGITAL" className="h-10 md:h-12 w-auto object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-300 items-center">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link>
        <Link to="/about-us" className="hover:text-white transition-colors">About Us</Link>
        <Link to="/our-portfolio" className="hover:text-white transition-colors">Our Portfolio</Link>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>

        <Link to="/contact" className="bg-white text-slate-900 px-6 py-3 text-xs font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-all hover:-translate-y-0.5 ml-4">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white origin-left transition-all"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white transition-all"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white origin-left transition-all"
          ></motion.span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950 z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold text-white uppercase tracking-tight">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 border-b border-slate-800 ${location.pathname === link.path ? 'text-blue-500' : 'text-slate-300'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-900"
            >
              <p className="text-slate-500 text-sm mb-4">Get in touch</p>
              <a href="mailto:clientservice@sokedigital.com.ng" className="block text-lg text-white mb-2">clientservice@sokedigital.com.ng</a>
              <a href="tel:09118172903" className="block text-lg text-white">0911 817 2903</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
