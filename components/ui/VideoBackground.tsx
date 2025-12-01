import React, { useRef, useState, useEffect } from 'react';

interface VideoBackgroundProps {
  videoSources: {
    mobile?: string;
    tablet?: string;
    desktop: string;
  };
  poster?: string;
  overlay?: 'light' | 'dark' | 'gradient' | 'none';
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  enableReducedMotion?: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSources,
  poster,
  overlay = 'dark',
  overlayOpacity = 0.65,
  className = '',
  children,
  enableReducedMotion = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [currentSource, setCurrentSource] = useState('');

  // Detectar prefers-reduced-motion (accesibilidad)
  useEffect(() => {
    if (!enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = () => {
      setShouldPlay(!mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableReducedMotion]);

  // Selección responsiva de video según tamaño de pantalla
  useEffect(() => {
    const updateSource = () => {
      const width = window.innerWidth;

      let newSource = videoSources.desktop;

      if (width < 768 && videoSources.mobile) {
        newSource = videoSources.mobile;
      } else if (width < 1024 && videoSources.tablet) {
        newSource = videoSources.tablet;
      }

      setCurrentSource(newSource);
    };

    updateSource();
    window.addEventListener('resize', updateSource);
    return () => window.removeEventListener('resize', updateSource);
  }, [videoSources]);

  // IntersectionObserver para lazy loading y play/pause automático
  useEffect(() => {
    if (!containerRef.current || !videoRef.current || !shouldPlay) return;

    const options = {
      root: null,
      rootMargin: '50px', // Empezar a cargar 50px antes de entrar al viewport
      threshold: 0.25 // Activar cuando 25% es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Cargar video si no está cargado
          if (!isLoaded) {
            video.load();
            setIsLoaded(true);
          }

          // Reproducir video
          video.play().catch((error) => {
            console.warn('Video autoplay failed:', error);
          });
        } else {
          // Pausar cuando sale del viewport (ahorra recursos)
          video.pause();
        }
      });
    }, options);

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      videoRef.current?.pause();
    };
  }, [shouldPlay, isLoaded]);

  // Generar clase CSS para overlay
  const getOverlayClass = () => {
    if (overlay === 'none') return '';

    const opacity = Math.round(overlayOpacity * 100);

    switch (overlay) {
      case 'light':
        return `bg-white/${opacity}`;
      case 'dark':
        return `bg-black/${opacity}`;
      case 'gradient':
        return `bg-gradient-to-b from-black/${opacity} via-black/${Math.round(opacity * 0.6)} to-black/${opacity}`;
      default:
        return `bg-black/${opacity}`;
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Video o Poster de Fondo */}
      <div className="absolute inset-0 z-0">
        {shouldPlay && !videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay={false} // Controlado por IntersectionObserver
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            disablePictureInPicture
            onError={() => {
              console.error('Video failed to load');
              setVideoError(true);
            }}
            onLoadedData={() => setIsLoaded(true)}
          >
            {currentSource && <source src={currentSource} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
        ) : poster ? (
          <img
            src={poster}
            alt="Background"
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* Overlay oscuro */}
        {overlay !== 'none' && (
          <div className={`absolute inset-0 ${getOverlayClass()}`} />
        )}
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
