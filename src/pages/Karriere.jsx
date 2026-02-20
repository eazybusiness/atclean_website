import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Karriere() {
  useEffect(() => {
    document.title = 'Reinigungskraft (m/w/d) Celle & Hannover – Minijob, Teilzeit, Vollzeit | A-Team Clean';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jetzt als Reinigungskraft (m/w/d) in Celle oder Hannover bewerben. Minijob, Teilzeit oder Vollzeit in der Gebäudereinigung. Feste Arbeitszeiten Mo–Fr.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Jetzt als Reinigungskraft (m/w/d) in Celle oder Hannover bewerben. Minijob, Teilzeit oder Vollzeit in der Gebäudereinigung. Feste Arbeitszeiten Mo–Fr.';
      document.head.appendChild(meta);
    }
  }, []);
  const jobOpenings = [
    {
      title: 'Reinigungskraft (m/w/d) in Celle & Hannover',
      type: 'Minijob, Teilzeit oder Vollzeit',
      location: 'Celle & Hannover',
      schedule: 'Montag bis Freitag',
      description: 'Wir sind ein etabliertes Unternehmen im Bereich Gebäudereinigung und suchen ab sofort zuverlässige Mitarbeiter (m/w/d) für den Einsatz in Bürogebäuden, Praxen, Treppenhäusern und Gewerbeobjekten. Egal ob Minijob, Teilzeit oder Vollzeit – wir bieten dir eine sichere Anstellung mit festen Arbeitszeiten von Montag bis Freitag.',
      tasks: [
        'Unterhaltsreinigung von Büros und Gewerbeflächen',
        'Treppenhausreinigung',
        'Reinigung von Sanitäranlagen',
        'Glas- und Fensterreinigung',
        'Einhaltung von Hygiene- und Qualitätsstandards'
      ],
      profile: [
        'Erfahrung in der Gebäudereinigung von Vorteil (keine Voraussetzung)',
        'Zuverlässigkeit und sorgfältige Arbeitsweise',
        'Deutschkenntnisse von Vorteil',
        'Führerschein Klasse B wünschenswert'
      ],
      benefits: [
        'Sicherer Arbeitsplatz in der Gebäudereinigung in Celle & Hannover',
        'Feste Arbeitszeiten (Mo–Fr)',
        'Minijob, Teilzeit oder Vollzeit möglich',
        'Faire und pünktliche Bezahlung',
        'Langfristige Zusammenarbeit',
        'Angenehmes Team und strukturierte Einarbeitung'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Faire Bezahlung',
      description: 'Pünktliche und leistungsgerechte Vergütung nach Tarif'
    },
    {
      icon: '🤝',
      title: 'Familiäres Team',
      description: 'Respektvoller Umgang und kollegiales Miteinander'
    },
    {
      icon: '📈',
      title: 'Entwicklungsmöglichkeiten',
      description: 'Weiterbildungen und Aufstiegschancen im Unternehmen'
    },
    {
      icon: '🚗',
      title: 'Flexible Arbeitszeiten',
      description: 'Teilzeit- und Vollzeitmodelle nach Absprache'
    },
    {
      icon: '🛡️',
      title: 'Sicherer Arbeitsplatz',
      description: 'Langfristige Perspektive in einem wachsenden Unternehmen'
    },
    {
      icon: '🎯',
      title: 'Moderne Ausstattung',
      description: 'Hochwertige Arbeitsgeräte und professionelle Reinigungsmittel'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Karriere bei A-Team Clean
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Du suchst einen Job als Reinigungskraft in Celle oder Hannover? Wir bieten Minijob, Teilzeit oder Vollzeit mit festen Arbeitszeiten Mo–Fr.
            </p>
          </div>
        </div>
      </section>

      {/* Why A-Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum A-Team Clean?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei uns steht der Mensch im Mittelpunkt. Wir bieten nicht nur einen Job, 
              sondern eine berufliche Heimat mit echten Perspektiven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reinigungskraft Job in Celle oder Hannover
            </h2>
            <p className="text-xl text-gray-600">
              Ab sofort: Minijob, Teilzeit oder Vollzeit mit festen Arbeitszeiten (Mo–Fr)
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                        📍 {job.location}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        📅 {job.schedule}
                      </span>
                    </div>
                  </div>
                  <a 
                    href="#bewerbung"
                    className="mt-4 md:mt-0 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block text-center whitespace-nowrap"
                  >
                    Jetzt bewerben
                  </a>
                </div>

                {job.description && (
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Deine Aufgaben:</h4>
                    <ul className="space-y-2">
                      {job.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary mt-1">✓</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Dein Profil:</h4>
                    <ul className="space-y-2">
                      {job.profile.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {job.benefits && (
                  <div className="border-t pt-6">
                    <h4 className="font-bold text-gray-900 mb-3">Das bieten wir dir:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-600 mt-1">✔️</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="bewerbung" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bewirb dich jetzt!
            </h2>
            <p className="text-xl text-gray-600">
              Wir freuen uns darauf, dich kennenzulernen
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  So bewirbst du dich:
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Sende deine Bewerbungsunterlagen (Lebenslauf, optional Anschreiben) per E-Mail</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Wir melden uns innerhalb von 3 Werktagen bei dir</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Persönliches Kennenlerngespräch in entspannter Atmosphäre</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span>Schneller Start in deine neue berufliche Zukunft</span>
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-3">Kontakt für Bewerbungen:</h4>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">📧</span>
                    <a href="mailto:info@atclean.de" className="text-primary hover:underline font-medium">
                      info@atclean.de
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">📞</span>
                    <a href="tel:+4917687968242" className="text-primary hover:underline font-medium">
                      +49 176 87968242
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Hinweis:</strong> Auch Quereinsteiger sind herzlich willkommen! 
                  Wir bieten eine umfassende Einarbeitung und begleiten dich auf deinem Weg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Noch Fragen?
          </h2>
          <p className="text-xl mb-8">
            Ruf uns einfach an oder schreib uns eine E-Mail. Wir beantworten gerne alle deine Fragen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4917687968242"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
            >
              📞 Jetzt anrufen
            </a>
            <Link 
              to="/#contact"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition inline-block"
            >
              ✉️ Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
