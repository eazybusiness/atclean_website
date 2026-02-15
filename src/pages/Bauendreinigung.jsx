export default function Bauendreinigung() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bauendreinigung</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professionelle Bauendreinigung in Celle, Südheide & Hannover. 
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
                Unsere Leistungen in der Bauendreinigung
              </h3>
              <p className="text-gray-700 mb-4">
                Wir reinigen gründlich, materialschonend und fachgerecht:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Entfernung von Baustaub und Bauschmutz
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Reinigung von Böden, Wänden und Decken
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Fenster-, Glas- und Rahmenreinigung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Sanitär- und Küchenreinigung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Türen, Zargen, Steckdosen und Lichtschalter
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Bauendreinigung nach Neubau, Umbau oder Renovierung
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                👉 Auf Wunsch inkl. Feinreinigung und kurzfristiger Termine
              </p>
            </div>

            {/* Für wen */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bauendreinigung für Privat & Gewerbe
              </h3>
              <p className="text-gray-700 mb-6">
                Ob Wohnung, Einfamilienhaus, Bürogebäude oder Gewerbeobjekt – wir passen die Bauendreinigung 
                individuell an Ihr Projekt an. Auch enge Zeitpläne setzen wir zuverlässig um, damit Ihre Räume 
                schnell nutzbar sind.
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
              Bauendreinigung in Ihrer Nähe
            </h3>
            <p className="text-gray-700 mb-4">
              Wir sind für Sie im Einsatz in:
            </p>
            <p className="text-lg font-semibold text-primary">
              Celle, Südheide, Bergen, Faßberg, Burgdorf, Hannover und Umgebung
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-accent to-primary text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Jetzt Angebot für Bauendreinigung anfordern
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot zur Bauendreinigung. 
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
