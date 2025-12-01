import React from 'react';

interface SurfTripCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const SurfTripCard: React.FC<SurfTripCardProps> = ({
  name,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 relative">
      <div className="relative h-[500px] rounded-2xl overflow-hidden group">
        {/* Image */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-3">{name}</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
