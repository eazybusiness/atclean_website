import ServiceNav from '../components/ServiceNav';

export default function Hauswirtschaft() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <ServiceNav />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/services/haushalts_reinigung.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Hauswirtschaft</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-white">
            Professionelle Hauswirtschaft in Celle, Südheide & Hannover. A-Team steht für zuverlässige, 
            vertrauensvolle Unterstützung zu fairen Preisen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unsere Leistungen in der Hauswirtschaft
              </h3>
              <p className="text-gray-700 mb-4">
                Wir unterstützen Sie zuverlässig und vertrauensvoll bei hauswirtschaftlichen Aufgaben. 
                Dabei passen wir unsere Leistungen individuell an:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Reinigung von Wohn- und Schlafräumen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Küchen- und Badreinigung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Staubsaugen & Wischen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Wäsche waschen, trocknen & zusammenlegen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Ordnung und Struktur im Haushalt
                </li>
              </ul>
              <p className="text-gray-700 mt-4 mb-4">
                <strong>Zusätzlich bieten wir an:</strong>
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Küchenhilfe für Schulen und Kitas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Küchen- und Personalunterstützung für Unternehmen, Kantinen und Betriebe
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                👉 Auf Wunsch stellen wir Ihnen zuverlässiges Personal für regelmäßige Einsätze zur Verfügung.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hauswirtschaft für Privat & Einrichtungen
              </h3>
              <p className="text-gray-700 mb-6">
                Ob Privathaushalt, Seniorenwohnung oder soziale Einrichtung – wir passen unsere hauswirtschaftlichen 
                Leistungen individuell an Ihre Situation an. Auch regelmäßige Einsätze sind flexibel möglich.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Warum A-Team Clean?
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Zuverlässig & pünktlich
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Erfahrenes Fachpersonal
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Umweltfreundliche Reinigungsmittel
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Faire & transparente Preise
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">✔</span>
                  Regional in Celle & Südheide
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Hauswirtschaft in Ihrer Nähe</h3>
            <p className="text-gray-100 text-lg">
              Wir sind für Sie im Einsatz in: <strong>Celle, Südheide, Bergen, Faßberg, Hannover und Umgebung</strong>
            </p>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jetzt Angebot für Hauswirtschaft anfordern
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot zur Hauswirtschaft. 
              Wir beraten Sie gerne persönlich!
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
