import React from 'react';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description }) => {
    return (
        <div className="group bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
            {/* Subtle Gradient Blob - Blue/Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-3xl rounded-full -mr-32 -mt-32 transition-all opacity-50 group-hover:bg-blue-100/50 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-900 transition-colors relative z-10">{title}</h3>
            <div className="w-12 h-1 bg-blue-100 mb-6 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-300 relative z-10 rounded-full"></div>

            <p className="text-lg font-bold mb-4 text-slate-800 relative z-10">
                {subtitle}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
