import React from 'react';

const VisionCards: React.FC = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-900 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-4">
                    Our Vision
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Thriving African <span className="text-blue-900">Entrepreneurs</span>
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                    We see a future where African businesses are global leaders, built on solid foundations and sustainable practices.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Build Card */}
                <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl cursor-default transition-all duration-500 hover:shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                        alt="Work in Africa"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-blue-500 mb-6 w-0 group-hover:w-12 transition-all duration-700 delay-100"></div>
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight drop-shadow-lg">Work and build<br />in Africa</h3>
                            <p className="text-blue-100/90 text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                Create value locally that resonates globally. We bridge the gap between potential and performance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintain Card */}
                <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl cursor-default transition-all duration-500 hover:shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1581092291017-f77519191a6e?auto=format&fit=crop&q=80&w=800"
                        alt="Sustainable Agriculture"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-emerald-500 mb-6 w-0 group-hover:w-12 transition-all duration-700 delay-100"></div>
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight drop-shadow-lg">Sustainable businesses<br />that matter</h3>
                            <p className="text-blue-100/90 text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                Longevity over quick wins. Structure over chaos. Building distinct value for generations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionCards;
