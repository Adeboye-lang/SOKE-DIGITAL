import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
    title: string;
    subtitle: string;
    description: string;
}

interface ServiceCategoryProps {
    title: React.ReactNode;
    services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
            <div className="text-center mb-24 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 inline-block relative">
                    {title}
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                <p className="text-xs md:text-sm text-slate-500 font-bold mt-4 uppercase tracking-[0.2em]">
                    Full Spectrum Implementation
                </p>
            </div>

            <div className="space-y-0 relative max-w-7xl mx-auto">
                {/* Vertical line connector */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent -z-10"></div>

                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    const stepNumber = (index + 1).toString().padStart(2, '0');

                    return (
                        <div key={service.title} className={`group flex flex-col md:flex-row items-center gap-8 md:gap-24 py-12 md:py-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                            {/* Empty space / Number side */}
                            <div className={`flex-1 hidden md:flex flex-col justify-center ${isEven ? 'items-end pr-16' : 'items-start pl-16'}`}>
                                <div className="text-[10rem] font-black text-slate-100 select-none group-hover:text-blue-50 transition-colors duration-500 leading-none tracking-tighter">
                                    {stepNumber}
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-200 rounded-full items-center justify-center z-10 shadow-sm group-hover:border-blue-600 group-hover:scale-150 transition-all duration-300">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-blue-600 transition-colors duration-300"></div>
                            </div>

                            {/* Card content */}
                            <div className="flex-1 w-full relative z-0">
                                <ServiceCard {...service} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceCategory;
