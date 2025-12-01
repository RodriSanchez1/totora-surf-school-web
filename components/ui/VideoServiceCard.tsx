import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VideoServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VideoServiceCard: React.FC<VideoServiceCardProps> = ({
  title,
  description,
  icon: Icon
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
      {/* Icon */}
      <div className="bg-totora-light/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-totora-light" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-totora-dark mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
