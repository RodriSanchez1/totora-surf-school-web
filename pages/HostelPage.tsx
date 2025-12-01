import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Wifi, Coffee, Utensils, MapPin, Users, Bed } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WaveDivider } from '../components/ui/WaveDivider';
import { BOOKING_URL } from '../constants';

export const HostelPage: React.FC = () => {
  const amenities = [
    { icon: <Wifi size={24} />, titleId: "hostelPage.amenities.wifi" },
    { icon: <Coffee size={24} />, titleId: "hostelPage.amenities.coffee" },
    { icon: <Utensils size={24} />, titleId: "hostelPage.amenities.kitchen" },
    { icon: <MapPin size={24} />, titleId: "hostelPage.amenities.location" },
    { icon: <Users size={24} />, titleId: "hostelPage.amenities.common" },
    { icon: <Bed size={24} />, titleId: "hostelPage.amenities.comfort" }
  ];

  const roomTypes = [
    {
      titleId: "hostelPage.rooms.shared.title",
      descId: "hostelPage.rooms.shared.desc",
      priceId: "hostelPage.rooms.shared.price",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      titleId: "hostelPage.rooms.private.title",
      descId: "hostelPage.rooms.private.desc",
      priceId: "hostelPage.rooms.private.price",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
    },
    {
      titleId: "hostelPage.rooms.oceanview.title",
      descId: "hostelPage.rooms.oceanview.desc",
      priceId: "hostelPage.rooms.oceanview.price",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sunset.jpg"
            alt="Oceanfront Hostel"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-totora-dark/80 via-totora-dark/60 to-totora-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <FormattedMessage id="hostelPage.hero.title" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="hostelPage.hero.subtitle" />
          </p>
        </div>

        {/* Animated Wave Divider */}
        <WaveDivider position="bottom" fillColor="white" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-totora-dark mb-6">
                <FormattedMessage
                  id="hostelPage.intro.title"
                  values={{
                    highlight: (chunks) => <span className="text-totora-light">{chunks}</span>
                  }}
                />
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p><FormattedMessage id="hostelPage.intro.p1" /></p>
                <p><FormattedMessage id="hostelPage.intro.p2" /></p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-totora-yellow/20 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/beachfront.webp"
                alt="Hostel common area"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
              <FormattedMessage id="hostelPage.amenities.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="hostelPage.amenities.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4">
                <div className="w-12 h-12 bg-totora-light/10 rounded-full flex items-center justify-center text-totora-dark flex-shrink-0">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-totora-dark">
                    <FormattedMessage id={amenity.titleId} />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
              <FormattedMessage id="hostelPage.rooms.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="hostelPage.rooms.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt="Room type"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-totora-dark mb-3">
                    <FormattedMessage id={room.titleId} />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <FormattedMessage id={room.descId} />
                  </p>
                  <div className="text-totora-light font-bold text-xl mb-4">
                    <FormattedMessage id={room.priceId} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-totora-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <FormattedMessage id="hostelPage.cta.title" />
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            <FormattedMessage id="hostelPage.cta.subtitle" />
          </p>
          <Button href={BOOKING_URL} variant="primary" className="text-lg px-10 py-4">
            <FormattedMessage id="hostelPage.cta.button" />
          </Button>
        </div>
      </section>
    </main>
  );
};
