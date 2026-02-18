export default function Membership() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wir sind Mitglied von:
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/Berufsgenossenschaft_der_Bauwirtschaft.jpg`}
                alt="Berufsgenossenschaft der Bauwirtschaft"
                className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm text-gray-600 mt-3 text-center max-w-xs">
                Berufsgenossenschaft der Bauwirtschaft
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/Handwerkskammer_Braunschweig_Lüneburg_Stade.jpg`}
                alt="Handwerkskammer Braunschweig Lüneburg Stade"
                className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm text-gray-600 mt-3 text-center max-w-xs">
                Handwerkskammer Braunschweig Lüneburg Stade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
