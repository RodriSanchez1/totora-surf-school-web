import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract representation of the Swirl Logo */}
      <img src="/images/logoWithoutText.webp" alt="Totora Surf School Logo" className="h-full w-auto" />
      <div className="flex flex-col justify-center min-w-max">
        <span className="font-bold text-totora-dark text-base md:text-lg leading-tight tracking-tight uppercase">Totora</span>
        <span className="font-semibold text-totora-light text-[10px] md:text-xs tracking-widest uppercase">Surf School</span>
      </div>
    </div>
  );
};