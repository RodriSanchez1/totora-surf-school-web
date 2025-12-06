import React from 'react';
import { FormattedMessage } from 'react-intl';
import { GOOGLE_MAPS_EMBED_URL } from '../../constants';

export const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-totora-cream to-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-3">
            <FormattedMessage id="location.title" />
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            <FormattedMessage id="location.subtitle" />
          </p>
        </div>

        {/* Google Maps */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[600px] border-4 border-white">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Totora Surf School Location"
          />
        </div>
      </div>
    </section>
  );
};
