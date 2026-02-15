// SEO Keywords: Alle Reinigungsformen für alle genannten Städte
// 6 Services × 7 Cities = 42 Keyword-Kombinationen

export const services = [
  'Grundreinigung',
  'Unterhaltsreinigung',
  'Bauendreinigung',
  'Hauswirtschaft',
  'Fensterreinigung',
  'Winterdienst'
];

export const cities = [
  'Südheide',
  'Fassberg',
  'Eschede',
  'Celle',
  'Burgdorf',
  'Lehrte',
  'Hannover'
];

// Generate all keyword combinations
export const seoKeywords = services.flatMap(service =>
  cities.map(city => `${service} ${city}`)
);

// SEO-optimized content for meta tags
export const seoContent = {
  title: 'A-Team Gebäudereinigung | Professionelle Reinigung in Südheide, Celle, Hannover',
  description: `Professionelle Gebäudereinigung in ${cities.join(', ')}. ${services.join(', ')} und mehr. Zuverlässig, erfahren, zertifiziert. ☎ +49 176 87968242`,
  keywords: seoKeywords.join(', '),
  
  // Structured data for local business
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "A-Team Gebäudereinigung",
    "image": "https://atclean.de/logo.png",
    "@id": "https://atclean.de",
    "url": "https://atclean.de",
    "telephone": "+4917687968242",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Südheide",
      "postalCode": "",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.6667,
      "longitude": 10.0833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/ateamclean",
      "https://www.instagram.com/ateamclean"
    ],
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Reinigungsdienstleistungen",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "areaServed": cities
        }
      }))
    }
  }
};

// Generate city-specific content
export const cityContent = cities.reduce((acc, city) => {
  acc[city] = {
    title: `Gebäudereinigung ${city} | A-Team Gebäudereinigung`,
    description: `Professionelle Gebäudereinigung in ${city}. ${services.join(', ')}. Zuverlässig & erfahren. Jetzt Angebot anfordern!`,
    h1: `Gebäudereinigung in ${city}`,
    intro: `Ihr zuverlässiger Partner für professionelle Gebäudereinigung in ${city} und Umgebung.`
  };
  return acc;
}, {});

// Generate service-specific content
export const serviceContent = services.reduce((acc, service) => {
  acc[service] = {
    title: `${service} | A-Team Gebäudereinigung`,
    description: `Professionelle ${service} in ${cities.join(', ')}. Erfahren, zuverlässig, zertifiziert. Jetzt Angebot anfordern!`,
    h2: service,
    cities: cities
  };
  return acc;
}, {});
