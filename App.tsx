import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Features />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;