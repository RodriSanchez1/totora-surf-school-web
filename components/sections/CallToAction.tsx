import React from 'react';
import { Button } from '../ui/Button';
import { WHATSAPP_URL } from '../../constants';
import { FormattedMessage } from 'react-intl';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-totora-dark relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-totora-light/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-totora-yellow/5 rounded-tr-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          <FormattedMessage id="cta.title" />
        </h2>
        <Button
          href={WHATSAPP_URL}
          variant="primary"
          className="text-lg md:text-xl px-12 py-5 shadow-2xl hover:shadow-totora-yellow/50 transform hover:-translate-y-1 font-bold"
        >
          <FormattedMessage id="cta.button" />
        </Button>
      </div>
    </section>
  );
};