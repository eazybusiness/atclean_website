const services = [
  {
    title: 'Grundreinigung',
    description: 'Gründliche Tiefenreinigung für Ihre Räumlichkeiten. Perfekt für den Start oder nach Renovierungen.',
    icon: '🧹',
  },
  {
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige professionelle Reinigung für dauerhaft saubere und gepflegte Räume.',
    icon: '✨',
  },
  {
    title: 'Bauendreinigung',
    description: 'Professionelle Reinigung nach Bau- oder Renovierungsarbeiten für bezugsfertige Objekte.',
    icon: '🏗️',
  },
  {
    title: 'Hauswirtschaft',
    description: 'Umfassende hauswirtschaftliche Dienstleistungen für Ihr Wohlbefinden.',
    icon: '🏠',
  },
  {
    title: 'Fensterreinigung',
    description: 'Streifenfreie Fensterreinigung für klare Durchsicht und mehr Licht.',
    icon: '🪟',
  },
  {
    title: 'Winterdienst',
    description: 'Zuverlässiger Winterdienst für sichere Wege und Zufahrten.',
    icon: '❄️',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dienstleistungen im Überblick
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionelle Reinigungslösungen für jeden Bedarf
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
