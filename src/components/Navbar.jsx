import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const services = [
    { name: 'Grundreinigung', path: '/grundreinigung' },
    { name: 'Unterhaltsreinigung', path: '/unterhaltsreinigung' },
    { name: 'Bauendreinigung', path: '/bauendreinigung' },
    { name: 'Hauswirtschaft', path: '/hauswirtschaft' },
    { name: 'Fensterreinigung', path: '/fensterreinigung' },
    { name: 'Winterdienst', path: '/winterdienst' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}assets/atclean-logo.png`}
              alt="A-Team Gebäudereinigung Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                AT
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              A-Team Gebäudereinigung
            </h1>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition">
                Startseite
              </Link>
              {isHomePage ? (
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition">
                  Über uns
                </button>
              ) : (
                <Link to="/#about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition">
                  Über uns
                </Link>
              )}
              
              {/* Leistungen Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1">
                  Leistungen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {isHomePage ? (
                <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  Kontakt
                </button>
              ) : (
                <Link to="/#contact" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  Kontakt
                </Link>
              )}
              <a href="tel:+4917687968242" className="text-primary hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition">
                📞 +49 176 87968242
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Startseite
            </Link>
            {isHomePage ? (
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Über uns
              </button>
            ) : (
              <Link to="/#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Über uns
              </Link>
            )}
            
            {/* Leistungen Mobile Submenu */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
              >
                Leistungen
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isHomePage ? (
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Kontakt
              </button>
            ) : (
              <Link to="/#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Kontakt
              </Link>
            )}
            <a href="tel:+4917687968242" className="text-primary hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              📞 +49 176 87968242
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
