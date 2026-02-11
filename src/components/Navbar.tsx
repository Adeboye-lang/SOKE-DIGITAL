import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-slate-900 shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        {/* Updated to use white logo */}
        <img src="/Soke Web Icon.png" alt="SOKE DIGITAL" className="h-10 md:h-12 w-auto object-contain" />
      </Link>

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

      {/* Mobile Menu Icon (Placeholder for now if needed, or just keep hidden on small) */}
      <div className="md:hidden">
        <Link to="/contact" className="text-blue-900 font-bold text-sm">Menu</Link>
      </div>
    </nav>
  );
};

export default Navbar;
