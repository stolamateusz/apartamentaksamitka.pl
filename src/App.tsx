/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studios from './components/Studios';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth selection:bg-orange-200 selection:text-orange-900 antialiased">
      <Navbar />
      <Hero />
      <Studios />
      <Features />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}
