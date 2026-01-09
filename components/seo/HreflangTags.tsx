import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SUPPORTED_URL_LOCALES, localeInfo, type UrlLocale } from '../../i18n/localeUtils';

// Base URL for the site - update this for production
const BASE_URL = 'https://totorasurfschool.com';

export const HreflangTags: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingTags.forEach((tag) => tag.remove());

    // Get current path without locale prefix
    const pathWithoutLocale = location.pathname.replace(/^\/(en|es|pt|fr)/, '') || '/';
    const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

    // Add hreflang tags for each supported locale
    SUPPORTED_URL_LOCALES.forEach((urlLocale: UrlLocale) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = localeInfo[urlLocale].hreflang;
      link.href = `${BASE_URL}/${urlLocale}${cleanPath}`;
      document.head.appendChild(link);
    });

    // Add x-default tag (points to Spanish as primary)
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${BASE_URL}/es${cleanPath}`;
    document.head.appendChild(xDefault);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    (canonical as HTMLLinkElement).href = `${BASE_URL}${location.pathname}`;

    // Cleanup on unmount
    return () => {
      const tags = document.querySelectorAll('link[rel="alternate"][hreflang]');
      tags.forEach((tag) => tag.remove());
    };
  }, [location.pathname]);

  return null;
};
