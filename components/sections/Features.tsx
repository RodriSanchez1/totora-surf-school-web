import React from 'react';
import { MapPin, Award, Users, Anchor } from 'lucide-react';
import { FormattedMessage } from 'react-intl';

const FeatureItem: React.FC<{ icon: React.ReactNode; titleId: string; descId: string }> = ({ icon, titleId, descId }) => (
  <div className="flex flex-col items-center text-center p-8 bg-totora-cream rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-totora-light/20 group">
    <div className="p-4 bg-white text-totora-dark rounded-full mb-6 shadow-md group-hover:bg-totora-yellow group-hover:text-totora-dark transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-totora-dark mb-3">
      <FormattedMessage id={titleId} />
    </h3>
    <p className="text-gray-600 leading-relaxed">
      <FormattedMessage id={descId} />
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-totora-cream/40 to-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-totora-dark mb-4">
            <FormattedMessage id="features.title" />
          </h2>
          <div className="w-24 h-1 bg-totora-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<MapPin size={32} />}
            titleId="features.loc.title"
            descId="features.loc.desc"
          />
          <FeatureItem 
            icon={<Award size={32} />}
            titleId="features.instr.title"
            descId="features.instr.desc"
          />
          <FeatureItem 
            icon={<Users size={32} />}
            titleId="features.comm.title"
            descId="features.comm.desc"
          />
          <FeatureItem 
            icon={<Anchor size={32} />}
            titleId="features.cult.title"
            descId="features.cult.desc"
          />
        </div>
      </div>
    </section>
  );
};