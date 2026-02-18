import React from 'react';

interface InfoGridProps {
    title: React.ReactNode;
    subtitle: string;
    cards: {
        title: string;
        description: string;
        imageSrc: string;
    }[];
}

const InfoGridSection: React.FC<InfoGridProps> = ({ title, subtitle, cards }) => {
    return (
        <section className="py-24 bg-white px-8 md:px-16 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                    {title}
                </h2>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div key={card.title} className="relative h-64 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-blue-500">
                        <div className="absolute inset-0">
                            <img src={card.imageSrc} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <div className="mb-2">
                                {/* Using a generic icon for now, could be prop-driven */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.627 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.627 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                            <p className="text-white/80 text-xs leading-relaxed max-w-[200px]">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoGridSection;
