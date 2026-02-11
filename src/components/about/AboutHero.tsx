import React from 'react';

const AboutHero: React.FC = () => {
    return (
        <section className="relative h-[65vh] min-h-[550px] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-950">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?auto=format&fit=crop&q=80&w=2000"
                    alt="African City Skyline"
                    className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-[2000ms]"
                />

                {/* Premium Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-900"></div>
                <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-5xl mx-auto px-6">
                <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 text-blue-100 shadow-2xl">
                    Our Mission
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-xl">
                    Building the Africa we<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white">believe in.</span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-50/80 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    Empowering visionaries with the digital infrastructure, strategy, and systems to reshape a continent.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
