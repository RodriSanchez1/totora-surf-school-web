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
import { WHATSAPP_URL } from '../constants';

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
      priceId: "surfSchoolPage.levels.beginner.price",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
      hasPackages: true,
      hasMediaOptional: true,
      hasVideoIncluded: false,
      hasAnalysisOptional: false,
      hasAnalysisIncluded: false
    },
    {
      id: 'intermediate',
      titleId: "surfSchoolPage.levels.intermediate.title",
      descId: "surfSchoolPage.levels.intermediate.desc",
      durationId: "surfSchoolPage.levels.intermediate.duration",
      priceId: "surfSchoolPage.levels.intermediate.price",
      image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop",
      hasPackages: true,
      hasMediaOptional: false,
      hasVideoIncluded: true,
      hasAnalysisOptional: true,
      hasAnalysisIncluded: false
    },
    {
      id: 'advanced',
      titleId: "surfSchoolPage.levels.advanced.title",
      descId: "surfSchoolPage.levels.advanced.desc",
      durationId: "surfSchoolPage.levels.advanced.duration",
      priceId: "surfSchoolPage.levels.advanced.price",
      image: "https://images.unsplash.com/photo-1459976893341-c0e8f3c8e5c4?q=80&w=2070&auto=format&fit=crop",
      hasPackages: true,
      hasMediaOptional: false,
      hasVideoIncluded: false,
      hasAnalysisOptional: false,
      hasAnalysisIncluded: true
    }
  ];

  // Included features count by level
  const getIncludedFeaturesCount = (levelId: string) => {
    if (levelId === 'beginner') return 4;
    if (levelId === 'intermediate') return 5;
    if (levelId === 'advanced') return 3;
    return 0;
  };

  // Packages by level
  const getPackagesForLevel = (levelId: string) => {
    if (levelId === 'beginner') {
      return [
        { classes: 5, priceId: 'surfSchoolPage.levels.beginner.package5Price', perClassId: 'surfSchoolPage.levels.beginner.package5PerClass', discount: 10 },
        { classes: 10, priceId: 'surfSchoolPage.levels.beginner.package10Price', perClassId: 'surfSchoolPage.levels.beginner.package10PerClass', discount: 15, isBestValue: true },
        { classes: 15, priceId: 'surfSchoolPage.levels.beginner.package15Price', perClassId: 'surfSchoolPage.levels.beginner.package15PerClass', discount: 20 }
      ];
    } else if (levelId === 'intermediate') {
      return [
        { classes: 5, priceId: 'surfSchoolPage.levels.intermediate.package5Price', perClassId: 'surfSchoolPage.levels.intermediate.package5PerClass', discount: 10 },
        { classes: 10, priceId: 'surfSchoolPage.levels.intermediate.package10Price', perClassId: 'surfSchoolPage.levels.intermediate.package10PerClass', discount: 15, isBestValue: true },
        { classes: 15, priceId: 'surfSchoolPage.levels.intermediate.package15Price', perClassId: 'surfSchoolPage.levels.intermediate.package15PerClass', discount: 20 }
      ];
    } else if (levelId === 'advanced') {
      return [
        { classes: 5, priceId: 'surfSchoolPage.levels.advanced.package5Price', perClassId: 'surfSchoolPage.levels.advanced.package5PerClass', discount: 10 },
        { classes: 10, priceId: 'surfSchoolPage.levels.advanced.package10Price', perClassId: 'surfSchoolPage.levels.advanced.package10PerClass', discount: 15, isBestValue: true },
        { classes: 15, priceId: 'surfSchoolPage.levels.advanced.package15Price', perClassId: 'surfSchoolPage.levels.advanced.package15PerClass', discount: 20 }
      ];
    }
    return [];
  };

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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-4">
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

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {levels.map((level, index) => (
              <div key={level.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
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
                <div className="p-6 flex flex-col flex-1">
                  {/* Description - Fixed height */}
                  <p className="text-gray-600 mb-6 leading-relaxed h-[160px] overflow-hidden">
                    <FormattedMessage id={level.descId} />
                  </p>

                  {/* Base Price - Fixed height */}
                  <div className="mb-4 text-center py-4 bg-totora-cream/50 rounded-lg h-[88px] flex flex-col justify-center">
                    <div className="text-3xl font-bold text-totora-dark">
                      <FormattedMessage id={level.priceId} />
                    </div>
                    <div className="text-sm text-gray-600">
                      <FormattedMessage id="surfSchoolPage.levels.perClass" />
                    </div>
                  </div>

                  {/* What's Included Section - Fixed height */}
                  <div className="mb-4 p-4 bg-white rounded-lg border-2 border-totora-light/20 h-[240px]">
                    <h4 className="text-sm font-bold text-totora-dark mb-3 uppercase tracking-wide">
                      <FormattedMessage id="surfSchoolPage.levels.whatsIncluded" />
                    </h4>
                    <ul className="space-y-2">
                      {Array.from({ length: getIncludedFeaturesCount(level.id) }).map((_, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-totora-light mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            <FormattedMessage id={`surfSchoolPage.levels.${level.id}.included${i + 1}`} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons - Fixed height */}
                  <div className="mb-3 h-[155px]">
                    <h4 className="text-sm font-semibold text-totora-dark mb-3">
                      <FormattedMessage id="surfSchoolPage.levels.optional" />
                    </h4>
                    <div className="space-y-2">
                      {/* Media Optional for Beginner */}
                      {level.hasMediaOptional && (
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Camera size={16} className="text-totora-dark" />
                            <span className="text-sm text-gray-700">
                              <FormattedMessage id={`surfSchoolPage.levels.${level.id}.optionalMedia`} />
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-totora-dark">
                            <FormattedMessage id={`surfSchoolPage.levels.${level.id}.optionalMediaPrice`} />
                          </span>
                        </div>
                      )}

                      {/* Analysis Optional for Intermediate */}
                      {level.hasAnalysisOptional && (
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <LineChart size={16} className="text-totora-dark" />
                            <span className="text-sm text-gray-700">
                              <FormattedMessage id={`surfSchoolPage.levels.${level.id}.optionalAnalysis`} />
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-totora-dark">
                            <FormattedMessage id={`surfSchoolPage.levels.${level.id}.optionalAnalysisPrice`} />
                          </span>
                        </div>
                      )}

                      {/* Drone Optional - for ALL levels */}
                      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center gap-2">
                          <Drone size={16} className="text-blue-600" />
                          <span className="text-sm text-gray-700 font-medium">
                            <FormattedMessage id="surfSchoolPage.levels.optionalDrone" />
                          </span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">
                          <FormattedMessage id="surfSchoolPage.levels.optionalDronePrice" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Packages Accordion */}
                  {level.hasPackages && (
                    <div className="mb-6">
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
                          {getPackagesForLevel(level.id).map((pkg) => (
                            <div key={pkg.classes} className="flex items-center justify-between bg-white rounded-lg p-3 border-2 border-totora-light/20 hover:border-totora-light/40 transition-colors">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-bold text-totora-dark text-sm">
                                    <FormattedMessage id={`surfSchoolPage.levels.${level.id}.package${pkg.classes}`} />
                                  </span>
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
                  )}

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1"></div>

                  {/* CTA Button */}
                  <Button href={WHATSAPP_URL} variant="primary" fullWidth>
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
          <Button href={WHATSAPP_URL} variant="primary" className="text-lg px-10 py-4">
            <FormattedMessage id="surfSchoolPage.cta.button" />
          </Button>
        </div>
      </section>
    </main>
  );
};
