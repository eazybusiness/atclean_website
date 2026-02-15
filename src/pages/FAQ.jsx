import { useState } from 'react';

const faqs = [
  {
    question: "Welche Reinigungsleistungen bieten Sie an?",
    answer: "Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: Grundreinigung, Unterhaltsreinigung, Bauendreinigung, Fensterreinigung, Hauswirtschaft und Winterdienst. Jede Leistung kann individuell an Ihre Bedürfnisse angepasst werden."
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer: "Unser Servicegebiet umfasst Südheide, Fassberg, Eschede, Celle, Burgdorf, Lehrte, Hannover und die umliegenden Gemeinden. Für spezielle Anfragen außerhalb dieser Gebiete kontaktieren Sie uns gerne."
  },
  {
    question: "Wie kann ich ein Angebot anfordern?",
    answer: "Sie können uns telefonisch unter +49 176 87968242 erreichen oder eine E-Mail an info@atclean.de senden. Wir erstellen Ihnen gerne ein unverbindliches, individuelles Angebot basierend auf Ihren spezifischen Anforderungen."
  },
  {
    question: "Sind Ihre Mitarbeiter geschult und versichert?",
    answer: "Ja, alle unsere Mitarbeiter sind professionell geschult und verfügen über die notwendigen Qualifikationen. Zudem sind wir vollständig versichert, sodass Sie sich keine Sorgen machen müssen."
  },
  {
    question: "Welche Reinigungsmittel verwenden Sie?",
    answer: "Wir setzen auf umweltfreundliche und materialschonende Reinigungsmittel, die sowohl effektiv als auch nachhaltig sind. Bei besonderen Anforderungen können wir auch spezielle Produkte einsetzen."
  },
  {
    question: "Können Sie auch außerhalb der regulären Geschäftszeiten reinigen?",
    answer: "Ja, wir bieten flexible Reinigungszeiten an, die sich an Ihre Arbeitszeiten und Bedürfnisse anpassen. Ob früh morgens, abends oder am Wochenende – wir finden eine passende Lösung."
  },
  {
    question: "Wie oft sollte eine Unterhaltsreinigung durchgeführt werden?",
    answer: "Die Häufigkeit hängt von der Nutzung und Art Ihrer Räumlichkeiten ab. Üblich sind tägliche, wöchentliche oder monatliche Intervalle. Wir beraten Sie gerne, welcher Rhythmus für Sie optimal ist."
  },
  {
    question: "Was ist der Unterschied zwischen Grund- und Unterhaltsreinigung?",
    answer: "Die Grundreinigung ist eine intensive, einmalige Tiefenreinigung, die hartnäckige Verschmutzungen entfernt. Die Unterhaltsreinigung erfolgt regelmäßig und erhält die Sauberkeit auf einem konstanten Niveau."
  },
  {
    question: "Benötige ich einen langfristigen Vertrag?",
    answer: "Nein, wir bieten sowohl einmalige Einsätze als auch langfristige Verträge an. Sie entscheiden, welche Lösung am besten zu Ihnen passt."
  },
  {
    question: "Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?",
    answer: "Ihre Zufriedenheit ist uns wichtig. Sollten Sie einmal nicht zufrieden sein, kontaktieren Sie uns bitte umgehend. Wir werden das Problem schnellstmöglich beheben und sicherstellen, dass Sie mit dem Ergebnis zufrieden sind."
  },
  {
    question: "Wie erfolgt die Abrechnung?",
    answer: "Die Abrechnung erfolgt transparent nach dem vereinbarten Leistungsumfang. Je nach Vereinbarung können wir monatlich, quartalsweise oder nach Einzeleinsätzen abrechnen."
  },
  {
    question: "Bieten Sie auch Notfall-Reinigungen an?",
    answer: "Ja, für dringende Fälle bieten wir auch kurzfristige Reinigungseinsätze an. Kontaktieren Sie uns telefonisch, und wir versuchen, Ihnen schnellstmöglich zu helfen."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Häufig gestellte Fragen</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Reinigungsdienstleistungen.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary transform transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-br from-accent to-secondary text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ihre Frage ist nicht dabei?
            </h3>
            <p className="text-lg mb-6">
              Kontaktieren Sie uns gerne direkt – wir helfen Ihnen weiter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917687968242"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                📞 +49 176 87968242
              </a>
              <a
                href="mailto:info@atclean.de"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
