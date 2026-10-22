import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Vlademir B. M. Júnior</h1>
      <h2>Back-End Developer in training...</h2>
    </header>
  );
};
