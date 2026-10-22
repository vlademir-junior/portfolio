import React from 'react';
import styles from './Technologies.module.scss';
import { useTranslation } from 'react-i18next';

interface TechItem {
  name: string;
  iconClass: string;
  descriptionKey: string;
}

const technologiesList: TechItem[] = [
  {
    name: 'HTML5',
    iconClass: 'fab fa-html5',
    descriptionKey: 'technologiesPage.items.html',
  },
  {
    name: 'CSS3',
    iconClass: 'fab fa-css3-alt',
    descriptionKey: 'technologiesPage.items.css',
  },
  {
    name: 'JavaScript',
    iconClass: 'fab fa-js-square',
    descriptionKey: 'technologiesPage.items.javascript',
  },
  {
    name: 'Python',
    iconClass: 'fab fa-python',
    descriptionKey: 'technologiesPage.items.python',
  },
  {
    name: 'Git',
    iconClass: 'fab fa-git-alt',
    descriptionKey: 'technologiesPage.items.git',
  },
  {
    name: 'C',
    iconClass: 'fas fa-code',
    descriptionKey: 'technologiesPage.items.c',
  },
  {
    name: 'Docker',
    iconClass: 'fab fa-docker',
    descriptionKey: 'technologiesPage.items.docker',
  },
  {
    name: 'Linux',
    iconClass: 'fab fa-linux',
    descriptionKey: 'technologiesPage.items.linux',
  },
  {
    name: 'React',
    iconClass: 'fab fa-react',
    descriptionKey: 'technologiesPage.items.react',
  },
];

export const Technologies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.technologiesContainer}>
      <div className={styles.header}>
        <h2>{t('technologiesPage.title')}</h2>
        <p>{t('technologiesPage.description')}</p>
      </div>
      <div className={styles.grid}>
        {technologiesList.map((tech) => (
          <div key={tech.name} className={styles.card}>
            <i className={tech.iconClass}></i>
            <h3>{tech.name}</h3>
            <p>{t(tech.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
