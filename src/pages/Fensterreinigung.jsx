import ServiceNav from '../components/ServiceNav';

export default function Fensterreinigung() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <ServiceNav />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/services/fensterreinigung.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Fensterreinigung</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-white">
            Professionelle Fensterreinigung in Celle, Südheide & Hannover. A-Team steht für zuverlässige, 
            streifenfreie Reinigung zu fairen Preisen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fensterreinigung für Privat & Gewerbe
              </h3>
              <p className="text-gray-700 mb-6">
                Ob Wohnung, Einfamilienhaus, Bürogebäude oder Ladenlokal – wir passen unsere Fensterreinigung 
                individuell an Ihre Bedürfnisse an. Auch regelmäßige Reinigungsintervalle sind jederzeit möglich.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Warum A-Team Clean?
              </h3>
              <p className="text-gray-700 mb-4">
                Unsere Kunden entscheiden sich für Qualität. Denn Zuverlässigkeit und Sorgfalt stehen bei uns 
                an erster Stelle:
              </p>
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
            <h3 className="text-2xl font-bold mb-4">Fensterreinigung in Ihrer Nähe</h3>
            <p className="text-gray-100 text-lg">
              Wir sind für Sie im Einsatz in: <strong>Celle, Südheide, Bergen, Faßberg, Hannover und Umgebung</strong>
            </p>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jetzt Angebot für Fensterreinigung anfordern
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot zur Fensterreinigung. 
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
