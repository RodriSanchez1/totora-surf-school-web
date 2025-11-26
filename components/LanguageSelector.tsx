import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  const languages = [
    { code: 'en-US', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt-BR', label: 'PT' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <div className="relative group z-50">
      <button className="flex items-center gap-1 text-gray-700 hover:text-totora-dark transition-colors p-2">
        <Globe size={20} />
        <span className="font-medium text-sm">{languages.find(l => l.code === locale)?.label || 'EN'}</span>
      </button>
      
      <div className="absolute right-0 mt-0 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
        <div className="py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                locale === lang.code ? 'text-totora-dark font-bold bg-totora-light/10' : 'text-gray-600'
              }`}
            >
              {lang.label === 'EN' ? 'English' : 
               lang.label === 'ES' ? 'Español' : 
               lang.label === 'PT' ? 'Português' : 'Français'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};