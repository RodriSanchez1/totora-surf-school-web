import React from 'react';
import { Button } from '../ui/Button';
import { BOOKING_URL } from '../../constants';
import { ChevronDown } from 'lucide-react';
import { FormattedMessage } from 'react-intl';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/sunset.webp"
          alt="Surfing in Huanchaco"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-totora-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          <FormattedMessage 
            id="hero.title" 
            values={{
              highlight: (chunks) => <span className="text-totora-yellow">{chunks}</span>
            }}
          />
          <br className="hidden md:block"/>
          <span className="block text-2xl md:text-4xl mt-2 font-semibold text-white">
            <FormattedMessage id="hero.title.sub" />
          </span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 font-light mb-10 drop-shadow-md">
          <FormattedMessage id="hero.subtitle" />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={BOOKING_URL} variant="primary" className="text-lg px-10 py-4 shadow-xl hover:scale-105">
            <FormattedMessage id="hero.cta" />
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};