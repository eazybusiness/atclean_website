export default function Unterhaltsreinigung() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unterhaltsreinigung</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professionelle Unterhaltsreinigung in Celle, Südheide & Hannover. 
            A-Team steht für zuverlässige, streifenfreie Reinigung zu fairen Preisen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Leistungen */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unsere Leistungen in der Unterhaltsreinigung
              </h3>
              <p className="text-gray-700 mb-4">
                Wir reinigen gründlich, regelmäßig und materialschonend:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Büro- und Arbeitsflächen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Böden aller Art (Staubsaugen & Wischen)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Sanitärbereiche und Küchen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Treppenhäuser
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Mülleimer leeren & Hygieneartikel auffüllen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Oberflächen, Türen und Lichtschalter
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                👉 Auf Wunsch inkl. individueller Reinigungspläne & Sonderleistungen
              </p>
            </div>

            {/* Für wen */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unterhaltsreinigung für Privat & Gewerbe
              </h3>
              <p className="text-gray-700 mb-6">
                Ob Büro, Praxis, Wohnanlage oder Ladenlokal – wir passen unsere Unterhaltsreinigung 
                individuell an Ihre Bedürfnisse an. Auch feste Reinigungsintervalle (täglich, wöchentlich 
                oder monatlich) sind problemlos möglich.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
                Warum A-Team Clean?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Zuverlässig & pünktlich
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Erfahrenes Fachpersonal
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Umweltfreundliche Reinigungsmittel
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Faire & transparente Preise
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Regional in Celle & Südheide
                </li>
              </ul>
            </div>
          </div>

          {/* Standorte */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unterhaltsreinigung in Ihrer Nähe
            </h3>
            <p className="text-gray-700 mb-4">
              Wir sind für Sie im Einsatz in:
            </p>
            <p className="text-lg font-semibold text-primary">
              Celle, Südheide, Bergen, Faßberg, Burgdorf, Hannover und Umgebung
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-secondary to-accent text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Jetzt Angebot für Unterhaltsreinigung anfordern
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot zur Unterhaltsreinigung. 
              Wir beraten Sie gerne persönlich!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917687968242"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                📞 +49 176 87968242
              </a>
              <a
                href="mailto:info@atclean.de"
                className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
