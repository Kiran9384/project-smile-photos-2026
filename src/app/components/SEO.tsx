import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => (
  <Helmet>
    <title>Smile Photos | Best Photography Studio in Kanchipuram</title>
    <meta name="description" content="Smile Photos is a professional photography studio in Kanchipuram specializing in wedding photography, pre-wedding, maternity, baby shower, birthday, engagement, portraits, and event photography." />
    <meta name="keywords" content="photography studio in Kanchipuram, wedding photographer Kanchipuram, photo studio Kanchipuram, Smile Photos, baby shower photography, birthday photography, maternity photography, portrait photography, Tamil Nadu photographer" />
    <link rel="canonical" href="https://smilephotos.com" />
    {/* Open Graph */}
    <meta property="og:title" content="Smile Photos | Best Photography Studio in Kanchipuram" />
    <meta property="og:description" content="Smile Photos is a professional photography studio in Kanchipuram offering wedding, pre-wedding, maternity, baby shower, birthday, engagement, portrait, and event photography." />
    <meta property="og:image" content="https://smilephotos.com/optimized/hero.webp" />
    <meta property="og:url" content="https://smilephotos.com" />
    <meta property="og:type" content="website" />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Smile Photos | Best Photography Studio in Kanchipuram" />
    <meta name="twitter:description" content="Professional photography studio in Kanchipuram offering a wide range of services." />
    <meta name="twitter:image" content="https://smilephotos.com/optimized/hero.webp" />
    {/* Structured Data */}
    <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Smile Photos",
        "url": "https://smilephotos.com",
        "logo": "https://smilephotos.com/smile_photography_logo.png",
        "image": "https://smilephotos.com/optimized/hero.webp",
        "description": "Professional photography studio specializing in weddings, pre-weddings, maternity, baby shower, birthday, engagement, portraits, and events.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kanchipuram",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "telephone": "+91-6379453688",
        "email": "smilephotography81@gmail.com",
        "sameAs": []
      }`}
    </script>
  </Helmet>
);

export default SEO;
