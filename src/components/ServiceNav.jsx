import { Link, useLocation } from 'react-router-dom';

const services = [
  { name: 'Grundreinigung', path: '/grundreinigung' },
  { name: 'Unterhaltsreinigung', path: '/unterhaltsreinigung' },
  { name: 'Bauendreinigung', path: '/bauendreinigung' },
  { name: 'Hauswirtschaft', path: '/hauswirtschaft' },
  { name: 'Fensterreinigung', path: '/fensterreinigung' },
  { name: 'Winterdienst', path: '/winterdienst' }
];

export default function ServiceNav() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide">
          {services.map((service) => {
            const isActive = location.pathname === service.path;
            return (
              <Link
                key={service.path}
                to={service.path}
                className={`
                  whitespace-nowrap px-4 py-4 text-sm font-medium border-b-2 transition-colors
                  ${isActive 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-600 hover:text-primary hover:border-gray-300'
                  }
                `}
              >
                {service.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
