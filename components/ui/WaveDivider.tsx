import React from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  className?: string;
  fillColor?: string;
  variant?: 'default' | 'inverted';
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  position = 'bottom',
  className = '',
  fillColor = 'white',
  variant = 'default'
}) => {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';
  const rotateClass = variant === 'inverted' ? 'rotate-180' : '';

  return (
    <div className={`absolute ${positionClass} left-0 w-full z-10 ${rotateClass} ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[80px] md:h-[100px]"
        style={{ display: 'block', verticalAlign: 'bottom' }}
      >
        {/* Back wave - slower animation */}
        <path
          d="M0,60 C320,100 420,20 740,60 C1060,100 1120,40 1440,60 L1440,121 L0,121 Z"
          fill={`rgba(255,255,255,0.3)`}
          style={{ fill: fillColor === 'white' ? 'rgba(255,255,255,0.3)' : `${fillColor}33` }}
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,60 C320,100 420,20 740,60 C1060,100 1120,40 1440,60 L1440,121 L0,121 Z;
              M0,40 C320,80 420,0 740,40 C1060,80 1120,20 1440,40 L1440,121 L0,121 Z;
              M0,60 C320,100 420,20 740,60 C1060,100 1120,40 1440,60 L1440,121 L0,121 Z
            "
          />
        </path>

        {/* Middle wave - medium animation */}
        <path
          d="M0,80 C360,120 480,40 840,80 C1200,120 1320,60 1440,80 L1440,121 L0,121 Z"
          fill={`rgba(255,255,255,0.5)`}
          style={{ fill: fillColor === 'white' ? 'rgba(255,255,255,0.5)' : `${fillColor}80` }}
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,80 C360,120 480,40 840,80 C1200,120 1320,60 1440,80 L1440,121 L0,121 Z;
              M0,60 C360,100 480,20 840,60 C1200,100 1320,40 1440,60 L1440,121 L0,121 Z;
              M0,80 C360,120 480,40 840,80 C1200,120 1320,60 1440,80 L1440,121 L0,121 Z
            "
          />
        </path>

        {/* Front wave - faster animation */}
        <path
          d="M0,90 C400,130 560,50 960,90 C1360,130 1400,70 1440,90 L1440,121 L0,121 Z"
          fill={fillColor}
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0,90 C400,130 560,50 960,90 C1360,130 1400,70 1440,90 L1440,121 L0,121 Z;
              M0,70 C400,110 560,30 960,70 C1360,110 1400,50 1440,70 L1440,121 L0,121 Z;
              M0,90 C400,130 560,50 960,90 C1360,130 1400,70 1440,90 L1440,121 L0,121 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};
