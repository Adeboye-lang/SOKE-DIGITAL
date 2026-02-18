import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <img src="/Soke Web Icon.png" alt="SOKE DIGITAL" className="h-10 mb-8" />
                    <div className="text-sm text-blue-200 space-y-4 mb-8">
                        <p>
                            B10 Maj Gen Iliya Street,<br />Abuja, Nigeria
                        </p>
                        <p>
                            <a href="tel:+2349118172903" className="hover:text-white transition-colors">+234 911 817 2903</a>
                        </p>
                        <p>
                            <a href="mailto:clientservice@sokedigital.com.ng" className="hover:text-white transition-colors underline">clientservice@sokedigital.com.ng</a>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/soke-digital-studio-686793364" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://x.com/sokestudio?s=21" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/workwith.soke/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <ul className="space-y-3 text-xs md:text-sm">
                        <li><Link to="/about" className="hover:text-blue-200">About SOKE</Link></li>
                        <li><Link to="/services" className="hover:text-blue-200">Our Services</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-200">Contact Us</Link></li>
                        <li><Link to="/case-studies" className="hover:text-blue-200">Case Studies</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>


                    </ul>
                </div>
                {/* Links Column 2 */}
                <div>
                    <ul className="space-y-3 text-xs md:text-sm">
                        <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
                        <li><Link to="/book-call" className="hover:text-blue-200">Book a call</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
                        <li><Link to="/privacy" className="hover:text-blue-200">Privacy</Link></li>
                        <li><Link to="/terms" className="hover:text-blue-200">Terms</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 border-t border-blue-800 pt-8">
                <div>
                    &copy; 2025 SOKE Digital. All rights reserved.
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
