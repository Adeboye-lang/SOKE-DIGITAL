import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonicalUrl,
    ogImage = 'https://sokedigital.com.ng/Logo.png', // Default fallback image for sharing
    ogType = 'website'
}) => {
    const siteName = 'SOKE DIGITAL';
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://sokedigital.com.ng';
    const currentUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />
        </Helmet>
    );
};

export default SEOHead;
