import React from 'react';
import styles from './Technologies.module.scss';

export const Technologies: React.FC = () => {
  return (
    <div className={styles.technologies}>
      <h2>Technologies</h2>
      <div className={styles.technologyCards}>
        <div className={styles.technologyCard}>
          <i className="fab fa-html5"></i>
          <h3>HTML5</h3>
          <p>Markup language for structuring and presenting content on the web.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-css3"></i>
          <h3>CSS3</h3>
          <p>Stylesheet language for designing the presentation of web pages.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-js-square"></i>
          <h3>JavaScript</h3>
          <p>Programming language for adding interactivity to web pages.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-node"></i>
          <h3>Node.js</h3>
          <p>JavaScript runtime environment for server-side applications.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-git"></i>
          <h3>Git</h3>
          <p>Version control system for tracking changes in code.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-c"></i>
          <h3>C Programming Language</h3>
          <p>General-purpose programming language known for its efficiency and versatility.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-docker"></i>
          <h3>Docker</h3>
          <p>Open source project that facilitates deployment of applications inside of software containers.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-angular"></i>
          <h3>Angular</h3>
          <p>Front-end framework for building dynamic web applications.</p>
        </div>
        <div className={styles.technologyCard}>
          <i className="fab fa-react"></i>
          <h3>React</h3>
          <p>JavaScript library for building user interfaces.</p>
        </div>
      </div>
    </div>
  );
};
