import React from 'react';
import styles from './MyProjects.module.scss';
import { useTranslation } from 'react-i18next';


interface Project {
  titleKey: string;
  descriptionKey: string;
  tags: string[];
}


const projectsList: Project[] = [
  {
    titleKey: 'myProjectsPage.items.project1.title',
    descriptionKey: 'myProjectsPage.items.project1.description',
    tags: ['Python', 'Docker', 'Linux'],
  },
  {
    titleKey: 'myProjectsPage.items.project2.title',
    descriptionKey: 'myProjectsPage.items.project2.description',
    tags: ['React', 'TypeScript', 'Sass'],
  },
  {
    titleKey: 'myProjectsPage.items.project3.title',
    descriptionKey: 'myProjectsPage.items.project3.description',
    tags: ['Python', 'Git', 'Linux'],
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
          <div key={project.titleKey} className={styles.card}>
            <h3>{t(project.titleKey)}</h3>
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
