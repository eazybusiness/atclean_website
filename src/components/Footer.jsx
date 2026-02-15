export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}assets/atclean-logo.png`}
                alt="A-Team Gebäudereinigung Logo" 
                className="h-16 w-auto object-contain mb-3"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                A-Team Gebäudereinigung
              </h3>
            </div>
            <p className="text-gray-400">
              Ihr zuverlässiger Partner für professionelle Gebäudereinigung
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/grundreinigung" className="hover:text-white transition">Grundreinigung</a></li>
              <li><a href="/unterhaltsreinigung" className="hover:text-white transition">Unterhaltsreinigung</a></li>
              <li><a href="/bauendreinigung" className="hover:text-white transition">Bauendreinigung</a></li>
              <li><a href="/hauswirtschaft" className="hover:text-white transition">Hauswirtschaft</a></li>
              <li><a href="/fensterreinigung" className="hover:text-white transition">Fensterreinigung</a></li>
              <li><a href="/winterdienst" className="hover:text-white transition">Winterdienst</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+4917687968242" className="hover:text-white transition">
                  📞 +49 176 87968242
                </a>
              </li>
              <li>
                <a href="mailto:info@atclean.de" className="hover:text-white transition">
                  ✉️ info@atclean.de
                </a>
              </li>
              <li>📍 Südheide und Umgebung</li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <span className="font-semibold text-white">Sprechzeiten:</span><br />
                08:00 - 17:00 Uhr<br />
                Montag - Freitag
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} A-Team Gebäudereinigung. Alle Rechte vorbehalten.</p>
          <div className="mt-4 space-x-4">
            <a href="/datenschutz" className="hover:text-white transition">Datenschutzerklärung</a>
            <span>|</span>
            <a href="/impressum" className="hover:text-white transition">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
