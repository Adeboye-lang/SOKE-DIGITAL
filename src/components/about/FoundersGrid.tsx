import React from 'react';

const FoundersGrid: React.FC = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-900 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-4">
                    Ideal Partners
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    The <span className="text-blue-900">Founders</span> We Partner With
                </h2>
                <p className="mt-6 text-gray-600 font-light text-lg">
                    We don't work with everyone. We work with visionaries who understand that great things take time, structure, and strategy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Founders Card 1 */}
                <div className="group relative h-[550px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none"></div>

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                        alt="Founders with traction"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block py-1 px-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-4 rounded-lg">Growth Stage</span>
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">Founders with traction<br />looking to <span className="text-blue-200">scale</span></h3>
                            <p className="text-blue-50/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                You have a product, you have sales. Now you need the systems to multiply by 10x without breaking.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founders Card 2 */}
                <div className="group relative h-[550px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none"></div>

                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                        alt="Structural Foundation"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block py-1 px-3 bg-slate-700/40 backdrop-blur-sm border border-slate-500/30 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4 rounded-lg">Mindset</span>
                            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">Entrepreneurs prepared<br />to <span className="text-blue-200">invest in quality</span></h3>
                            <p className="text-slate-200/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                We don't do shortcuts. We build foundations that last decades. If you want a quick fix, we aren't for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersGrid;
