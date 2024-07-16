import React from 'react'
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
        title, 
        description, 
        keywords = 'clothing, clothing store, online store, ph, philippines, five and dime', 
        url, 
        image 
    }) => (
        
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Canonical Link */}
        <link rel="canonical" href={url} /> 
    </Helmet>
);

export default SEO;