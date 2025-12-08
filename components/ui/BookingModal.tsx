import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { X, Check, Camera, LineChart, Drone, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  levelId: string;
  levelTitleId: string;
  hasMediaOptional?: boolean;
  hasVideoIncluded?: boolean;
  hasAnalysisOptional?: boolean;
  hasAnalysisIncluded?: boolean;
  packages: Array<{
    classes: number;
    priceId: string;
    perClassId: string;
    discount: number;
    isBestValue?: boolean;
  }>;
  singleClassPriceId: string;
  optionalMediaPriceId?: string;
  optionalAnalysisPriceId?: string;
  whatsappUrl: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  levelId,
  levelTitleId,
  hasMediaOptional,
  hasVideoIncluded,
  hasAnalysisOptional,
  hasAnalysisIncluded,
  packages,
  singleClassPriceId,
  optionalMediaPriceId,
  optionalAnalysisPriceId,
  whatsappUrl
}) => {
  const intl = useIntl();
  const [selectedPackage, setSelectedPackage] = useState<number>(1);
  const [addMedia, setAddMedia] = useState(false);
  const [addAnalysis, setAddAnalysis] = useState(false);
  const [addDrone, setAddDrone] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedPackage(1);
      setAddMedia(false);
      setAddAnalysis(false);
      setAddDrone(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Get selected package details
  const selectedPkg = packages.find(pkg => pkg.classes === selectedPackage);

  // Build WhatsApp message
  const buildWhatsAppMessage = () => {
    const levelTitle = intl.formatMessage({ id: levelTitleId });
    let message = `¡Hola! Me interesa reservar:\n\n`;
    message += `📋 *${levelTitle}*\n`;

    if (selectedPackage === 1) {
      message += `- 1 clase individual\n`;
    } else {
      const pkg = packages.find(p => p.classes === selectedPackage);
      message += `- Paquete de ${selectedPackage} clases (${pkg?.discount}% descuento)\n`;
    }

    // Included features
    message += `\n✅ *Incluido:*\n`;
    if (levelId === 'beginner') {
      message += `- Instructor certificado\n`;
      message += `- Equipo completo\n`;
      message += `- Seguro\n`;
      message += `- Fotos de la sesión\n`;
    } else if (levelId === 'intermediate') {
      message += `- Instructor certificado\n`;
      message += `- Equipo completo\n`;
      message += `- Seguro\n`;
      message += `- Video de la sesión\n`;
      message += `- Fotos de la sesión\n`;
    } else if (levelId === 'advanced') {
      message += `- Entrenador especializado\n`;
      message += `- Equipo completo\n`;
      message += `- Análisis de técnica\n`;
    }

    // Optionals
    const optionals = [];
    if (addMedia && hasMediaOptional) {
      optionals.push('📷 Video + Fotos de la sesión');
    }
    if (addAnalysis && hasAnalysisOptional) {
      optionals.push('📊 Análisis de técnica');
    }
    if (addDrone) {
      optionals.push('🚁 Video con drone (aéreo)');
    }

    if (optionals.length > 0) {
      message += `\n🎯 *Extras agregados:*\n`;
      optionals.forEach(opt => message += `- ${opt}\n`);
    }

    message += `\n¿Podrían darme más información sobre disponibilidad y precios?`;

    return encodeURIComponent(message);
  };

  const handleBook = () => {
    const message = buildWhatsAppMessage();
    window.open(`${whatsappUrl}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 pointer-events-none">
        <div
          className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto pointer-events-auto animate-slide-up sm:animate-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-3xl sm:rounded-t-2xl z-10">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-totora-dark">
                <FormattedMessage id="booking.modal.title" />
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 truncate">
                <FormattedMessage id={levelTitleId} />
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors ml-2 flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6 pb-24 sm:pb-6">
            {/* Package Selection */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-totora-dark mb-3 sm:mb-4">
                <FormattedMessage id="booking.modal.selectPackage" />
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {/* Single Class */}
                <button
                  onClick={() => setSelectedPackage(1)}
                  className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    selectedPackage === 1
                      ? 'border-totora-light bg-totora-light/5 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-left">
                      <div className="font-bold text-totora-dark text-sm sm:text-base">
                        <FormattedMessage id="booking.modal.singleClass" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-totora-dark mt-1">
                        <FormattedMessage id={singleClassPriceId} />
                      </div>
                    </div>
                    {selectedPackage === 1 && (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-totora-light rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-white sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Packages */}
                {packages.map((pkg) => (
                  <button
                    key={pkg.classes}
                    onClick={() => setSelectedPackage(pkg.classes)}
                    className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all ${
                      selectedPackage === pkg.classes
                        ? 'border-totora-light bg-totora-light/5 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {pkg.isBestValue && (
                      <div className="absolute -top-2 -right-2 bg-totora-yellow text-totora-dark text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                        <FormattedMessage id="booking.modal.bestValue" />
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <div className="text-left">
                        <div className="font-bold text-totora-dark text-sm sm:text-base">
                          {pkg.classes} <FormattedMessage id="booking.modal.classes" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-green-600 font-semibold">
                          <FormattedMessage id="surfSchoolPage.levels.save" values={{ discount: pkg.discount }} />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-totora-dark mt-1">
                          <FormattedMessage id={pkg.priceId} />
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600">
                          <FormattedMessage id={pkg.perClassId} />
                        </div>
                      </div>
                      {selectedPackage === pkg.classes && (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-totora-light rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-white sm:w-4 sm:h-4" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-totora-dark mb-3 sm:mb-4">
                <FormattedMessage id="booking.modal.addExtras" />
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {/* Media Optional */}
                {hasMediaOptional && !hasVideoIncluded && (
                  <label className="flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 cursor-pointer transition-all active:bg-gray-50">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <input
                        type="checkbox"
                        checked={addMedia}
                        onChange={(e) => setAddMedia(e.target.checked)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-totora-light rounded focus:ring-totora-light flex-shrink-0"
                      />
                      <Camera size={18} className="text-totora-dark flex-shrink-0 sm:w-5 sm:h-5" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-totora-dark text-sm sm:text-base truncate">
                          <FormattedMessage id={`surfSchoolPage.levels.${levelId}.optionalMedia`} />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <FormattedMessage id="booking.modal.perSession" />
                        </div>
                      </div>
                    </div>
                    {optionalMediaPriceId && (
                      <div className="font-bold text-totora-dark text-sm sm:text-base ml-2 flex-shrink-0">
                        <FormattedMessage id={optionalMediaPriceId} />
                      </div>
                    )}
                  </label>
                )}

                {/* Analysis Optional */}
                {hasAnalysisOptional && !hasAnalysisIncluded && (
                  <label className="flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 cursor-pointer transition-all active:bg-gray-50">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <input
                        type="checkbox"
                        checked={addAnalysis}
                        onChange={(e) => setAddAnalysis(e.target.checked)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-totora-light rounded focus:ring-totora-light flex-shrink-0"
                      />
                      <LineChart size={18} className="text-totora-dark flex-shrink-0 sm:w-5 sm:h-5" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-totora-dark text-sm sm:text-base truncate">
                          <FormattedMessage id={`surfSchoolPage.levels.${levelId}.optionalAnalysis`} />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <FormattedMessage id="booking.modal.perSession" />
                        </div>
                      </div>
                    </div>
                    {optionalAnalysisPriceId && (
                      <div className="font-bold text-totora-dark text-sm sm:text-base ml-2 flex-shrink-0">
                        <FormattedMessage id={optionalAnalysisPriceId} />
                      </div>
                    )}
                  </label>
                )}

                {/* Drone - Available for all levels */}
                <label className="flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 hover:border-blue-300 cursor-pointer transition-all active:bg-blue-100">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={addDrone}
                      onChange={(e) => setAddDrone(e.target.checked)}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-600 flex-shrink-0"
                    />
                    <Drone size={18} className="text-blue-600 flex-shrink-0 sm:w-5 sm:h-5" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-700 text-sm sm:text-base truncate">
                        <FormattedMessage id="surfSchoolPage.levels.optionalDrone" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        <FormattedMessage id="booking.modal.perSession" />
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-blue-600 text-sm sm:text-base ml-2 flex-shrink-0">
                    <FormattedMessage id="surfSchoolPage.levels.optionalDronePrice" />
                  </div>
                </label>
              </div>
            </div>

            {/* Info Note */}
            <div className="bg-totora-cream/30 rounded-xl p-3 sm:p-4 border border-totora-cream">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                <FormattedMessage id="booking.modal.note" />
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="fixed sm:sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-b-2xl shadow-2xl sm:shadow-none z-20">
            <Button
              onClick={handleBook}
              variant="primary"
              fullWidth
              className="text-base sm:text-lg py-3 sm:py-4 shadow-lg sm:shadow-md"
            >
              <ShoppingCart size={18} className="mr-2 sm:w-5 sm:h-5" />
              <FormattedMessage id="booking.modal.sendToWhatsApp" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
