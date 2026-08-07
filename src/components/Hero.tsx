import { motion } from 'motion/react';
import { MapPin, CalendarDays } from 'lucide-react';

export default function Hero() {
  return (
    <div id="o-nas" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-900 border-b-8 border-orange-500">
      
      {/* Ciemna nakładka w tle */}
      <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex-grow flex flex-col justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-orange-500/20 text-orange-300 font-semibold text-sm mb-6 border border-orange-500/30 backdrop-blur-sm tracking-widest uppercase">
            Twój idealny wypoczynek
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            Witamy w <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              Apartamencie Aksamitka
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Komfort, spokój i niezapomniane chwile w wyjątkowym wnętrzu zainspirowanym ciepłymi barwami słońca.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#studia" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <CalendarDays className="w-5 h-5" />
              Wybierz Studio
            </a>
            <a href="#galeria" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Odkryj wnętrza
            </a>
          </div>
        </motion.div>
      </div>

      {/* Instrukcja do zdjęcia - przeniesiona na dół, aby nie nachodziła na główny tekst */}
      <div className="relative z-10 w-full max-w-4xl px-4 mt-8">
        <div className="bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border-2 border-dashed border-slate-500 text-center shadow-xl">
          <p className="text-orange-400 font-extrabold text-xl mb-3 tracking-tight">📸 WYTYCZNE DO ZDJĘCIA GŁÓWNEGO (HERO)</p>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
            Tutaj powinno znaleźć się szerokie, zapierające dech w piersiach ujęcie najpiękniejszego wnętrza (np. Studia 2). Jasne, rozświetlone naturalnym słońcem pomieszczenie. Na zdjęciu muszą być dobrze widoczne ciepłe, pomarańczowe i żółte akcenty dekoracyjne (poduszki, zasłony, żywe kwiaty aksamitki). Kadr budzący uczucie relaksu i przytulnego luksusu.
          </p>
        </div>
      </div>
    </div>
  );
}
