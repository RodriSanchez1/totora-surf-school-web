import React, { createContext, useState, useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { messages } from './messages';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState('en-US');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language;
    
    // Check for direct match or language code match (e.g., 'es-ES' -> 'es')
    if (messages[browserLang as keyof typeof messages]) {
      setLocale(browserLang);
    } else {
      const shortLang = browserLang.split('-')[0];
      if (messages[shortLang as keyof typeof messages]) {
        setLocale(shortLang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]} defaultLocale="en-US">
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};