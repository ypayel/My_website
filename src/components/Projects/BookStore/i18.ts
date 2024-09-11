import i18n from "i18next";

import en from "./translations/en";
import pl from "./translations/pl";
import { initReactI18next } from "react-i18next";

const resources = {
  pl,
  en,
};
i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
