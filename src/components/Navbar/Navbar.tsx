import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.name}>Vlademir Júnior</span>
          <span className={styles.role}>Computer Science student & FullStack Web Developer</span>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            About
          </NavLink>
          <NavLink
            to="/technologies"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Technologies
          </NavLink>
          <NavLink
            to="/my-projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            My Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
