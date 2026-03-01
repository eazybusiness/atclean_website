export default function References() {
  const logos = [
    'Abbruch-Landwehr.png',
    'C+S Umwelttechnik.png',
    'Das Deutsche Rote Kreuz Ambulante Dienste gGmbH.svg',
    'Das Deutsche Rote Kreuz Kreisverband e.V..png',
    'Die Techniker Krankenkasse.png',
    'Eiffage Infra-Bau.svg',
    'Eiffage Infra-Hochbau.svg',
    'Eiffage Infra-Nordwest.jpg',
    'Fuchbau Zimmerei Ingenieurbüro.jpg',
    'GSPart.png',
    'Gemeinde Eschede.png',
    'Gemeinde Fassberg.png',
    'H. Beseke Immobilien e. K..png',
    'HSD Händschke.png',
    'Köster Hochbau-Tiefbau.png',
    'LVM Versicherung.png',
    'Landkreis Celle.png',
    'Niedersächsische Landforsten.png',
    'Ostbau.png',
    'SV Business Catering.png',
    'Staatliches Baumanagement Region Nord-West.png',
    'Zetcon.png'
  ];

  // Split logos into two halves
  const midpoint = Math.ceil(logos.length / 2);
  const firstHalf = logos.slice(0, midpoint);
  const secondHalf = logos.slice(midpoint);

  // Duplicate each half for seamless infinite scroll
  const duplicatedFirstHalf = [...firstHalf, ...firstHalf];
  const duplicatedSecondHalf = [...secondHalf, ...secondHalf];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Referenzen
          </h2>
          <p className="text-xl text-gray-600">
            Vertrauen von führenden Unternehmen und Institutionen
          </p>
        </div>

        {/* First slider - Right to Left (First Half) */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-rtl">
            {duplicatedFirstHalf.map((logo, index) => (
              <div
                key={`rtl-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '200px', height: '80px' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/referenzen/${logo}`}
                  alt={`Referenz ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second slider - Left to Right (Second Half) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-ltr">
            {duplicatedSecondHalf.map((logo, index) => (
              <div
                key={`ltr-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '200px', height: '80px' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/referenzen/${logo}`}
                  alt={`Referenz ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 20s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 20s linear infinite;
        }

        .animate-scroll-rtl:hover,
        .animate-scroll-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
