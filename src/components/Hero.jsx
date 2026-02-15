export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video_header.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Ihr zuverlässiger Partner für Ihre Gebäudereinigung
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance">
          Ihr zuverlässiger Reinigungspartner in Südheide, Fassberg, Eschede, Celle, Burgdorf, Lehrte, Hannover und Umgebung
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-accent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
          </button>
          <a
            href="tel:+4917687968242"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg transition border-2 border-white"
          >
            📞 Anrufen
          </a>
        </div>
      </div>
    </div>
  );
}
