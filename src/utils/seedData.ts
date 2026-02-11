// Demo content for seeding the database

export const DEFAULT_PROJECTS = [
    {
        title: 'URA',
        category: 'Strategy',
        description: 'URA is a tech startup we supported with brand development, digital marketing, organizational structuring, and business strategy to prepare the business for growth.',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000' // Placeholder if local img not available
    },
    {
        title: 'Chef Ima',
        category: 'Marketing',
        description: 'Chef Ima is a premium culinary brand we supported with brand development, digital marketing campaigns, and event marketing.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Puradia',
        category: 'Branding',
        description: 'Puradia is a brand we supported with brand development, including brand strategy, visual identity design, and branding asset creation.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000'
    }
];

export const DEFAULT_POSTS = [
    {
        title: 'The Future of Digital Strategy in Africa',
        category: 'Strategy',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
        date: new Date().toLocaleDateString(),
        author: 'Adeboye Bello',
        summary: 'Why cookie-cutter strategies fail in African markets and what to build instead.',
        content: 'As markets evolve, the need for robust digital strategies becomes paramount for African founders...'
    },
    {
        title: 'Scaling without Breaking: Operational Excellence',
        category: 'Operations',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        date: new Date().toLocaleDateString(),
        author: 'Sarah O.',
        summary: 'How to build systems that handle 10x growth without your team burning out.',
        content: 'Growth is good, but uncontrolled growth can destroy a company. Here is how to structure your ops...'
    },
    {
        title: 'Brand Storytelling for Tech Startups',
        category: 'Marketing',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
        date: new Date().toLocaleDateString(),
        author: 'Adeboye Bello',
        summary: 'Turning complex technical features into compelling narratives that investors buy into.',
        content: 'Your code is great, but do people understand why it matters? Storytelling is the bridge...'
    }
];
