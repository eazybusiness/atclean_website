import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Grundreinigung',
    description: 'Gründliche Tiefenreinigung für Ihre Räumlichkeiten. Perfekt für den Start oder nach Renovierungen.',
    image: '/assets/images/services/grundreinigung.png',
    link: '/grundreinigung'
  },
  {
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige professionelle Reinigung für dauerhaft saubere und gepflegte Räume.',
    image: '/assets/images/services/unterhaltsreinigung.png',
    link: '/unterhaltsreinigung'
  },
  {
    title: 'Bauendreinigung',
    description: 'Professionelle Reinigung nach Bau- oder Renovierungsarbeiten für bezugsfertige Objekte.',
    image: '/assets/images/services/bauendreinigung.png',
    link: '/bauendreinigung'
  },
  {
    title: 'Hauswirtschaft',
    description: 'Umfassende hauswirtschaftliche Dienstleistungen für Ihr Wohlbefinden.',
    image: '/assets/images/services/haushalts_reinigung.png',
    link: '/hauswirtschaft'
  },
  {
    title: 'Fensterreinigung',
    description: 'Streifenfreie Glasreinigung für kristallklare Durchsicht und perfekten Glanz.',
    image: '/assets/images/services/fensterreinigung.png',
    link: '/fensterreinigung'
  },
  {
    title: 'Winterdienst',
    description: 'Zuverlässiger Schneeräum- und Streudienst für sichere Wege und Zufahrten.',
    image: '/assets/images/services/winterdienst.png',
    link: '/winterdienst'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Unsere Dienstleistungen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dienstleistungen im Überblick
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professionelle Reinigungslösungen für jeden Bedarf – maßgeschneidert, zuverlässig und mit höchsten Qualitätsstandards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link || "#contact"}
              className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 h-80"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')})` 
                }}
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-accent hover:text-white font-semibold transition">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Individuelle Lösungen für Ihr Unternehmen
            </h3>
            <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
              Benötigen Sie eine maßgeschneiderte Reinigungslösung? Wir erstellen gemeinsam mit Ihnen einen individuellen Reinigungsplan.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Jetzt beraten lassen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
