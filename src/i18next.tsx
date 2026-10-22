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
          // Navbar
          about: 'About',
          technologies: 'Technologies',
          projects: 'My Projects',
          contact: 'Contact',

          technologiesPage: {
            title: 'Technologies & Skills',
            description: 'Tools and frameworks I work with',
            items: {
              html: 'Markup language for structuring and presenting content on the web.',
              css: 'Stylesheet language for designing the presentation of web pages.',
              javascript: 'Programming language for adding interactivity to web pages.',
              python: 'High-level programming language known for readable code and backend development.',
              git: 'Distributed version control system for tracking changes in code.',
              c: 'General-purpose programming language known for efficiency and system-level access.',
              docker: 'Platform for building, sharing, and running applications in containers.',
              linux: 'Open-source Unix-like operating system widely used for servers and development.',
              react: 'JavaScript library for building user interfaces.',
            },
          },
          
          // Página About
          aboutPage: {
            title: 'About Me',
            description: 'I am a Computer Science student and FullStack Web Developer passionate about building robust applications.',
            role: 'Computer Science student & FullStack Web Developer',
            headlineBefore: 'Building robust backend systems &',
            headlineAccent: 'modern layout solutions.',
            intro: 'Hello! I\'m an enthusiastic software developer passionate about creating scalable, high-performance solutions using modern <technologies>technologies</technologies>.',
            education: 'I started my DEV career studying at <school>Trybe</school>, and I am currently pursuing a Bachelor\'s degree in Computer Science to deepen my technical expertise and system architecture capabilities.',
            projectsButton: 'View Projects',
            contactButton: 'Get in Touch',
          },

          // Página Contact
          contactPage: {
            title: 'Get in Touch',
            description: 'Feel free to reach out for opportunities, collaborations, or questions.',
            sendButton: 'Send Message',
            emailLabel: 'Email',
            phoneLabel: 'Phone',
          },

          myProjectsPage: {
            description: 'Selected projects showcasing my development experience.',
            items: {
              project1: {
                title: 'Sample Project 1',
                description: 'A full-stack backend service demonstrating RESTful API architecture and clean code practices.',
              },
              project2: {
                title: 'Sample Project 2',
                description: 'An interactive frontend web application built with React and TypeScript.',
              },
              project3: {
                title: 'Sample Project 3',
                description: 'A distributed data processing pipeline written in Python for high efficiency.',
              },
            },
          },
        },
      },
      pt: {
        translation: {
          // Navbar
          about: 'Sobre',
          technologies: 'Tecnologias',
          projects: 'Meus Projetos',
          contact: 'Contato',

          technologiesPage: {
            title: 'Tecnologias e habilidades',
            description: 'Ferramentas e frameworks com que trabalho',
            items: {
              html: 'Linguagem de marcação para estruturar e apresentar conteúdo na web.',
              css: 'Linguagem de estilos para definir a apresentação de páginas web.',
              javascript: 'Linguagem de programação que adiciona interatividade às páginas web.',
              python: 'Linguagem de programação de alto nível, conhecida pela legibilidade e pelo desenvolvimento backend.',
              git: 'Sistema distribuído de controle de versão para acompanhar alterações no código.',
              c: 'Linguagem de programação de propósito geral, conhecida pela eficiência e pelo acesso ao sistema.',
              docker: 'Plataforma para criar, compartilhar e executar aplicações em contêineres.',
              linux: 'Sistema operacional de código aberto, semelhante ao Unix, muito usado em servidores e no desenvolvimento.',
              react: 'Biblioteca JavaScript para criar interfaces de usuário.',
            },
          },
          
          // Página About
          aboutPage: {
            title: 'Sobre Mim',
            description: 'Sou um estudante de Ciência da Computação e Desenvolvedor Web FullStack apaixonado por criar aplicações robustas.',
            role: 'Estudante de Ciência da Computação e Desenvolvedor Web FullStack',
            headlineBefore: 'Construindo sistemas backend robustos e',
            headlineAccent: 'soluções modernas de layout.',
            intro: 'Olá! Sou um desenvolvedor de software entusiasmado e apaixonado por criar soluções escaláveis e de alto desempenho usando <technologies>tecnologias</technologies> modernas.',
            education: 'Comecei minha carreira em desenvolvimento estudando na <school>Trybe</school> e atualmente curso Ciência da Computação para aprofundar meus conhecimentos técnicos e minha capacidade de projetar arquiteturas de sistemas.',
            projectsButton: 'Ver Projetos',
            contactButton: 'Entre em Contato',
          },

          // Página Contact
          contactPage: {
            title: 'Entre em Contato',
            description: 'Fique à vontade para entrar em contato sobre oportunidades, colaborações ou dúvidas.',
            sendButton: 'Enviar Mensagem',
            emailLabel: 'E-mail',
            phoneLabel: 'Telefone',
          },

          myProjectsPage: {
            description: 'Projetos selecionados que mostram minha experiência em desenvolvimento.',
            items: {
              project1: {
                title: 'Projeto de Exemplo 1',
                description: 'Serviço backend full-stack que demonstra uma arquitetura de API RESTful e boas práticas de código.',
              },
              project2: {
                title: 'Projeto de Exemplo 2',
                description: 'Aplicação frontend interativa desenvolvida com React e TypeScript.',
              },
              project3: {
                title: 'Projeto de Exemplo 3',
                description: 'Pipeline distribuído de processamento de dados desenvolvido em Python para alta eficiência.',
              },
            },
          },
        },
      },
      es: {
        translation: {
          // Navbar
          about: 'Sobre mí',
          technologies: 'Tecnologías',
          projects: 'Mis Proyectos',
          contact: 'Contacto',

          technologiesPage: {
            title: 'Tecnologías y habilidades',
            description: 'Herramientas y frameworks con los que trabajo',
            items: {
              html: 'Lenguaje de marcado para estructurar y presentar contenido en la web.',
              css: 'Lenguaje de estilos para diseñar la presentación de páginas web.',
              javascript: 'Lenguaje de programación que añade interactividad a las páginas web.',
              python: 'Lenguaje de programación de alto nivel, conocido por su legibilidad y el desarrollo backend.',
              git: 'Sistema distribuido de control de versiones para registrar cambios en el código.',
              c: 'Lenguaje de programación de propósito general, conocido por su eficiencia y acceso al sistema.',
              docker: 'Plataforma para crear, compartir y ejecutar aplicaciones en contenedores.',
              linux: 'Sistema operativo de código abierto similar a Unix, muy utilizado en servidores y desarrollo.',
              react: 'Biblioteca de JavaScript para crear interfaces de usuario.',
            },
          },
          
          // Página About
          aboutPage: {
            title: 'Sobre mí',
            description: 'Soy un estudiante de Ciencias de la Computación y desarrollador web FullStack apasionado por crear aplicaciones robustas.',
            role: 'Estudiante de Ciencias de la Computación y desarrollador web FullStack',
            headlineBefore: 'Construyendo sistemas backend robustos y',
            headlineAccent: 'soluciones modernas de diseño.',
            intro: '¡Hola! Soy un desarrollador de software entusiasta y apasionado por crear soluciones escalables y de alto rendimiento usando <technologies>tecnologías</technologies> modernas.',
            education: 'Comencé mi carrera en desarrollo estudiando en <school>Trybe</school> y actualmente curso Ciencias de la Computación para profundizar mis conocimientos técnicos y mi capacidad para diseñar arquitecturas de sistemas.',
            projectsButton: 'Ver proyectos',
            contactButton: 'Contactarme',
          },

          // Página Contact
          contactPage: {
            title: 'Ponte en contacto',
            description: 'No dudes en contactarme por oportunidades, colaboraciones o preguntas.',
            sendButton: 'Enviar mensaje',
            emailLabel: 'Correo electrónico',
            phoneLabel: 'Teléfono',
          },

          myProjectsPage: {
            description: 'Proyectos seleccionados que muestran mi experiencia en desarrollo.',
            items: {
              project1: {
                title: 'Proyecto de ejemplo 1',
                description: 'Servicio backend full-stack que demuestra una arquitectura de API RESTful y buenas prácticas de código.',
              },
              project2: {
                title: 'Proyecto de ejemplo 2',
                description: 'Aplicación frontend interactiva desarrollada con React y TypeScript.',
              },
              project3: {
                title: 'Proyecto de ejemplo 3',
                description: 'Pipeline distribuido de procesamiento de datos escrito en Python para lograr una alta eficiencia.',
              },
            },
          },
        },
      },
      de: {
        translation: {
          // Navbar
          about: 'Über mich',
          technologies: 'Technologien',
          projects: 'Meine Projekte',
          contact: 'Kontakt',

          technologiesPage: {
            title: 'Technologien & Kenntnisse',
            description: 'Tools und Frameworks, mit denen ich arbeite',
            items: {
              html: 'Auszeichnungssprache zur Strukturierung und Darstellung von Webinhalten.',
              css: 'Stylesheet-Sprache zur Gestaltung der Darstellung von Webseiten.',
              javascript: 'Programmiersprache für interaktive Webseiten.',
              python: 'Hochentwickelte Programmiersprache, bekannt für gut lesbaren Code und Backend-Entwicklung.',
              git: 'Verteiltes Versionskontrollsystem zur Nachverfolgung von Codeänderungen.',
              c: 'Universelle Programmiersprache, bekannt für Effizienz und systemnahen Zugriff.',
              docker: 'Plattform zum Erstellen, Teilen und Ausführen von Anwendungen in Containern.',
              linux: 'Offenes Unix-ähnliches Betriebssystem, das häufig auf Servern und in der Entwicklung eingesetzt wird.',
              react: 'JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.',
            },
          },
          
          // Página About
          aboutPage: {
            title: 'Über mich',
            description: 'Ich bin Informatikstudent und FullStack-Webentwickler mit Leidenschaft für die Entwicklung robuster Anwendungen.',
            role: 'Informatikstudent und FullStack-Webentwickler',
            headlineBefore: 'Robuste Backend-Systeme und',
            headlineAccent: 'moderne Layoutlösungen entwickeln.',
            intro: 'Hallo! Ich bin ein begeisterter Softwareentwickler und entwickle leidenschaftlich gerne skalierbare, leistungsstarke Lösungen mit modernen <technologies>Technologien</technologies>.',
            education: 'Meine Laufbahn in der Entwicklung begann mit einem Studium bei <school>Trybe</school>. Derzeit studiere ich Informatik, um meine technischen Kenntnisse und meine Fähigkeiten im Systemdesign zu vertiefen.',
            projectsButton: 'Projekte ansehen',
            contactButton: 'Kontakt aufnehmen',
          },

          // Página Contact
          contactPage: {
            title: 'Kontakt aufnehmen',
            description: 'Melde dich gerne bei mir, wenn du Fragen hast oder über Möglichkeiten und Zusammenarbeit sprechen möchtest.',
            sendButton: 'Nachricht senden',
            emailLabel: 'E-Mail',
            phoneLabel: 'Telefon',
          },

          myProjectsPage: {
            description: 'Ausgewählte Projekte, die meine Entwicklungserfahrung zeigen.',
            items: {
              project1: {
                title: 'Beispielprojekt 1',
                description: 'Full-Stack-Backend-Dienst mit RESTful-API-Architektur und bewährten Clean-Code-Praktiken.',
              },
              project2: {
                title: 'Beispielprojekt 2',
                description: 'Interaktive Frontend-Webanwendung mit React und TypeScript.',
              },
              project3: {
                title: 'Beispielprojekt 3',
                description: 'Verteilte Datenverarbeitungspipeline in Python für hohe Effizienz.',
              },
            },
          },
        },
      },
      fr: {
        translation: {
          // Navbar
          about: 'À propos',
          technologies: 'Technologies',
          projects: 'Mes Projets',
          contact: 'Contact',

          technologiesPage: {
            title: 'Technologies et compétences',
            description: 'Outils et frameworks que j’utilise',
            items: {
              html: 'Langage de balisage pour structurer et présenter le contenu sur le Web.',
              css: 'Langage de feuilles de style pour concevoir la présentation des pages Web.',
              javascript: 'Langage de programmation qui ajoute de l’interactivité aux pages Web.',
              python: 'Langage de programmation de haut niveau, réputé pour sa lisibilité et le développement backend.',
              git: 'Système distribué de gestion de versions pour suivre les modifications du code.',
              c: 'Langage de programmation généraliste, réputé pour son efficacité et son accès au système.',
              docker: 'Plateforme pour créer, partager et exécuter des applications dans des conteneurs.',
              linux: 'Système d’exploitation libre de type Unix, largement utilisé pour les serveurs et le développement.',
              react: 'Bibliothèque JavaScript pour créer des interfaces utilisateur.',
            },
          },
          
          // Página About
          aboutPage: {
            title: 'À propos de moi',
            description: 'Je suis étudiant en informatique et développeur web FullStack passionné par la création d’applications robustes.',
            role: 'Étudiant en informatique et développeur web FullStack',
            headlineBefore: 'Créer des systèmes backend robustes et des',
            headlineAccent: 'solutions de mise en page modernes.',
            intro: 'Bonjour ! Je suis un développeur logiciel passionné par la création de solutions évolutives et performantes avec des <technologies>technologies</technologies> modernes.',
            education: 'J’ai commencé ma carrière dans le développement en étudiant chez <school>Trybe</school>. Je prépare actuellement une licence en informatique afin d’approfondir mon expertise technique et mes compétences en architecture des systèmes.',
            projectsButton: 'Voir les projets',
            contactButton: 'Me contacter',
          },

          // Página Contact
          contactPage: {
            title: 'Contactez-moi',
            description: 'N’hésitez pas à me contacter pour parler d’opportunités, de collaborations ou pour poser vos questions.',
            sendButton: 'Envoyer le message',
            emailLabel: 'E-mail',
            phoneLabel: 'Téléphone',
          },

          myProjectsPage: {
            description: 'Une sélection de projets qui illustre mon expérience en développement.',
            items: {
              project1: {
                title: 'Projet exemple 1',
                description: 'Service backend full-stack illustrant une architecture d’API RESTful et de bonnes pratiques de code.',
              },
              project2: {
                title: 'Projet exemple 2',
                description: 'Application frontend interactive développée avec React et TypeScript.',
              },
              project3: {
                title: 'Projet exemple 3',
                description: 'Pipeline distribué de traitement de données écrit en Python pour une grande efficacité.',
              },
            },
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;