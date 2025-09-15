import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zh from './locales/zh';
import en from './locales/en';
import ja from './locales/ja';

export type Lang = 'zh' | 'en' | 'ja';

const resources = {
  zh: { translation: zh },
  en: { translation: en },
  ja: { translation: ja },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    supportedLngs: ['zh', 'en', 'ja'],
    interpolation: { escapeValue: false },
    detection: {
      // we still manage lang via URL/localStorage explicitly; detector is just a fallback
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
  });

export default i18n;

