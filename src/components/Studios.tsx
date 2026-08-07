import { motion } from 'motion/react';
import { BedDouble, Maximize, Users } from 'lucide-react';

const studios = [
  { 
    id: 1, 
    name: "Studio nr 1", 
    area: "22 m²", 
    beds: "2 łóżka podwójne", 
    capacity: "Max 4 osoby",
    imgDesc: "Zdjęcie Studia nr 1: Kadr obejmujący dwa wygodne łóżka podwójne. Widoczna pościel premium, nad łóżkami nowoczesne kinkiety rzucające ciepłe światło. Akcenty w kolorze żółtym." 
  },
  { 
    id: 2, 
    name: "Studio nr 2", 
    area: "28 m²", 
    beds: "1 łóżko podwójne + 1 duże łóżko podwójne", 
    capacity: "Max 4 osoby",
    imgDesc: "Zdjęcie Studia nr 2: Najbardziej przestronne wnętrze. Widać imponujące, duże łóżko (King Size) z narzutą pomarańczową oraz mniejsze łóżko, stylowe dodatki." 
  },
  { 
    id: 3, 
    name: "Studio nr 3", 
    area: "20 m²", 
    beds: "2 rozkładane sofy", 
    capacity: "Max 4 osoby",
    imgDesc: "Zdjęcie Studia nr 3: Bardzo elastyczna przestrzeń. W kadrze dwie eleganckie, złożone sofy w kolorach ziemi i musztardy na tle jasnej ściany. Funkcjonalnie i nowocześnie." 
  },
  { 
    id: 4, 
    name: "Studio nr 4", 
    area: "18 m²", 
    beds: "1 duże łóżko podwójne", 
    capacity: "Max 2 osoby",
    imgDesc: "Zdjęcie Studia nr 4: Kameralne, romantyczne studio dla par. Centralnym punktem jest duże, bardzo wygodne łóżko. Ciasny, przytulny kadr skupiający się na detalach." 
  }
];

export default function Studios() {
  return (
    <section id="studia" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Wybierz swój apartament</h2>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
            Oferujemy 4 unikalne studia, dostosowane do różnych potrzeb. Każde z nich wykończone jest z najwyższą dbałością o detale, z zachowaniem motywu przewodniego – ciepła aksamitki.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studios.map((studio, index) => (
            <motion.div 
              key={studio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="h-64 bg-slate-100 border-b-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-orange-500 font-bold text-sm mb-2 tracking-widest uppercase z-10">📸 MIEJSCE NA ZDJĘCIE</span>
                <p className="text-slate-600 font-medium text-sm leading-relaxed z-10 max-w-sm">{studio.imgDesc}</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-blue-900 mb-6">{studio.name}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Maximize className="w-6 h-6 text-orange-500 mr-4" />
                      <span className="font-semibold text-lg w-28">Metraż:</span> 
                      <span className="font-light text-lg">{studio.area}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <BedDouble className="w-6 h-6 text-orange-500 mr-4" />
                      <span className="font-semibold text-lg w-28">Łóżka:</span> 
                      <span className="font-light text-lg">{studio.beds}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-6 h-6 text-orange-500 mr-4" />
                      <span className="font-semibold text-lg w-28">Pojemność:</span> 
                      <span className="font-light text-lg">{studio.capacity}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-blue-50 text-blue-900 font-extrabold text-lg rounded-2xl hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Sprawdź dostępność
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
