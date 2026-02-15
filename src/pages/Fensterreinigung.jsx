export default function Fensterreinigung() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fensterreinigung</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professionelle Fensterreinigung in Südheide, Celle und Hannover für streifenfreien Durchblick. 
            Privat und gewerblich – für kristallklare Fenster.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unsere Leistungen in der Fensterreinigung
              </h3>
              <p className="text-gray-700 mb-4">
                Wir sorgen für streifenfreie Sauberkeit und klare Sicht – professionell und zuverlässig:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Fensterreinigung innen und außen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Rahmen- und Fensterbankreinigung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Glasfassaden und Schaufenster
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Wintergärten und Oberlichter
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Dachfenster und schwer erreichbare Fenster
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Regelmäßige Wartungsreinigung
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                Streifenfreie Ergebnisse garantiert
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ihre Vorteile
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Professionelle Technik</h4>
                  <p className="text-gray-700">
                    Moderne Reinigungsgeräte und umweltfreundliche Reinigungsmittel für beste Ergebnisse.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Sicherheit</h4>
                  <p className="text-gray-700">
                    Geschultes Personal mit Absturzsicherung für Arbeiten in der Höhe.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Flexibel</h4>
                  <p className="text-gray-700">
                    Einmalige Reinigung oder regelmäßige Wartungsintervalle nach Ihren Wünschen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Für wen eignet sich Fensterreinigung?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Privathaushalte</h4>
                <p className="text-gray-100">
                  Einfamilienhäuser, Mehrfamilienhäuser und Wohnungen – für klare Sicht das ganze Jahr
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gewerbeobjekte</h4>
                <p className="text-gray-100">
                  Bürogebäude, Geschäfte und Praxen – für einen professionellen ersten Eindruck
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Industrie</h4>
                <p className="text-gray-100">
                  Produktionshallen, Lagerhallen und Industriegebäude mit großen Glasflächen
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jetzt unverbindlich anfragen
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein individuelles Angebot. Wir beraten Sie gerne zu unserer 
              professionellen Fensterreinigung.
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
