import React from 'react';
import styles from './Contact.module.scss';

export const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>
        <h2>Get in Touch</h2>
        <p>Feel free to reach out for opportunities, collaborations, or questions.</p>
      </div>

      <div className={styles.grid}>
        <a href="mailto:vlademir.junior.nh@gmail.com" className={styles.card}>
          <div className={styles.iconWrapper}>
            <i className="fas fa-envelope"></i>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>vlademir.junior.nh@gmail.com</span>
          </div>
        </a>

        <a href="tel:+5551990091531" className={styles.card}>
          <div className={styles.iconWrapper}>
            <i className="fas fa-phone"></i>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>+55 51 9-9009-1531</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/vlademir-junior"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>LinkedIn</span>
            <span className={styles.value}>in/vlademir-junior</span>
          </div>
        </a>

        <a
          href="https://github.com/vlademir-junior"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <i className="fab fa-github"></i>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>github.com/vlademir-junior</span>
          </div>
        </a>
      </div>
    </div>
  );
};
