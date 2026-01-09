export type UrlLocale = 'en' | 'es' | 'pt' | 'fr';

export type InternalLocale = 'en' | 'es' | 'pt' | 'fr';

export const DEFAULT_URL_LOCALE: UrlLocale = 'es';

export const SUPPORTED_URL_LOCALES: UrlLocale[] = ['en', 'es', 'pt', 'fr'];

const urlToInternalMap: Record<UrlLocale, InternalLocale> = {
  'en': 'en',
  'es': 'es',
  'pt': 'pt',
  'fr': 'fr',
};

const internalToUrlMap: Record<InternalLocale, UrlLocale> = {
  'en': 'en',
  'es': 'es',
  'pt': 'pt',
  'fr': 'fr',
};

export function urlLocaleToInternal(urlLocale: string): InternalLocale {
  const normalized = urlLocale.toLowerCase() as UrlLocale;
  return urlToInternalMap[normalized] || 'en';
}

export function internalLocaleToUrl(internalLocale: string): UrlLocale {
  return internalToUrlMap[internalLocale as InternalLocale] || 'en';
}

export function isValidUrlLocale(locale: string): locale is UrlLocale {
  return SUPPORTED_URL_LOCALES.includes(locale.toLowerCase() as UrlLocale);
}

export function getBrowserUrlLocale(): UrlLocale {
  const browserLang = navigator.language;
  const shortLang = browserLang.split('-')[0].toLowerCase();

  if (isValidUrlLocale(shortLang)) {
    return shortLang;
  }

  return DEFAULT_URL_LOCALE;
}

export const localeInfo: Record<UrlLocale, { name: string; nativeName: string; hreflang: string }> = {
  'en': { name: 'English', nativeName: 'English', hreflang: 'en' },
  'es': { name: 'Spanish', nativeName: 'Español', hreflang: 'es' },
  'pt': { name: 'Portuguese', nativeName: 'Português', hreflang: 'pt' },
  'fr': { name: 'French', nativeName: 'Français', hreflang: 'fr' },
};
