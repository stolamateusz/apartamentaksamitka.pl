export default function Gallery() {
  const images = [
    { title: "Aneks kuchenny", desc: "Jasne szafki, lśniący ekspres do kawy, złote detale i akcenty w kolorze żółtym. W kadrze widać świeże owoce lub bukiet aksamitek." },
    { title: "Łazienka", desc: "Nowoczesna, przeszklona kabina prysznicowa. Duże lustro z podświetleniem LED. Na półce ułożone puszyste, pomarańczowe ręczniki." },
    { title: "Strefa wypoczynkowa", desc: "Przestronny salon z wygodną, głęboką sofą. Mnóstwo miękkich poduszek w odcieniach rudości i musztardowej żółci. Przez okno wpada popołudniowe słońce." },
    { title: "Detale i wykończenie", desc: "Zbliżenie makro na wysokiej jakości pościel, elegancką lampkę nocną rzucającą ciepłe światło oraz mały wazonik z aksamitką." }
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Galeria Wnętrz</h2>
          <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Przytulne przestrzenie, dbałość o detale i nowoczesne wykończenie.
            Zobacz, co czeka na Ciebie w Apartamencie Aksamitka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-3xl aspect-[4/3] bg-slate-50 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center transition-all hover:bg-orange-50/50 hover:border-orange-300">
              <span className="text-orange-500 font-extrabold text-xl mb-4 uppercase tracking-widest">📸 MIEJSCE NA ZDJĘCIE</span>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{img.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed max-w-sm">{img.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
