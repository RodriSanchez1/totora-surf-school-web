import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TRIPADVISOR_URL, HOSTELWORLD_URL, GOOGLE_MAPS_URL } from '../../constants';
import { FormattedMessage } from 'react-intl';

interface ReviewCardProps {
  name: string;
  textId: string;
  titleId: string;
  platform: 'tripadvisor' | 'hostelworld' | 'google';
  platformNameId: string;
  rating: number;
  maxRating: number;
  url: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  textId,
  titleId,
  platform,
  platformNameId,
  rating,
  maxRating,
  url
}) => {
  const platformColors = {
    tripadvisor: 'bg-[#34E0A1] text-white',
    hostelworld: 'bg-[#FF6B35] text-white',
    google: 'bg-[#4285F4] text-white'
  };

  const starCount = Math.round(rating);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full transform transition-all hover:scale-105 hover:shadow-xl">
      {/* Platform Badge & Rating */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${platformColors[platform]}`}>
          <FormattedMessage id={platformNameId} />
        </span>
        <div className="flex items-center gap-2">
          <div className="flex text-totora-yellow">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < starCount ? "currentColor" : "none"}
                className={i < starCount ? "" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-700">
            {rating}/{maxRating}
          </span>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="mb-4 text-totora-yellow">
        <Quote size={32} className="fill-current opacity-20" />
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        {titleId && (
          <h4 className="font-bold text-gray-800 mb-3 text-lg">
            <FormattedMessage id={titleId} />
          </h4>
        )}
        <p className="text-gray-600 italic text-base leading-relaxed mb-6">
          "<FormattedMessage id={textId} />"
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="mt-auto border-t pt-4 border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-totora-light/20 rounded-full flex items-center justify-center text-totora-dark font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-totora-dark text-sm">{name}</p>
            <p className="text-xs text-gray-400">
              <FormattedMessage id="testimonials.verified" defaultMessage="Verified Reviewer" />
            </p>
          </div>
        </div>

        {/* View Review Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-totora-dark hover:text-totora-light transition-colors group"
        >
          <FormattedMessage id="testimonials.viewReview" defaultMessage="View" />
          <ExternalLink size={14} className="transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const reviews: ReviewCardProps[] = [
    {
      name: "Andrea M.",
      titleId: "testimonials.review1.title",
      textId: "testimonials.review1.text",
      platform: "tripadvisor",
      platformNameId: "testimonials.platform.tripadvisor",
      rating: 5,
      maxRating: 5,
      url: TRIPADVISOR_URL
    },
    {
      name: "Carlos R.",
      titleId: "testimonials.review2.title",
      textId: "testimonials.review2.text",
      platform: "hostelworld",
      platformNameId: "testimonials.platform.hostelworld",
      rating: 9.2,
      maxRating: 10,
      url: HOSTELWORLD_URL
    },
    {
      name: "Sophie L.",
      titleId: "testimonials.review3.title",
      textId: "testimonials.review3.text",
      platform: "google",
      platformNameId: "testimonials.platform.google",
      rating: 4.8,
      maxRating: 5,
      url: GOOGLE_MAPS_URL
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-totora-cream scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Platform Links Footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-gray-200">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-[#34E0A1] transition-colors group"
          >
            <FormattedMessage id="testimonials.moreOn" defaultMessage="More reviews on" />
            {" "}
            <span className="underline">TripAdvisor</span>
            <ExternalLink size={16} className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <span className="text-gray-300">•</span>

          <a
            href={HOSTELWORLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-[#FF6B35] transition-colors group"
          >
            <span className="underline">Hostelworld</span>
            <ExternalLink size={16} className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <span className="text-gray-300">•</span>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-[#4285F4] transition-colors group"
          >
            <span className="underline">Google Maps</span>
            <ExternalLink size={16} className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
