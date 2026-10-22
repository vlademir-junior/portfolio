import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          about: 'About',
          technologies: 'Technologies',
          projects: 'My Projects',
          contact: 'Contact',
        },
      },
      pt: {
        translation: {
          about: 'Sobre',
          technologies: 'Tecnologias',
          projects: 'Meus Projetos',
          contact: 'Contato',
        },
      },
      es: {
        translation: {
          about: 'Sobre mí',
          technologies: 'Tecnologías',
          projects: 'Mis Proyectos',
          contact: 'Contacto',
        },
      },
      de: {
        translation: {
          about: 'Über mich',
          technologies: 'Technologien',
          projects: 'Meine Projekte',
          contact: 'Kontakt',
        },
      },
      fr: {
        translation: {
          about: 'À propos',
          technologies: 'Technologies',
          projects: 'Mes Projets',
          contact: 'Contact',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;