export default function Hauswirtschaft() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hauswirtschaft</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professionelle hauswirtschaftliche Dienstleistungen in Südheide, Celle und Hannover. 
            Wir unterstützen Sie im Alltag mit zuverlässigen Hauswirtschaftsleistungen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unsere hauswirtschaftlichen Leistungen
              </h3>
              <p className="text-gray-700 mb-4">
                Wir bieten umfassende hauswirtschaftliche Dienstleistungen für Privathaushalte und Einrichtungen:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Wäschepflege und Bügeln
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Einkaufsservice
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Haushaltsorganisation
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Betreuung und Unterstützung im Alltag
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Mahlzeitenvorbereitung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Begleitung zu Terminen
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                Individuelle Betreuung nach Ihren Bedürfnissen
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
                    Pünktlich und verlässlich – wir sind für Sie da, wenn Sie uns brauchen.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Erfahren</h4>
                  <p className="text-gray-700">
                    Geschultes Personal mit langjähriger Erfahrung in der Hauswirtschaft.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Flexibel</h4>
                  <p className="text-gray-700">
                    Individuelle Leistungspakete nach Ihren Wünschen und Bedürfnissen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Für wen eignet sich Hauswirtschaft?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Privathaushalte</h4>
                <p className="text-gray-100">
                  Entlastung im Alltag für Familien, Berufstätige und Senioren
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Senioreneinrichtungen</h4>
                <p className="text-gray-100">
                  Professionelle Unterstützung in Pflegeheimen und Seniorenresidenzen
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Betreutes Wohnen</h4>
                <p className="text-gray-100">
                  Individuelle Betreuung für selbstständiges Wohnen im Alter
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jetzt unverbindlich anfragen
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein individuelles Angebot. Wir beraten Sie gerne zu unseren 
              hauswirtschaftlichen Dienstleistungen.
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
