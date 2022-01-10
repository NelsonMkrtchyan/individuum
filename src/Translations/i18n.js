import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as resources from "./resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources1: {
    //   en: {
    //     translation: TRANSLATIONS_EN,
    //   },
    //   ru: {
    //     translation: TRANSLATIONS_ZH,
    //   },
    // },
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {}
      ),
    },
    lng: "en",
  })
  .then();

// i18n.changeLanguage("ru").then();

export default i18n;
