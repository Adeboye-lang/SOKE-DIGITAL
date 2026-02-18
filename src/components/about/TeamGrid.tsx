import React from 'react';

interface SocialLink {
    platform: 'linkedin' | 'instagram';
    url: string;
}

const SocialIcon = ({ platform }: { platform: 'linkedin' | 'instagram' }) => {
    if (platform === 'linkedin') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.348 6.169h2.352v1.08h.031c.327-.622 1.129-1.278 2.321-1.278 2.478 0 2.934 1.636 2.934 3.763v4.364H11.59v-3.957c0-.943-.017-2.155-1.31-2.155-1.311 0-1.512 1.026-1.512 2.086v4.026H6.348V6.169z" />
            </svg>
        );
    }
    if (platform === 'instagram') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
        );
    }
    return null;
};

const TeamCard = ({ imageSrc, name, role, bio, socials, scale = 1, position = 'object-center' }: { imageSrc: string, name: string, role: string, bio?: string, socials?: SocialLink[], scale?: number, position?: string }) => (
    <div className="flex flex-col group h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-80 overflow-hidden bg-gray-200 relative">
            {/* Manual Scale Wrapper */}
            <div className="w-full h-full" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
                <img
                    src={imageSrc}
                    alt={name}
                    className={`w-full h-full object-cover ${position} transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] contrast-[1.05]`}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Socials Overlay on Hover */}
            <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-10">
                {socials && socials.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                        aria-label={`${name}'s ${social.platform}`}
                    >
                        <SocialIcon platform={social.platform} />
                    </a>
                ))}
            </div>
        </div>

        <div className="p-8 flex flex-col flex-1 relative overflow-hidden">
            {/* Subtle Blob Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>

            <h3 className="text-slate-900 font-bold text-2xl mb-1">{name}</h3>
            <p className="text-blue-600 text-sm font-bold tracking-wide uppercase mb-4">{role}</p>
            {bio && <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{bio}</p>}
        </div>
    </div>
);

const TeamGrid: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
            <div className="mb-16 max-w-2xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
                    The Minds Behind Sókè
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Meet our <span className="text-blue-900">Leadership Team</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <TeamCard
                    imageSrc="/Seamas.jpg"
                    name="Seamas Vincent Ideh"
                    role="Founder and CEO"
                    bio="Saw the gap in African business building and decided to close it. Passionate about sustainable growth and digital transformation."
                    scale={1}
                    position="object-[50%_15%]"
                    socials={[
                        { platform: 'linkedin', url: 'https://www.linkedin.com/in/seamas-ideh-abb139236/' },
                        { platform: 'instagram', url: 'https://www.instagram.com/theseamasvincent/' }
                    ]}
                />
                <TeamCard
                    imageSrc="/Esosa.JPG"
                    name="Esosa Eghobamien"
                    role="Operations Manager"
                    bio="Oversees the operational backbone that lets businesses scale without breaking. Expert in process optimization."
                    scale={1.35}
                    position="object-[50%_15%]"
                    socials={[
                        { platform: 'linkedin', url: 'https://www.linkedin.com/in/esosa-eghobamien-5269681b1/' },
                        { platform: 'instagram', url: 'https://www.instagram.com/esosa_edosa?igsh=NG5mbGhzajJoODV6&utm_source=qr' }
                    ]}
                />
                <TeamCard
                    imageSrc="/Terdo.jpeg"
                    name="Naze Terdoo"
                    role="Client Success Manager"
                    bio="Ensures all Soke Digital Clients and Partners are properly and efficiently served. Dedicated to client satisfaction."
                    scale={1.2}
                    position="object-[50%_25%]"
                    socials={[
                        { platform: 'linkedin', url: 'https://www.linkedin.com/in/terdoo-naze-1a18373a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
                        { platform: 'instagram', url: 'https://www.instagram.com/_ter_doo/' }
                    ]}
                />
            </div>
        </section>
    );
};

export default TeamGrid;
