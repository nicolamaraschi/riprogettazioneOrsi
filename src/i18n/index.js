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
    fallbackLng: 'it', // Aggiunto fallback language
    debug: true, // Abilita il debug per i18next
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

console.log("i18n initialized with language:", i18n.language); // Log per debug

export default i18n;