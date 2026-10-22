import React from 'react';
import styles from './MyProjects.module.scss';

interface Project {
  title: string;
  description: string;
}

const placeholderProjects: Project[] = [
  {
    title: 'Placeholder Project 1',
    description: 'This is a placeholder project description.',
  },
  {
    title: 'Placeholder Project 2',
    description: 'This is another placeholder project description.',
  },
  {
    title: 'Placeholder Project 3',
    description: 'This is another placeholder project description.',
  },
];

export const MyProjects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectCards}>
        {placeholderProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
