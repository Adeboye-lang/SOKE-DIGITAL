import React from 'react';

const OriginStory: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-32 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="flex-1 order-2 lg:order-1">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                            Our Origin
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            How <span className="text-blue-900">Sókè Digital</span><br />came to be
                        </h2>

                        <div className="prose prose-lg text-slate-600 mb-8">
                            <p className="mb-6">
                                It started with a simple observation. Across the continent, we saw businesses with incredible vision and drive, but they often hit a ceiling—not because of market potential, but because of execution gaps.
                            </p>
                            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 bg-white p-6 rounded-r-xl shadow-sm my-8">
                                "We noticed a gap. African businesses have the vision, but often lack the structured execution needed to scale globally. We built Sókè to close that gap."
                            </blockquote>
                            <p>
                                We didn't want to just offer services; we wanted to build the infrastructure for growth. Sókè was born from the desire to be the technical and strategic partner that treats your business as our own.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-900/5 rounded-3xl -rotate-2"></div>
                            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl flex items-center justify-center min-h-[400px] border border-slate-100 relative transform transition-transform hover:-translate-y-2 duration-500">
                                <img src="/Logo.png" alt="SOKE Digital Logo" className="w-full max-w-[320px] h-auto object-contain" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OriginStory;
