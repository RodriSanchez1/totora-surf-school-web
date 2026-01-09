import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Globe } from 'lucide-react';
import type { UrlLocale } from '../../i18n/localeUtils';

export const LanguageSelector: React.FC = () => {
  const { urlLocale, setLocale } = useLanguage();

  const languages: { code: UrlLocale; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'fr', label: 'FR', name: 'Français' },
  ];

  return (
    <div className="relative group z-50">
      <button className="flex items-center gap-1 text-gray-700 hover:text-totora-dark transition-colors p-2">
        <Globe size={20} />
        <span className="font-medium text-sm">
          {languages.find((l) => l.code === urlLocale)?.label || 'ES'}
        </span>
      </button>

      <div className="absolute right-0 mt-0 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
        <div className="py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                urlLocale === lang.code
                  ? 'text-totora-dark font-bold bg-totora-light/10'
                  : 'text-gray-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
