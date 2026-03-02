import React from 'react';

const SectionDivider: React.FC = () => {
    return (
        <section className="relative h-[400px] w-full mt-0">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="Skyscrapers"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
            </div>

            <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Business<br />Development Firm
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                    Putting physical and digital business expertise<br />
                    to build the next generation of scalable African businesses.
                </p>
            </div>
        </section>
    );
};

export default SectionDivider;
