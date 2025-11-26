import React from 'react';
import { FormattedMessage } from 'react-intl';

export const About: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-totora-yellow/20 rounded-2xl transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1627918341604-099719326e55?q=80&w=2070&auto=format&fit=crop" 
              alt="Caballitos de Totora en Huanchaco" 
              className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-totora-dark max-w-xs">
              <p className="text-sm font-semibold text-totora-dark">
                <FormattedMessage id="about.imageCaption" />
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-totora-light/10 text-totora-dark text-sm font-semibold mb-4">
              <FormattedMessage id="about.tag" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-totora-dark mb-6">
              <FormattedMessage 
                id="about.title"
                values={{
                  highlight: (chunks) => <span className="text-totora-light">{chunks}</span>
                }}
              />
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p><FormattedMessage id="about.p1" /></p>
              <p><FormattedMessage id="about.p2" /></p>
              <p><FormattedMessage id="about.p3" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};