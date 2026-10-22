import React from 'react';
import styles from './MyProjects.module.scss';
import { useTranslation } from 'react-i18next';


interface Project {
  title: string;
  descriptionKey: string;
  tags: string[];
  repositoryUrl: string;
  liveUrl?: string;
  iconClass: string;
}


const projectsList: Project[] = [
  {
    title: 'News Hub do IBGE',
    descriptionKey: 'myProjectsPage.items.newsHub',
    tags: ['React', 'JavaScript', 'IBGE API'],
    repositoryUrl: 'https://github.com/vlademir-junior/desafio-frontend',
    liveUrl: 'https://desafio-frontend-omega.vercel.app/',
    iconClass: 'fas fa-newspaper',
  },
  {
    title: 'ChordGTR',
    descriptionKey: 'myProjectsPage.items.chordGtr',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repositoryUrl: 'https://github.com/vlademir-junior/app-corda-guitarra',
    liveUrl: 'https://vlademir-junior.github.io/app-corda-guitarra/',
    iconClass: 'fas fa-guitar',
  },
  {
    title: 'Pixel Art',
    descriptionKey: 'myProjectsPage.items.pixelArt',
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    repositoryUrl: 'https://github.com/vlademir-junior/pixels-art',
    iconClass: 'fas fa-paint-brush',
  },
];



export const MyProjects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.header}>
        <h2>{t('projects')}</h2>
        <p>{t('myProjectsPage.description')}</p>
      </div>
      <div className={styles.grid}>
        {projectsList.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <i className={project.iconClass} aria-hidden="true"></i>
              <div className={styles.projectLinks}>
                <a
                  className={styles.githubLink}
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t('myProjectsPage.repositoryLink')}: ${project.title}`}
                  title={t('myProjectsPage.repositoryLink')}
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                {project.liveUrl && (
                  <a
                    className={styles.githubLink}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t('myProjectsPage.liveLink')}: ${project.title}`}
                    title={t('myProjectsPage.liveLink')}
                  >
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{t(project.descriptionKey)}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
