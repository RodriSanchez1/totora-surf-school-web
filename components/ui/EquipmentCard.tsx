import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EquipmentCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-totora-yellow rounded-full p-3">
          <Icon className="w-6 h-6 text-totora-dark" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-totora-dark mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Features List */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-totora-yellow mt-1">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
