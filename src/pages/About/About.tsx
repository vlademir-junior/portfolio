import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.card}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Computer Science student & FullStack Web Developer
        </div>

        <h1>
          Building robust backend systems & <span>modern layout solutions.</span>
        </h1>

        <p>
          Hello! I'm an enthusiastic software developer passionate about creating scalable, high-performance solutions using modern{' '}
          <Link to="/technologies">technologies</Link>.
        </p>

        <p>
          I started my DEV career studying at{' '}
          <a href="https://www.betrybe.com.br" target="_blank" rel="noreferrer">
            Trybe
          </a>
          , and I am currently pursuing a Bachelor's degree in Computer Science to deepen my technical expertise and system architecture capabilities.
        </p>

        <div className={styles.actions}>
          <Link to="/my-projects" className={styles.primaryBtn}>
            <i className="fas fa-code-branch"></i> View Projects
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            <i className="fas fa-envelope"></i> Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};
