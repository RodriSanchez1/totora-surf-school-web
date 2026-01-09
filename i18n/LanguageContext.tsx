import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { messages } from './messages';
import {
  urlLocaleToInternal,
  internalLocaleToUrl,
  isValidUrlLocale,
  type UrlLocale,
  type InternalLocale,
  SUPPORTED_URL_LOCALES,
  localeInfo,
} from './localeUtils';

interface LanguageContextType {
  locale: InternalLocale;
  urlLocale: UrlLocale;
  setLocale: (urlLocale: UrlLocale) => void;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  urlLocale: UrlLocale;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, urlLocale }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Convert URL locale to internal locale for react-intl
  const locale = useMemo(() => urlLocaleToInternal(urlLocale), [urlLocale]);

  // Update document lang attribute for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = urlLocale;
  }, [urlLocale]);

  // Function to change locale (navigates to new URL)
  const setLocale = (newUrlLocale: UrlLocale) => {
    if (newUrlLocale === urlLocale) return;

    // Get current path without locale prefix
    const pathWithoutLocale = location.pathname.replace(/^\/(en|es|pt|fr)/, '') || '/';
    const newPath = `/${newUrlLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    navigate(newPath + location.search + location.hash);
  };

  // Helper to generate localized paths
  const getLocalizedPath = (path: string): string => {
    // Remove leading slash if present, then add locale prefix
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${urlLocale}${cleanPath ? `/${cleanPath}` : ''}`;
  };

  const value = useMemo(
    () => ({
      locale,
      urlLocale,
      setLocale,
      getLocalizedPath,
    }),
    [locale, urlLocale, location.pathname]
  );

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider
        locale={locale}
        messages={messages[locale as keyof typeof messages]}
        defaultLocale="en-US"
      >
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

// Hook to get URL locale from route params
export const useUrlLocale = (): UrlLocale => {
  const { lang } = useParams<{ lang: string }>();
  if (lang && isValidUrlLocale(lang)) {
    return lang;
  }
  return 'es'; // Default fallback
};
