import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import fr from './lang/fr';
import en from './lang/fr';

// the translations
const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'fr',

        keySeparator: false,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export const t=(key, options) => {
    return options ? i18n.t(key, options) : i18n.t(key);
};

export  default i18n;
