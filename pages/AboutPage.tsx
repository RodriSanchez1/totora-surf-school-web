import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heart, Users, Award, Waves } from 'lucide-react';
import { WaveDivider } from '../components/ui/WaveDivider';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      titleId: "aboutPage.values.passion.title",
      descId: "aboutPage.values.passion.desc"
    },
    {
      icon: <Users size={32} />,
      titleId: "aboutPage.values.community.title",
      descId: "aboutPage.values.community.desc"
    },
    {
      icon: <Award size={32} />,
      titleId: "aboutPage.values.excellence.title",
      descId: "aboutPage.values.excellence.desc"
    },
    {
      icon: <Waves size={32} />,
      titleId: "aboutPage.values.tradition.title",
      descId: "aboutPage.values.tradition.desc"
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/indo/diego_surfing.webp"
            alt="Caballitos de Totora"
            className="w-full h-full object-cover scale-105"
            style={{ objectPosition: '50% 30%' }}

          />
          <div className="absolute inset-0 bg-gradient-to-b from-totora-dark/80 via-totora-dark/60 to-totora-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <FormattedMessage id="aboutPage.hero.title" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="aboutPage.hero.subtitle" />
          </p>
        </div>

        {/* Animated Wave Divider */}
        <WaveDivider position="bottom" fillColor="white" />
      </section>

      {/* Who Are We Section */}
      <section className="py-12 md:py-24 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4 md:mb-6">
              <FormattedMessage
                id="aboutPage.whoAreWe.title"
                values={{
                  highlight: (chunks) => <span className="text-totora-light">{chunks}</span>
                }}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
            <div className="space-y-4 md:space-y-6 text-gray-600 text-lg leading-relaxed">
              <p><FormattedMessage id="aboutPage.whoAreWe.p1" /></p>
              <p><FormattedMessage id="aboutPage.whoAreWe.p2" /></p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-totora-yellow/20 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/crew.webp"
                alt="Diego surfing in Huanchaco"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-totora-light/20 rounded-2xl transform -rotate-3"></div>
              <img
                src="/images/curvita.webp"
                alt="Totora Hostel"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-600 text-lg leading-relaxed order-1 md:order-2">
              <p><FormattedMessage id="aboutPage.whoAreWe.p3" /></p>
              <p><FormattedMessage id="aboutPage.whoAreWe.p4" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-totora-light/10 via-totora-yellow/5 to-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow h-full border-l-4 border-totora-light">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-totora-light/10 rounded-full flex items-center justify-center mr-4">
                    <Heart size={32} className="text-totora-light" />
                  </div>
                  <h3 className="text-3xl font-bold text-totora-dark">
                    <FormattedMessage id="aboutPage.mission.title" />
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <FormattedMessage id="aboutPage.mission.text" />
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow h-full border-l-4 border-totora-dark">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-totora-dark/10 rounded-full flex items-center justify-center mr-4">
                    <Waves size={32} className="text-totora-dark" />
                  </div>
                  <h3 className="text-3xl font-bold text-totora-dark">
                    <FormattedMessage id="aboutPage.vision.title" />
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <FormattedMessage id="aboutPage.vision.text" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-20 bg-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-3 md:mb-4">
              <FormattedMessage id="aboutPage.values.title" />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="aboutPage.values.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-totora-light/10 rounded-full flex items-center justify-center text-totora-dark mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-totora-dark mb-3">
                  <FormattedMessage id={value.titleId} />
                </h3>
                <p className="text-gray-600">
                  <FormattedMessage id={value.descId} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-3 md:mb-4">
              <FormattedMessage id="aboutPage.team.title" />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="aboutPage.team.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Diego */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-totora-yellow/20 rounded-full"></div>
                <img
                  src="/images/diego.webp"
                  alt="Diego Venegas"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-totora-dark mb-2">
                <FormattedMessage id="aboutPage.team.diego.name" />
              </h3>
              <p className="text-totora-light font-semibold mb-3">
                <FormattedMessage id="aboutPage.team.diego.role" />
              </p>
              <p className="text-gray-600">
                <FormattedMessage id="aboutPage.team.diego.bio" />
              </p>
            </div>

            {/* Laura */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-totora-yellow/20 rounded-full"></div>
                <img
                  src="/images/laura.webp"
                  alt="Laura"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-totora-dark mb-2">
                <FormattedMessage id="aboutPage.team.laura.name" />
              </h3>
              <p className="text-totora-light font-semibold mb-3">
                <FormattedMessage id="aboutPage.team.laura.role" />
              </p>
              <p className="text-gray-600">
                <FormattedMessage id="aboutPage.team.laura.bio" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
