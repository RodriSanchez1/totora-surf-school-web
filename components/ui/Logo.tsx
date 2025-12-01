import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract representation of the Swirl Logo */}
<<<<<<< HEAD
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="#FECB46" strokeWidth="4" fill="white"/>
        <path d="M50 10 C 70 10, 90 30, 90 50 C 90 80, 60 90, 50 90 C 30 90, 10 70, 10 50 C 10 20, 40 10, 50 10" fill="#004E86" opacity="0.9" />
        <path d="M50 25 C 65 25, 75 40, 75 55 C 75 75, 55 80, 50 80 C 35 80, 25 65, 25 50 C 25 35, 40 25, 50 25" fill="#4AA0D8" />
        <path d="M50 40 C 58 40, 62 48, 62 55 C 62 65, 55 70, 50 70 C 42 70, 38 60, 38 52 C 38 45, 45 40, 50 40" fill="#FECB46" />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-totora-dark text-lg leading-tight tracking-tight uppercase">Totora</span>
        <span className="font-semibold text-totora-light text-xs tracking-widest uppercase">Surf School</span>
=======
      <img src="/images/logoWithoutText.webp" alt="Totora Surf School Logo" className="h-full w-auto" />
      <div className="flex flex-col justify-center min-w-max">
        <span className="font-bold text-totora-dark text-base md:text-lg leading-tight tracking-tight uppercase">Totora</span>
        <span className="font-semibold text-totora-light text-[10px] md:text-xs tracking-widest uppercase">Surf School</span>
>>>>>>> 5fa91d5 (Initial commit)
      </div>
    </div>
  );
};