import React from 'react';
import { Home, Waves, Map, Video } from 'lucide-react';
import { FormattedMessage, useIntl } from 'react-intl';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleId: string;
  descId: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleId, descId, image }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl h-96">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img src={image} alt="Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-totora-dark via-totora-dark/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
    </div>
    
    {/* Content */}
    <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-totora-yellow text-totora-dark transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 border-l-4 border-totora-yellow pl-3">
        <FormattedMessage id={titleId} />
      </h3>
      <p className="text-gray-100 text-sm md:text-base leading-relaxed">
        <FormattedMessage id={descId} />
      </p>
    </div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={24} />,
      titleId: "services.hostel.title",
      descId: "services.hostel.desc",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Waves size={24} />,
      titleId: "services.classes.title",
      descId: "services.classes.desc",
      image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Map size={24} />,
      titleId: "services.trips.title",
      descId: "services.trips.desc",
      image: "https://images.unsplash.com/photo-1466065478351-46387d833333?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Video size={24} />,
      titleId: "services.video.title",
      descId: "services.video.desc",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-totora-cream scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
            <FormattedMessage id="services.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <FormattedMessage id="services.subtitle" />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};