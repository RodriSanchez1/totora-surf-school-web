// URL locale codes (short, for SEO-friendly URLs)
export type UrlLocale = 'en' | 'es' | 'pt' | 'fr';

// Internal locale codes (used by react-intl)
export type InternalLocale = 'en-US' | 'es' | 'pt-BR' | 'fr';

// Default locale for redirect from root
export const DEFAULT_URL_LOCALE: UrlLocale = 'es';

// All supported URL locales
export const SUPPORTED_URL_LOCALES: UrlLocale[] = ['en', 'es', 'pt', 'fr'];

// Mapping from URL locale to internal locale
const urlToInternalMap: Record<UrlLocale, InternalLocale> = {
  'en': 'en-US',
  'es': 'es',
  'pt': 'pt-BR',
  'fr': 'fr',
};

// Mapping from internal locale to URL locale
const internalToUrlMap: Record<InternalLocale, UrlLocale> = {
  'en-US': 'en',
  'es': 'es',
  'pt-BR': 'pt',
  'fr': 'fr',
};

// Convert URL locale to internal locale
export function urlLocaleToInternal(urlLocale: string): InternalLocale {
  const normalized = urlLocale.toLowerCase() as UrlLocale;
  return urlToInternalMap[normalized] || 'en-US';
}

// Convert internal locale to URL locale
export function internalLocaleToUrl(internalLocale: string): UrlLocale {
  return internalToUrlMap[internalLocale as InternalLocale] || 'en';
}

// Check if a string is a valid URL locale
export function isValidUrlLocale(locale: string): locale is UrlLocale {
  return SUPPORTED_URL_LOCALES.includes(locale.toLowerCase() as UrlLocale);
}

// Get browser's preferred locale as URL locale
export function getBrowserUrlLocale(): UrlLocale {
  const browserLang = navigator.language;

  // Check for direct match
  const shortLang = browserLang.split('-')[0].toLowerCase();
  if (isValidUrlLocale(shortLang)) {
    return shortLang;
  }

  // Default to Spanish (primary audience)
  return DEFAULT_URL_LOCALE;
}

// Locale display information for SEO
export const localeInfo: Record<UrlLocale, { name: string; nativeName: string; hreflang: string }> = {
  'en': { name: 'English', nativeName: 'English', hreflang: 'en' },
  'es': { name: 'Spanish', nativeName: 'Español', hreflang: 'es' },
  'pt': { name: 'Portuguese', nativeName: 'Português', hreflang: 'pt' },
  'fr': { name: 'French', nativeName: 'Français', hreflang: 'fr' },
};
