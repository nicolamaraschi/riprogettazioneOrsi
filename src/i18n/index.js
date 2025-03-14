// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import itTranslation from './it.json';
import frTranslation from './fr.json';
import deTranslation from './de.json';

const resources = {
  en: {
    translation: enTranslation
  },
  it: {
    translation: itTranslation
  },
  fr: {
    translation: frTranslation
  },
  de: {
    translation: deTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'it',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;