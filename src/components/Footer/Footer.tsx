import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navbar}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/my-projects">My Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <p>&copy; 2023 Vlademir B. M. Júnior. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
