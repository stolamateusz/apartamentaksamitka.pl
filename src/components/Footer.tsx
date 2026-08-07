import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-blue-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                A
              </div>
              <span className="font-extrabold text-3xl tracking-widest uppercase">Aksamitka</span>
            </div>
            <p className="text-blue-200 font-light leading-relaxed text-lg">
              Luksusowe studia stworzone z pasją. Idealne miejsce na wypoczynek, pobyt służbowy i relaks z zachowaniem najwyższych standardów gościnności.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold mb-8 text-orange-400 border-b-2 border-blue-900 pb-4 inline-block tracking-tight">Szybki Kontakt</h3>
            <ul className="space-y-6 text-blue-100">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/50 rounded-xl text-yellow-400 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-300 font-medium mb-1">Zadzwoń do nas</p>
                  <a href="tel:+48123456789" className="text-xl font-bold hover:text-white transition-colors">+48 123 456 789</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/50 rounded-xl text-yellow-400 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-300 font-medium mb-1">Napisz do nas</p>
                  <a href="mailto:kontakt@apartamentaksamitka.pl" className="text-xl font-bold hover:text-white transition-colors">kontakt@aksamitka.pl</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold mb-8 text-orange-400 border-b-2 border-blue-900 pb-4 inline-block tracking-tight">Lokalizacja</h3>
            <ul className="space-y-6 text-blue-100">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/50 rounded-xl text-yellow-400 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-300 font-medium mb-1">Adres apartamentu</p>
                  <p className="text-xl font-light leading-relaxed">ul. Słoneczna 15/2<br/>00-000 Twoje Miasto</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Apartament Aksamitka. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin obiektu</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
