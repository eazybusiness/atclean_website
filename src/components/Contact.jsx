import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@atclean.de?subject=Kontaktanfrage von ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0ANachricht:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wir freuen uns auf Ihre Kontaktaufnahme
          </h2>
          <p className="text-xl text-gray-600">
            Nehmen Sie Kontakt mit uns auf und vereinbaren Sie einen unverbindlichen Termin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/atclean-logo.png`}
                  alt="A-Team Gebäudereinigung Logo" 
                  className="h-16 w-auto object-contain mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h3 className="text-2xl font-bold text-gray-900">Kontaktinformationen</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <a href="tel:+4917687968242" className="text-primary hover:text-blue-700">
                      +49 176 87968242
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-900">E-Mail</p>
                    <a href="mailto:info@atclean.de" className="text-primary hover:text-blue-700">
                      info@atclean.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900">Servicegebiet</p>
                    <p className="text-gray-600">
                      Südheide, Fassberg, Eschede, Celle, Burgdorf, Lehrte, Hannover und Umgebung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Sprechzeiten</h3>
              <p className="text-lg mb-4">
                Wir sind für Sie da und freuen uns auf Ihre Anfrage!
              </p>
              <p className="text-sm opacity-90">
                Kontaktieren Sie uns telefonisch oder per E-Mail. Wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
