import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Waves, Users, Award, Calendar, Camera, Shield, Video, Drone, LineChart, ChevronDown, Sparkles, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WaveDivider } from '../components/ui/WaveDivider';
import { ImageCarousel } from '../components/ui/ImageCarousel';
import { SurfTripCard } from '../components/ui/SurfTripCard';
import { EquipmentCard } from '../components/ui/EquipmentCard';
import { VideoServiceCard } from '../components/ui/VideoServiceCard';
import { VideoBackground } from '../components/ui/VideoBackground';
import { BOOKING_URL } from '../constants';

export const SurfSchoolPage: React.FC = () => {
  const [expandedPackages, setExpandedPackages] = useState<number | null>(null);

  const features = [
    { icon: <Users size={24} />, titleId: "surfSchoolPage.features.instructors" },
    { icon: <Award size={24} />, titleId: "surfSchoolPage.features.certified" },
    { icon: <Calendar size={24} />, titleId: "surfSchoolPage.features.flexible" },
    { icon: <Camera size={24} />, titleId: "surfSchoolPage.features.video" },
    { icon: <Shield size={24} />, titleId: "surfSchoolPage.features.safety" },
    { icon: <Waves size={24} />, titleId: "surfSchoolPage.features.equipment" }
  ];

  const levels = [
    {
      id: 'beginner',
      titleId: "surfSchoolPage.levels.beginner.title",
      descId: "surfSchoolPage.levels.beginner.desc",
      durationId: "surfSchoolPage.levels.beginner.duration",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
      hasVideoAnalysis: false
    },
    {
      id: 'intermediate',
      titleId: "surfSchoolPage.levels.intermediate.title",
      descId: "surfSchoolPage.levels.intermediate.desc",
      durationId: "surfSchoolPage.levels.intermediate.duration",
      image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop",
      hasVideoAnalysis: true
    },
    {
      id: 'advanced',
      titleId: "surfSchoolPage.levels.advanced.title",
      descId: "surfSchoolPage.levels.advanced.desc",
      durationId: "surfSchoolPage.levels.advanced.duration",
      image: "https://images.unsplash.com/photo-1459976893341-c0e8f3c8e5c4?q=80&w=2070&auto=format&fit=crop",
      hasVideoAnalysis: true
    }
  ];

  const packages = [
    { classes: 5, priceId: 'surfSchoolPage.levels.package5Price', perClassId: 'surfSchoolPage.levels.package5PerClass', discount: 10 },
    { classes: 10, priceId: 'surfSchoolPage.levels.package10Price', perClassId: 'surfSchoolPage.levels.package10PerClass', discount: 15, isBestValue: true },
    { classes: 15, priceId: 'surfSchoolPage.levels.package15Price', perClassId: 'surfSchoolPage.levels.package15PerClass', discount: 20 }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/puemape_boys.webp"
            alt="Surf School"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-totora-dark/80 via-totora-dark/60 to-totora-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <FormattedMessage id="surfSchoolPage.hero.title" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="surfSchoolPage.hero.subtitle" />
          </p>
        </div>

        {/* Animated Wave Divider */}
        <WaveDivider position="bottom" fillColor="white" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-totora-yellow/20 rounded-2xl transform -rotate-3"></div>
              <img
                src="/images/pareja.webp"
                alt="Surf instructor teaching"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
                <FormattedMessage
                  id="surfSchoolPage.intro.title"
                  values={{
                    highlight: (chunks) => <span className="text-totora-light">{chunks}</span>
                  }}
                />
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p><FormattedMessage id="surfSchoolPage.intro.p1" /></p>
                <p><FormattedMessage id="surfSchoolPage.intro.p2" /></p>
                <p><FormattedMessage id="surfSchoolPage.intro.p3" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
              <FormattedMessage id="surfSchoolPage.features.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="surfSchoolPage.features.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-4">
                <div className="w-12 h-12 bg-totora-light/10 rounded-full flex items-center justify-center text-totora-dark flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-totora-dark">
                    <FormattedMessage id={feature.titleId} />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
              <FormattedMessage id="surfSchoolPage.levels.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="surfSchoolPage.levels.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div key={level.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={level.image}
                    alt={`${level.id} surf class`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-totora-dark/80 via-totora-dark/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      <FormattedMessage id={level.titleId} />
                    </h3>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                      <FormattedMessage id={level.durationId} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <FormattedMessage id={level.descId} />
                  </p>

                  {/* Base Price */}
                  <div className="mb-4 text-center py-4 bg-totora-cream/50 rounded-lg">
                    <div className="text-3xl font-bold text-totora-dark">
                      <FormattedMessage id="surfSchoolPage.levels.basePrice" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <FormattedMessage id="surfSchoolPage.levels.perClass" />
                    </div>
                  </div>

                  {/* Optional Add-ons */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-totora-dark mb-2">
                      <FormattedMessage id="surfSchoolPage.levels.optional" />
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center gap-2">
                          <Camera size={16} className="text-totora-dark" />
                          <span className="text-sm text-gray-700">
                            <FormattedMessage id="surfSchoolPage.levels.optionalPhotos" />
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-totora-dark">
                          <FormattedMessage id="surfSchoolPage.levels.optionalPhotosPrice" />
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center gap-2">
                          <Video size={16} className="text-totora-dark" />
                          <span className="text-sm text-gray-700">
                            <FormattedMessage id="surfSchoolPage.levels.optionalVideos" />
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-totora-dark">
                          <FormattedMessage id="surfSchoolPage.levels.optionalVideosPrice" />
                        </span>
                      </div>
                      {/* Video Analysis Badge for Intermediate/Advanced */}
                      {level.hasVideoAnalysis && (
                        <div className="flex items-start gap-2 bg-totora-light/10 rounded-lg p-2 border border-totora-light/20">
                          <Sparkles size={16} className="text-totora-light mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-totora-light">
                              <FormattedMessage id="surfSchoolPage.levels.videoAnalysisBadge" />
                            </div>
                            <div className="text-xs text-gray-600 mt-0.5">
                              <FormattedMessage id="surfSchoolPage.levels.videoAnalysisDesc" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Packages Accordion */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedPackages(expandedPackages === index ? null : index)}
                      className="flex items-center justify-between w-full bg-totora-cream/50 rounded-lg p-3 hover:bg-totora-cream transition-colors"
                    >
                      <span className="font-semibold text-totora-dark text-sm">
                        <FormattedMessage id="surfSchoolPage.levels.viewPackages" />
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform text-totora-dark ${expandedPackages === index ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedPackages === index && (
                      <div className="space-y-2 mt-3">
                        {packages.map((pkg) => (
                          <div key={pkg.classes} className="flex items-center justify-between bg-white rounded-lg p-3 border-2 border-totora-light/20 hover:border-totora-light/40 transition-colors">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-totora-dark text-sm">
                                  <FormattedMessage id={`surfSchoolPage.levels.package${pkg.classes}`} />
                                </span>
                                {pkg.isBestValue && (
                                  <span className="bg-totora-yellow text-totora-dark text-xs px-2 py-0.5 rounded-full font-semibold">
                                    <FormattedMessage id="surfSchoolPage.levels.bestValue" />
                                  </span>
                                )}
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                                  <FormattedMessage id="surfSchoolPage.levels.save" values={{ discount: pkg.discount }} />
                                </span>
                              </div>
                              <span className="text-xs text-gray-600">
                                <FormattedMessage id={pkg.perClassId} />
                              </span>
                            </div>
                            <span className="text-lg font-bold text-totora-light ml-2">
                              <FormattedMessage id={pkg.priceId} />
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button href={BOOKING_URL} variant="primary" fullWidth>
                    <FormattedMessage id="surfSchoolPage.levels.bookButton" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <section className="py-20 bg-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
              <FormattedMessage id="surfSchoolPage.equipment.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="surfSchoolPage.equipment.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <EquipmentCard
              title={<FormattedMessage id="surfSchoolPage.equipment.boards.title" />}
              description={<FormattedMessage id="surfSchoolPage.equipment.boards.desc" />}
              features={[
                <FormattedMessage id="surfSchoolPage.equipment.boards.feature1" />,
                <FormattedMessage id="surfSchoolPage.equipment.boards.feature2" />,
                <FormattedMessage id="surfSchoolPage.equipment.boards.feature3" />,
                <FormattedMessage id="surfSchoolPage.equipment.boards.feature4" />
              ]}
              icon={Waves}
              imageUrl="/images/school/boards.webp"
              imageAlt={<FormattedMessage id="surfSchoolPage.equipment.boards.alt" />}
            />
            <EquipmentCard
              title={<FormattedMessage id="surfSchoolPage.equipment.wetsuits.title" />}
              description={<FormattedMessage id="surfSchoolPage.equipment.wetsuits.desc" />}
              features={[
                <FormattedMessage id="surfSchoolPage.equipment.wetsuits.feature1" />,
                <FormattedMessage id="surfSchoolPage.equipment.wetsuits.feature2" />,
                <FormattedMessage id="surfSchoolPage.equipment.wetsuits.feature3" />,
                <FormattedMessage id="surfSchoolPage.equipment.wetsuits.feature4" />
              ]}
              icon={Shield}
              imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
              imageAlt={<FormattedMessage id="surfSchoolPage.equipment.wetsuits.alt" />}
            />
          </div>
        </div>
      </section>

      {/* Video Services Section */}
      <VideoBackground
        videoSources={{
          mobile: '/videos/huanchaco_drone_720p.mp4',
          tablet: '/videos/huanchaco_drone_720p.mp4',
          desktop: '/videos/huanchaco_drone_1080p.mp4'
        }}
        poster="/videos/huanchaco_drone_poster.webp"
        overlay="dark"
        overlayOpacity={0.65}
        className="py-20"
        enableReducedMotion={true}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              <FormattedMessage id="surfSchoolPage.videoServices.title" />
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              <FormattedMessage id="surfSchoolPage.videoServices.subtitle" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <VideoServiceCard
              title={<FormattedMessage id="surfSchoolPage.videoServices.camera.title" />}
              description={<FormattedMessage id="surfSchoolPage.videoServices.camera.desc" />}
              icon={Camera}
            />
            <VideoServiceCard
              title={<FormattedMessage id="surfSchoolPage.videoServices.drone.title" />}
              description={<FormattedMessage id="surfSchoolPage.videoServices.drone.desc" />}
              icon={Drone}
            />
            <VideoServiceCard
              title={<FormattedMessage id="surfSchoolPage.videoServices.analysis.title" />}
              description={<FormattedMessage id="surfSchoolPage.videoServices.analysis.desc" />}
              icon={LineChart}
            />
          </div>
        </div>
      </VideoBackground>

      {/* Surf Trips Section */}
      <section className="py-20 bg-totora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
              <FormattedMessage id="surfSchoolPage.surfTrips.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <FormattedMessage id="surfSchoolPage.surfTrips.subtitle" />
            </p>
          </div>

          <ImageCarousel>
            <SurfTripCard
              name={<FormattedMessage id="surfSchoolPage.surfTrips.chicama.name" />}
              description={<FormattedMessage id="surfSchoolPage.surfTrips.chicama.desc" />}
              imageUrl="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop"
              imageAlt={<FormattedMessage id="surfSchoolPage.surfTrips.chicama.alt" />}
            />
            <SurfTripCard
              name={<FormattedMessage id="surfSchoolPage.surfTrips.pacasmayo.name" />}
              description={<FormattedMessage id="surfSchoolPage.surfTrips.pacasmayo.desc" />}
              imageUrl="https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop"
              imageAlt={<FormattedMessage id="surfSchoolPage.surfTrips.pacasmayo.alt" />}
            />
            <SurfTripCard
              name={<FormattedMessage id="surfSchoolPage.surfTrips.puemape.name" />}
              description={<FormattedMessage id="surfSchoolPage.surfTrips.puemape.desc" />}
              imageUrl="https://images.unsplash.com/photo-1459976893341-c0e8f3c8e5c4?q=80&w=2070&auto=format&fit=crop"
              imageAlt={<FormattedMessage id="surfSchoolPage.surfTrips.puemape.alt" />}
            />
            <SurfTripCard
              name={<FormattedMessage id="surfSchoolPage.surfTrips.lobitos.name" />}
              description={<FormattedMessage id="surfSchoolPage.surfTrips.lobitos.desc" />}
              imageUrl="https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=2070&auto=format&fit=crop"
              imageAlt={<FormattedMessage id="surfSchoolPage.surfTrips.lobitos.alt" />}
            />
          </ImageCarousel>
        </div>
      </section>

      {/* Caballito de Totora Section */}
      <section className="py-20 bg-totora-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <FormattedMessage
                  id="surfSchoolPage.totora.title"
                  values={{
                    highlight: (chunks) => <span className="text-totora-yellow">{chunks}</span>
                  }}
                />
              </h2>
              <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
                <p><FormattedMessage id="surfSchoolPage.totora.p1" /></p>
                <p><FormattedMessage id="surfSchoolPage.totora.p2" /></p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/caballito.webp"
                alt="Caballitos de Totora"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-totora-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-6">
            <FormattedMessage id="surfSchoolPage.cta.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            <FormattedMessage id="surfSchoolPage.cta.subtitle" />
          </p>
          <Button href={BOOKING_URL} variant="primary" className="text-lg px-10 py-4">
            <FormattedMessage id="surfSchoolPage.cta.button" />
          </Button>
        </div>
      </section>
    </main>
  );
};
