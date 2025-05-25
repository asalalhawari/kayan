import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// استيراد كشف اللغة وتخزينها في LocalStorage
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // تحميل الترجمات من الملفات الخارجية (يمكنك الاستغناء عنه إذا كنت تضع الترجمة مباشرة)
  .use(LanguageDetector) // الكشف عن اللغة المفضلة للمستخدم
  .use(initReactI18next) // الربط مع React
  .init({
    fallbackLng: "en", // اللغة الافتراضية
    debug: true,
    interpolation: {
      escapeValue: false, // تعطيل الهروب من القيم لحماية HTML
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Kayan Healthcare",
          company: "Company",
          services: "Services",
          resources: "Resources",
          contact: "Contact Us",
          selectLanguage: "Select Language",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بك في كيان للرعاية الصحية",
          company: "الشركة",
          services: "الخدمات",
          resources: "الموارد",
          contact: "اتصل بنا",
          selectLanguage: "اختر اللغة",
        },
      },
    },
  })
