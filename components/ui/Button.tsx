import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent bg-totora-yellow text-totora-dark hover:bg-yellow-400 focus:ring-totora-yellow",
    secondary: "border-transparent bg-totora-dark text-white hover:bg-blue-900 focus:ring-totora-dark",
    outline: "border-totora-dark text-totora-dark bg-transparent hover:bg-totora-dark hover:text-white focus:ring-totora-dark"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};