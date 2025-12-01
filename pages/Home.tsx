import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Features } from '../components/sections/Features';
import { CallToAction } from '../components/sections/CallToAction';

export const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Features />
      <CallToAction />
    </main>
  );
};
