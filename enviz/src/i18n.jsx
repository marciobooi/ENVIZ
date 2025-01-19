// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            fr: { translation: translationFR },
            de: { translation: translationDE },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;