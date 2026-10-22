import React from 'react';
import styles from './Technologies.module.scss';

interface TechItem {
  name: string;
  iconClass: string;
  description: string;
}

const technologiesList: TechItem[] = [
  {
    name: 'HTML5',
    iconClass: 'fab fa-html5',
    description: 'Markup language for structuring and presenting content on the web.',
  },
  {
    name: 'CSS3',
    iconClass: 'fab fa-css3-alt',
    description: 'Stylesheet language for designing the presentation of web pages.',
  },
  {
    name: 'JavaScript',
    iconClass: 'fab fa-js-square',
    description: 'Programming language for adding interactivity to web pages.',
  },
  {
    name: 'Python',
    iconClass: 'fab fa-python',
    description: 'High-level programming language known for readable code and backend backend development.',
  },
  {
    name: 'Git',
    iconClass: 'fab fa-git-alt',
    description: 'Distributed version control system for tracking changes in code.',
  },
  {
    name: 'C Language',
    iconClass: 'fas fa-code',
    description: 'General-purpose programming language known for efficiency and system-level access.',
  },
  {
    name: 'Docker',
    iconClass: 'fab fa-docker',
    description: 'Containerization platform to build, share, and run applications efficiently.',
  },
  {
    name: 'Linux',
    iconClass: 'fab fa-linux',
    description: 'Open-source Unix-like operating system widely used for servers and development.',
  },
  {
    name: 'React',
    iconClass: 'fab fa-react',
    description: 'JavaScript library for building user interfaces.',
  },
];

export const Technologies: React.FC = () => {
  return (
    <div className={styles.technologiesContainer}>
      <div className={styles.header}>
        <h2>Technologies & Skills</h2>
        <p>Tools and frameworks I work with</p>
      </div>
      <div className={styles.grid}>
        {technologiesList.map((tech) => (
          <div key={tech.name} className={styles.card}>
            <i className={tech.iconClass}></i>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
