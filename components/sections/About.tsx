import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-br from-white via-totora-cream/30 to-white scroll-mt-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-totora-yellow/20 rounded-2xl transform -rotate-3"></div>
            <img
              src="/images/donpepe.webp"
              alt="Don Pepe restaurant"
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
            <h2 className="text-3xl md:text-4xl font-bold text-totora-dark mb-6">
              <FormattedMessage
                id="about.title"
                values={{
                  highlight: (chunks) => <span className="text-totora-light">{chunks}</span>
                }}
              />
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p><FormattedMessage id="about.p1" /></p>
              <p><FormattedMessage id="about.p2" /></p>
              <p><FormattedMessage id="about.p3" /></p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-totora-dark font-semibold text-lg hover:text-totora-light transition-colors group"
            >
              <FormattedMessage id="about.learnMore" />
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};