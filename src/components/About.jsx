const values = [
  {
    title: 'Identifikation',
    description: 'Als professionelles Reinigungsunternehmen verstehen wir, wie wichtig eine saubere und gepflegte Arbeitsumgebung ist. Ein sauberes Büro, eine hygienische Produktionsstätte oder ein gepflegter Verkaufsraum sind nicht nur ein Aushängeschild für Ihr Unternehmen, sondern tragen auch maßgeblich zum Wohlbefinden Ihrer Mitarbeiter und Kunden bei.',
    icon: '🎯',
  },
  {
    title: 'Leistung',
    description: 'Unser Leistungsspektrum umfasst die Reinigung von Bürogebäuden, Praxen, Geschäften, Produktionsstätten, Schulen, Kindergärten und vielen anderen Objekten. Wir passen unsere Reinigungsdienste individuell an Ihre Bedürfnisse an und erstellen gemeinsam mit Ihnen einen maßgeschneiderten Reinigungsplan.',
    icon: '💪',
  },
  {
    title: 'Qualität',
    description: 'Unser geschultes und erfahrenes Reinigungspersonal arbeitet sorgfältig und effizient. Wir verwenden moderne Reinigungstechniken, um optimale Ergebnisse zu erzielen. Dabei legen wir großen Wert auf umweltfreundliche Reinigungsmittel und schonende Verfahren.',
    icon: '⭐',
  },
  {
    title: 'Vertrauen',
    description: 'Wir legen großen Wert auf Kundenzufriedenheit und eine langfristige Zusammenarbeit. Unsere Preise sind fair und transparent. Wir bieten Ihnen ein ausgezeichnetes Preis-Leistungs-Verhältnis und garantieren Ihnen eine professionelle und zuverlässige Reinigung.',
    icon: '🤝',
  },
];

const stats = [
  { number: '10+', label: 'Jahre Erfahrung' },
  { number: '200+', label: 'Zufriedene Kunden' },
  { number: '50+', label: 'Mitarbeiter' },
  { number: '08-17', label: 'Mo-Fr Uhr' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Über uns
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Was macht uns aus?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zufriedene Kunden sind die beste Werbung! Vertrauen Sie auf unseren Service und lassen Sie uns Ihr zuverlässiger Reinigungspartner sein.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Liftkontor Zertifizierung */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Zertifiziert durch Liftkontor
              </h3>
              <div className="mb-6">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/Liftkontor.png`}
                  alt="Liftkontor Logo"
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unsere Mitarbeiter sind zertifiziert für den sicheren Umgang mit Hub-Lifts und Arbeitsbühnen. 
                Damit können wir auch hochliegenden Fensterfronten und schwer zugängliche Bereiche professionell 
                und sicher reinigen.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-3">Prüfung erfolgreich abgeschlossen</p>
                <p className="text-sm text-gray-600 mb-4">Zertifizierte Lift-Bedienung für Höhenarbeiten:</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/Scheren_Arbeitsbühne.svg`}
                    alt="Scherenarbeitsbühne"
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700">Scherenarbeitsbühne</p>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/Gelenkteleskop_Arbeitsbühne.svg`}
                    alt="Gelenkteleskop-Arbeitsbühne"
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700">Gelenkteleskop-Arbeitsbühne</p>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/Teleskop_Arbeitsbühne.svg`}
                    alt="Teleskop-Arbeitsbühne"
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700">Teleskop-Arbeitsbühne</p>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/Raupen_Arbeitsbühne.svg`}
                    alt="Raupen-Arbeitsbühne"
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700">Raupen-Arbeitsbühne</p>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/Senkrechtlifte.svg`}
                    alt="Senkrechtlift"
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700">Senkrechtlift</p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://www.liftkontor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  liftkontor.com
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-2"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/lift_bild.jpg`}
                  alt="Inhaber mit Lift-Zertifizierung - Professionelle Gebäudereinigung Südheide"
                  className="relative w-auto h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

<div className="bg-gradient-to-r from-accent via-cyan-400 to-accent text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Umfassende Reinigungslösungen
            </h3>
            <p className="text-lg md:text-xl mb-8 text-cyan-50 max-w-3xl leading-relaxed">
              Wir kümmern uns um alle Aspekte der Gebäudereinigung, einschließlich der Reinigung von Böden, Teppichen, Fenstern, Sanitäranlagen und Küchen. Darüber hinaus bieten wir auch Sonderreinigungen wie die Entfernung von Graffiti oder die Reinigung nach Renovierungsarbeiten an.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Umweltfreundlich</p>
                  <p className="text-sm text-cyan-50">Nachhaltige Reinigungsmittel</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Flexibel</p>
                  <p className="text-sm text-cyan-50">Angepasst an Ihre Zeiten</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Zuverlässig</p>
                  <p className="text-sm text-cyan-50">Pünktlich und professionell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
