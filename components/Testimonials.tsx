import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TRIPADVISOR_URL } from '../constants';
import { FormattedMessage } from 'react-intl';

const ReviewCard: React.FC<{ name: string; textId: string; titleId: string }> = ({ name, textId, titleId }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full transform transition-transform hover:scale-105">
    <div className="mb-4 text-totora-yellow flex justify-between items-start">
      <Quote size={40} className="fill-current opacity-20" />
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    </div>
    <div className="flex-grow">
      {titleId && <h4 className="font-bold text-gray-800 mb-2"><FormattedMessage id={titleId} /></h4>}
      <p className="text-gray-600 italic text-base leading-relaxed mb-6">"<FormattedMessage id={textId} />"</p>
    </div>
    <div className="mt-auto border-t pt-4 border-gray-100 flex items-center gap-3">
      <div className="w-10 h-10 bg-totora-light/20 rounded-full flex items-center justify-center text-totora-dark font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-totora-dark text-sm">{name}</p>
        <p className="text-xs text-gray-400"><FormattedMessage id="testimonials.via" /></p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Andrea M.",
      titleId: "testimonials.review1.title",
      textId: "testimonials.review1.text"
    },
    {
      name: "Carlos R.",
      titleId: "testimonials.review2.title",
      textId: "testimonials.review2.text"
    },
    {
      name: "Sophie L.",
      titleId: "testimonials.review3.title",
      textId: "testimonials.review3.text"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white relative overflow-hidden scroll-mt-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-totora-light/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-totora-yellow/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
            <FormattedMessage id="testimonials.title" />
          </h2>
          <p className="text-xl text-gray-600">
            <FormattedMessage id="testimonials.subtitle" />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="text-center">
          <a 
            href={TRIPADVISOR_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-totora-dark font-semibold hover:text-totora-light transition-colors border-b-2 border-totora-yellow pb-1 group"
          >
            <FormattedMessage id="testimonials.link" />
            <ExternalLink size={16} className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};