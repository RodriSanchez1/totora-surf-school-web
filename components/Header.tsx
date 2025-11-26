import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { NAVIGATION_LINKS, BOOKING_URL } from '../constants';
import { FormattedMessage } from 'react-intl';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Logo className="h-10 md:h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-totora-dark font-medium transition-colors"
              >
                <FormattedMessage id={link.id} />
              </a>
            ))}
            <div className="border-l border-gray-300 pl-6 flex items-center gap-4">
              <LanguageSelector />
              <Button href={BOOKING_URL} variant="primary" className="shadow-lg animate-pulse hover:animate-none">
                <FormattedMessage id="nav.book" />
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-totora-dark hover:text-totora-light p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block w-full text-center py-2 text-lg text-gray-800 font-medium hover:text-totora-dark hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FormattedMessage id={link.id} />
              </a>
            ))}
            <Button href={BOOKING_URL} variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
              <FormattedMessage id="nav.book" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};