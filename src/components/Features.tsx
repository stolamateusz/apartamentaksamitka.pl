import { motion } from 'motion/react';
import { Wifi, Car, Coffee, Tv, Wind, ShieldCheck } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: "Szybkie Wi-Fi", desc: "Darmowy internet światłowodowy, idealny do pracy i rozrywki." },
  { icon: Car, title: "Bezpłatny Parking", desc: "Prywatne, bezpieczne miejsce parkingowe bezpośrednio na terenie obiektu." },
  { icon: Coffee, title: "Pełna Kuchnia", desc: "Ekspres do kawy, lodówka, płyta indukcyjna oraz elegancka zastawa stołowa." },
  { icon: Tv, title: "Smart TV", desc: "Duży telewizor z dostępem do popularnych platform streamingowych (Netflix, Max)." },
  { icon: Wind, title: "Klimatyzacja", desc: "Indywidualnie sterowana klimatyzacja, zapewniająca idealną temperaturę." },
  { icon: ShieldCheck, title: "Bezpieczeństwo", desc: "Bezkontaktowe zameldowanie i bezpieczne, ciche osiedle." },
];

export default function Features() {
  return (
    <section id="udogodnienia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Odpocznij w luksusie</h2>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
            Twój komfort to nasz priorytet. Zadbaliśmy o każdy szczegół, aby Twój pobyt 
            w Apartamencie Aksamitka był bezproblemowy i relaksujący.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-orange-200 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
