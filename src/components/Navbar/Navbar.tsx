import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const NAV_ITEMS = [
    { to: '/about', label: t('about') },
    { to: '/technologies', label: t('technologies') },
    { to: '/my-projects', label: t('projects') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.name}>Vlademir Júnior</span>
          <span className={styles.role}>Computer Science student & FullStack Web Developer</span>
        </Link>

        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              {label}
            </NavLink>
          ))}

          <div className={styles.languageSelector}>
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              aria-label="Change Language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};