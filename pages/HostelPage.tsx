import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Wifi, Coffee, Utensils, MapPin, Users, Bed, X, ChevronLeft, ChevronRight, Send, Calendar, User, Home, MessageSquare, UserRound } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WaveDivider } from '../components/ui/WaveDivider';
import { DateInput } from '../components/ui/DateInput';
import { WHATSAPP_URL } from '../constants';

interface BookingFormRef {
  selectRoom: (roomType: string) => void;
}

const BookingForm = forwardRef<BookingFormRef>((props, ref) => {
  const intl = useIntl();
  const locale = intl.locale; // Obtener el idioma actual

  // Calcular fechas por defecto
  const getDefaultDates = () => {
    const today = new Date();
    const checkInDate = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

    const checkOutDate = new Date(today);
    checkOutDate.setDate(checkOutDate.getDate() + 2); // 2 días después
    const checkOutFormatted = checkOutDate.toISOString().split('T')[0];

    return { checkInDate, checkOutFormatted };
  };

  const { checkInDate, checkOutFormatted } = getDefaultDates();

  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    checkIn: checkInDate,
    checkOut: checkOutFormatted,
    roomType: 'privateBalcony',
    message: ''
  });

  useImperativeHandle(ref, () => ({
    selectRoom: (roomType: string) => {
      setFormData(prev => ({ ...prev, roomType }));
    }
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };

      // Validar fechas cuando se modifica checkIn o checkOut
      if (name === 'checkIn' && newData.checkOut && value > newData.checkOut) {
        // Si checkIn es posterior a checkOut, ajustar checkOut a 2 días después
        const checkInDate = new Date(value);
        checkInDate.setDate(checkInDate.getDate() + 2);
        newData.checkOut = checkInDate.toISOString().split('T')[0];
      } else if (name === 'checkOut' && newData.checkIn && value < newData.checkIn) {
        // Si checkOut es anterior a checkIn, ajustar checkOut a 2 días después de checkIn
        const checkInDate = new Date(newData.checkIn);
        checkInDate.setDate(checkInDate.getDate() + 2);
        newData.checkOut = checkInDate.toISOString().split('T')[0];
      }

      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomTypeName = intl.formatMessage({ id: `hostelPage.rooms.${formData.roomType}.title` });
    const guestsKey = formData.guests === 'more' ? 'hostelPage.form.guestsMore' : `hostelPage.form.guests${formData.guests}`;
    const guestsText = intl.formatMessage({ id: guestsKey });

    const text = `Hola Totora Surf School, estoy interesado en reservar:

*Nombre:* ${formData.name}
*Huéspedes:* ${guestsText}
*Check-in:* ${formData.checkIn}
*Check-out:* ${formData.checkOut}
*Habitación:* ${roomTypeName}
*Mensaje:* ${formData.message}

Vi en la web que hay descuento por reservar directo.`;

    const encodedText = encodeURIComponent(text);
    window.open(`${WHATSAPP_URL}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-totora-dark mb-2">
          <FormattedMessage id="hostelPage.form.title" />
        </h3>
        <p className="text-totora-light font-semibold">
          <FormattedMessage id="hostelPage.form.subtitle" />
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <User size={18} className="text-totora-light" />
              <FormattedMessage id="hostelPage.form.name" />
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-totora-light focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Users size={18} className="text-totora-light" />
              <FormattedMessage id="hostelPage.form.guests" />
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-totora-light focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="1">{intl.formatMessage({ id: 'hostelPage.form.guests1' })}</option>
              <option value="2">{intl.formatMessage({ id: 'hostelPage.form.guests2' })}</option>
              <option value="3">{intl.formatMessage({ id: 'hostelPage.form.guests3' })}</option>
              <option value="4">{intl.formatMessage({ id: 'hostelPage.form.guests4' })}</option>
              <option value="5">{intl.formatMessage({ id: 'hostelPage.form.guests5' })}</option>
              <option value="more">{intl.formatMessage({ id: 'hostelPage.form.guestsMore' })}</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-totora-light" />
              <FormattedMessage id="hostelPage.form.checkIn" />
            </label>
            <DateInput
              name="checkIn"
              value={formData.checkIn}
              onChange={(value) => handleChange({ target: { name: 'checkIn', value } } as any)}
              min={checkInDate}
              required
              locale={locale}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-totora-light" />
              <FormattedMessage id="hostelPage.form.checkOut" />
            </label>
            <DateInput
              name="checkOut"
              value={formData.checkOut}
              onChange={(value) => handleChange({ target: { name: 'checkOut', value } } as any)}
              min={formData.checkIn}
              required
              locale={locale}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <Home size={18} className="text-totora-light" />
            <FormattedMessage id="hostelPage.form.roomType" />
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-totora-light focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="privateBalcony">{intl.formatMessage({ id: 'hostelPage.rooms.privateBalcony.title' })}</option>
            <option value="privateOcean">{intl.formatMessage({ id: 'hostelPage.rooms.privateOcean.title' })}</option>
            <option value="privateStandard">{intl.formatMessage({ id: 'hostelPage.rooms.privateStandard.title' })}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <MessageSquare size={18} className="text-totora-light" />
            <FormattedMessage id="hostelPage.form.message" />
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-totora-light focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
        </div>

        <Button type="submit" variant="primary" fullWidth className="flex items-center justify-center gap-2 text-lg">
          <Send size={20} />
          <FormattedMessage id="hostelPage.form.submit" />
        </Button>
      </form>
    </div>
  );
});

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
    "/images/sunset.jpg",
    "/images/beachfront.webp"
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-20 bg-totora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
            <FormattedMessage id="hostelPage.gallery.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <FormattedMessage id="hostelPage.gallery.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-white/90 p-3 rounded-full">
                  <Users size={24} className="text-totora-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-totora-light transition-colors"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>
          
          <button 
            className="absolute left-4 text-white hover:text-totora-light transition-colors hidden md:block"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={images[selectedImage]} 
            alt="Gallery Fullscreen" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            className="absolute right-4 text-white hover:text-totora-light transition-colors hidden md:block"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export const HostelPage: React.FC = () => {
  const bookingFormRef = useRef<BookingFormRef>(null);
  const bookingSectionRef = useRef<HTMLElement>(null);

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
      titleId: "hostelPage.rooms.privateBalcony.title",
      descId: "hostelPage.rooms.privateBalcony.desc",
      price1Id: "hostelPage.rooms.privateBalcony.price1",
      price2Id: "hostelPage.rooms.privateBalcony.price2",
      image: "/public/images/hostel/balconyroom5.jpg",
      roomType: "privateBalcony"
    },
    {
      titleId: "hostelPage.rooms.privateOcean.title",
      descId: "hostelPage.rooms.privateOcean.desc",
      price1Id: "hostelPage.rooms.privateOcean.price1",
      price2Id: "hostelPage.rooms.privateOcean.price2",
      image: "/public/images/hostel/searoomview2.jpg",
      roomType: "privateOcean"
    },
    {
      titleId: "hostelPage.rooms.privateStandard.title",
      descId: "hostelPage.rooms.privateStandard.desc",
      price1Id: "hostelPage.rooms.privateStandard.price1",
      price2Id: "hostelPage.rooms.privateStandard.price2",
      image: "/public/images/hostel/standardroom4.jpg",
      roomType: "privateStandard"
    }
  ];

  const handleSelectRoom = (roomType: string) => {
    // Seleccionar la habitación en el formulario
    bookingFormRef.current?.selectRoom(roomType);

    // Hacer scroll al formulario con un pequeño delay para que la selección se complete
    setTimeout(() => {
      if (bookingSectionRef.current) {
        const headerOffset = 50; // Ajusta según la altura del header
        const elementPosition = bookingSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

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
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-totora-dark mb-4">
              <FormattedMessage id="hostelPage.rooms.title" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              <FormattedMessage id="hostelPage.rooms.subtitle" />
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {roomTypes.map((room, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={room.image}
                      alt="Room type"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                       <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 border border-white/30">
                          <Users size={14} />
                          <FormattedMessage id="hostelPage.rooms.sharedBathroom" />
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-3 md:space-y-5 px-2 md:px-0">
                  <h3 className="text-2xl md:text-4xl font-bold text-totora-dark leading-tight">
                    <FormattedMessage id={room.titleId} />
                  </h3>

                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    <FormattedMessage id={room.descId} />
                  </p>

                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">Precio por noche</p>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-totora-light/10 rounded-full flex items-center justify-center">
                          <UserRound size={16} className="text-totora-dark" />
                        </div>
                        <div className="text-2xl font-bold text-totora-light">
                          <FormattedMessage id={room.price1Id} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-totora-light/10 rounded-full flex items-center justify-center">
                          <Users size={16} className="text-totora-dark" />
                        </div>
                        <div className="text-2xl font-bold text-totora-light">
                          <FormattedMessage id={room.price2Id} />
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => handleSelectRoom(room.roomType)}
                      className="mt-4"
                    >
                      Lo quiero
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Booking Form Section */}
      <section ref={bookingSectionRef} className="py-20 bg-totora-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/beachfront.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <FormattedMessage id="hostelPage.cta.title" />
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                <FormattedMessage id="hostelPage.cta.subtitle" />
              </p>
            </div>

            <div>
              <BookingForm ref={bookingFormRef} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
