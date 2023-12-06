import { use } from 'i18next';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationsEn from './locales/translations.en.json';
import translationsEs from './locales/translations.es.json';

const i18Next = use(i18nextBrowserLanguagedetector).use(initReactI18next);

i18Next.init({
  defaultNS: 'translation',
  resources: {
    en: { translation: translationsEn },
    es: { translation: translationsEs },
  },
  detection: {
    order: ['localStorage', 'navigator'],
    lookupQuerystring: 'lng',
    lookupLocalStorage: 'lng',
  },
  fallbackLng: 'en',
  interpolation: { escapeValue: false }, // not needed for react as it escapes by default
  debug: true,
});

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translationsEn;
    };
  }
}

export default i18Next;
