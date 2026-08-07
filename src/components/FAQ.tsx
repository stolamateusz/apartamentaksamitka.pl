import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "O której godzinie rozpoczyna się i kończy doba hotelowa?",
    a: "Zameldowanie jest możliwe od godziny 15:00, natomiast wymeldowanie powinno nastąpić do godziny 11:00 w dniu wyjazdu. W miarę dostępności oferujemy elastyczne godziny - prosimy o wcześniejszy kontakt."
  },
  {
    q: "Czy na terenie obiektu znajduje się parking?",
    a: "Tak, dla naszych gości zapewniamy bezpłatny, prywatny parking bezpośrednio przy budynku. Nie wymaga on wcześniejszej rezerwacji."
  },
  {
    q: "Czy apartamenty są przyjazne zwierzętom?",
    a: "Kochamy zwierzęta! Małe psy i koty są u nas mile widziane po wcześniejszym uzgodnieniu. Może obowiązywać niewielka, jednorazowa opłata za sprzątanie po pupilu."
  },
  {
    q: "Czy w pokojach znajduje się sprzęt kuchenny?",
    a: "Tak, każde studio posiada własny, w pełni wyposażony aneks kuchenny (lodówka, płyta indukcyjna, czajnik, ekspres do kawy, podstawowe naczynia i garnki), co umożliwia przygotowanie własnych posiłków."
  },
  {
    q: "Jak wygląda proces zameldowania? Czy na miejscu jest recepcja?",
    a: "Oferujemy najwygodniejsze, bezkontaktowe zameldowanie. W dniu przyjazdu otrzymasz od nas bezpieczny kod do skrytki na klucze lub zamka elektronicznego."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Często zadawane pytania</h2>
          <p className="text-lg md:text-xl font-light text-gray-600">
            Masz pytania dotyczące pobytu? Sprawdź nasze odpowiedzi poniżej. 
            Jeśli nie znalazłeś tego, czego szukasz, chętnie pomożemy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-orange-300 bg-orange-50/50' : 'border-gray-100 bg-white hover:border-orange-200'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-xl text-blue-900 pr-8 leading-tight">{faq.q}</span>
                <ChevronDown 
                  className={`w-7 h-7 text-orange-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-600 font-light text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
