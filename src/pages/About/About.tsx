import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import { Trans, useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
      
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.card}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          {t('aboutPage.role')}
        </div>

        <h1>
          {t('aboutPage.headlineBefore')} <span>{t('aboutPage.headlineAccent')}</span>
        </h1>

        <p>
          <Trans
            i18nKey="aboutPage.intro"
            components={{ technologies: <Link to="/technologies" /> }}
          />
        </p>

        <p>
          <Trans
            i18nKey="aboutPage.education"
            components={{
              school: (
                <a href="https://www.betrybe.com.br" target="_blank" rel="noreferrer" />
              ),
            }}
          />
        </p>

        <div className={styles.actions}>
          <Link to="/my-projects" className={styles.primaryBtn}>
            <i className="fas fa-code-branch"></i> {t('aboutPage.projectsButton')}
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            <i className="fas fa-envelope"></i> {t('aboutPage.contactButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};
