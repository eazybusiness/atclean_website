import { useState, useEffect } from 'react';

const testimonials = [
  {
    company: 'DRK Kindergarten e.V.',
    logo: '/assets/logos/01_logo_kunde_drk-kindergarten-ev-rotes-kreuz.png',
    text: 'Wir arbeiten seit Jahren mit A-Team Clean und können den Service wärmstens weiterempfehlen. Zuverlässig, professionell und immer pünktlich.',
    author: 'Kindergartenleitung',
    position: 'DRK Kindergarten',
    rating: 5
  },
  {
    company: 'Köster GmbH',
    logo: '/assets/logos/02_logo_kunde_koester-GmbH.png',
    text: 'Die Qualität der Reinigungsarbeiten ist hervorragend. Unsere Räumlichkeiten glänzen jeden Morgen. Absolut empfehlenswert!',
    author: 'Geschäftsführung',
    position: 'Köster GmbH',
    rating: 5
  },
  {
    company: 'DRK Kindergarten Kinnerhus',
    logo: '/assets/logos/03_logo_kunde_drk_kindergarten_kinnerhus_rotes_kreuz.png',
    text: 'In Kindergärten sind Hygiene und Sauberkeit oberste Priorität. A-Team Clean erfüllt alle unsere hohen Anforderungen zuverlässig.',
    author: 'Einrichtungsleitung',
    position: 'DRK Kinnerhus',
    rating: 5
  },
  {
    company: 'Landkreis Celle',
    logo: '/assets/logos/04_logo_kunde_landkreis_celle_niedersachsen.png',
    text: 'Seit Jahren kümmert sich A-Team Clean um unsere Einrichtungen. Die Zusammenarbeit ist unkompliziert und das Ergebnis überzeugt uns täglich.',
    author: 'Verwaltung',
    position: 'Landkreis Celle',
    rating: 5
  },
  {
    company: 'Hermann-Billung-Grundschule',
    logo: '/assets/logos/05_logo_kunde_Hermann-Billung-Grundschule.png',
    text: 'Professionelle Schulreinigung auf höchstem Niveau. Flexible Zeiten, faire Preise und exzellente Qualität. Wir sind sehr zufrieden!',
    author: 'Schulleitung',
    position: 'Hermann-Billung-Grundschule',
    rating: 5
  },
  {
    company: 'Waldschule Unterlüß',
    logo: '/assets/logos/06_logo_kunde_Waldschule_Grundschule_Unterluess.png',
    text: 'Sauberkeit in Schulen ist essentiell. A-Team Clean versteht unsere Ansprüche und liefert konstant erstklassige Arbeit.',
    author: 'Schulleitung',
    position: 'Waldschule Unterlüß',
    rating: 5
  },
  {
    company: 'DRK Kreisverband Celle',
    logo: '/assets/logos/07_logo_kunde_DRK_Kreisverband_Celle.png',
    text: 'Zuverlässiger Partner für alle unsere Reinigungsanforderungen. Professionell und termingerecht.',
    author: 'Verwaltung',
    position: 'DRK Kreisverband Celle',
    rating: 5
  },
  {
    company: 'Eiffage Infra-Bau',
    logo: '/assets/logos/08_logo_kunde_eiffage-infra-bau.png',
    text: 'Exzellente Bauendreinigung. Schnell, gründlich und professionell. Jederzeit wieder!',
    author: 'Projektleitung',
    position: 'Eiffage Infra-Bau',
    rating: 5
  },
  {
    company: 'Freiwillige Feuerwehr Hermannsburg',
    logo: '/assets/logos/09_logo_kunde_Freiwillige-Feuerwehr-Hermannsburg.png',
    text: 'Unsere Feuerwache wird stets perfekt gereinigt. Verlässlich und gründlich.',
    author: 'Wehrführung',
    position: 'FF Hermannsburg',
    rating: 5
  },
  {
    company: 'Gemeinde Faßberg',
    logo: '/assets/logos/10_logo_kunde_Gemeinde-Fassberg.png',
    text: 'Kompetenter Partner für kommunale Reinigungsaufgaben. Sehr zufrieden!',
    author: 'Gemeindeverwaltung',
    position: 'Gemeinde Faßberg',
    rating: 5
  },
  {
    company: 'Gemeinde Südheide',
    logo: '/assets/logos/11_logo_kunde_Gemeinde-Suedheide.png',
    text: 'Professionelle Reinigung für alle unsere Gemeindeobjekte. Top Service!',
    author: 'Gemeindeverwaltung',
    position: 'Gemeinde Südheide',
    rating: 5
  },
  {
    company: 'GSPart',
    logo: '/assets/logos/12_logo_kunde_GSPart.png',
    text: 'Zuverlässige Unterhaltsreinigung für unsere Büroräume. Immer pünktlich und gründlich.',
    author: 'Geschäftsführung',
    position: 'GSPart',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Referenzen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zufriedene Kunden sind die beste Werbung! Vertrauen Sie auf die Erfahrungen unserer langjährigen Partner.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${testimonials[currentIndex].logo.replace(/^\//, '')}`}
                  alt={`${testimonials[currentIndex].company} Logo`}
                  className="max-h-40 max-w-md object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-7xl animate-bounce-slow">
                  {testimonials[currentIndex].logoFallback}
                </div>
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="border-t border-gray-200 pt-6 w-full">
                <p className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-primary font-semibold mt-2">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-gray-800 rounded-full p-3 shadow-lg transition transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-gray-800 rounded-full p-3 shadow-lg transition transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 hover:opacity-100 transition cursor-pointer group"
              onClick={() => goToSlide(index)}
            >
              <div className="h-20 w-full flex items-center justify-center mb-2">
                <img
                  src={`${import.meta.env.BASE_URL}${testimonial.logo.replace(/^\//, '')}`}
                  alt={`${testimonial.company} Logo`}
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition w-auto h-auto"
                />
              </div>
              <p className="text-xs text-center text-gray-600 font-medium">
                {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
