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

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Was macht uns aus?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zufriedene Kunden sind die beste Werbung! Vertrauen Sie auf unseren Service und lassen Sie uns Ihr zuverlässiger Reinigungspartner sein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 border border-gray-200"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Umfassende Reinigungslösungen
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Wir kümmern uns um alle Aspekte der Gebäudereinigung, einschließlich der Reinigung von Böden, Teppichen, Fenstern, Sanitäranlagen und Küchen. Darüber hinaus bieten wir auch Sonderreinigungen wie die Entfernung von Graffiti oder die Reinigung nach Renovierungsarbeiten an.
          </p>
        </div>
      </div>
    </section>
  );
}
