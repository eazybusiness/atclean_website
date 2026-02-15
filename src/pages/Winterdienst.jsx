export default function Winterdienst() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Winterdienst</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professioneller Winterdienst in Celle, Südheide & Hannover. A-Team steht für zuverlässige 
            Schneeräumung und Streudienst zu fairen Preisen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unsere Leistungen im Winterdienst
              </h3>
              <p className="text-gray-700 mb-4">
                Wir sorgen für Sicherheit und Ordnung auf Ihren Außenflächen:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Schneeräumung von Gehwegen und Zufahrten
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Streudienst bei Glätte (nach örtlichen Vorschriften)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Räumung von Parkplätzen und Hofflächen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Winterdienst für Wohnanlagen, Gewerbe & öffentliche Einrichtungen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Einsatz nach Wetterlage, früh morgens oder bei Bedarf
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                👉 Auf Wunsch inklusive Dokumentation und Bereitschaftsdienst
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ihre Vorteile
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Zuverlässig</h4>
                  <p className="text-gray-700">
                    Schnelle Reaktionszeiten und verlässlicher Service – auch bei Nacht und am Wochenende.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Rechtssicher</h4>
                  <p className="text-gray-700">
                    Dokumentation aller Einsätze zur Erfüllung Ihrer Verkehrssicherungspflicht.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Umweltbewusst</h4>
                  <p className="text-gray-700">
                    Einsatz umweltfreundlicher Streumittel zum Schutz von Pflanzen und Gewässern.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Für wen eignet sich Winterdienst?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Hausverwaltungen</h4>
                <p className="text-gray-100">
                  Zuverlässige Räumung und Streuung für Mehrfamilienhäuser und Wohnanlagen
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gewerbebetriebe</h4>
                <p className="text-gray-100">
                  Sichere Zufahrten und Parkplätze für Mitarbeiter und Kunden
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Öffentliche Einrichtungen</h4>
                <p className="text-gray-100">
                  Schulen, Kindergärten und Behörden – für sichere Wege im Winter
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jetzt Winterdienst buchen
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns frühzeitig für die kommende Wintersaison. Wir erstellen Ihnen ein 
              individuelles Angebot für Ihren Winterdienst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917687968242"
                className="bg-accent hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
              >
                📞 +49 176 87968242
              </a>
              <a
                href="mailto:info@atclean.de"
                className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
              >
                ✉️ info@atclean.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
