import React from 'react';
import styles from './MyProjects.module.scss';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projectsList: Project[] = [
  {
    title: 'Placeholder Project 1',
    description: 'A full-stack backend service demonstrating RESTful API architecture and clean code practices.',
    tags: ['Python', 'Docker', 'Linux'],
  },
  {
    title: 'Placeholder Project 2',
    description: 'An interactive frontend web application built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Sass'],
  },
  {
    title: 'Placeholder Project 3',
    description: 'A distributed data processing pipeline written in Python for high efficiency.',
    tags: ['Python', 'Git', 'Linux'],
  },
];

export const MyProjects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.header}>
        <h2>Featured Projects</h2>
        <p>Selected work and technical projects</p>
      </div>
      <div className={styles.grid}>
        {projectsList.map((project, index) => (
          <div key={index} className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <i className="fas fa-folder-open"></i>
                <a
                  href="https://github.com/vlademir-junior"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubLink}
                  aria-label="GitHub Repository"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
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
