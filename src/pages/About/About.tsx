import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>About Me</h2>
      <p>
        Hello! I'm an enthusiastic developer and passionate about creating solutions
        using the latest <Link to="/technologies">technologies</Link>...
        <br />
        <br />
        I started my DEV career studying at{' '}
        <a href="https://www.betrybe.com.br" target="_blank" rel="noreferrer">
          Trybe
        </a>
        , and I am currently pursuing a Bachelor's degree in Computer Science.
      </p>
    </div>
  );
};
