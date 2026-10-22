import React from 'react';
import styles from './Contact.module.scss';

export const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, please use the following contact information:</p>
      <br />
      <br />
      <ul className={styles.contactInfo}>
        <li>
          <i className="fas fa-envelope"></i> <strong>Email:</strong> vlademir.junior.nh@gmail.com
        </li>
        <li>
          <i className="fas fa-phone"></i> <strong>Phone:</strong> +55 51 9-9009-1531
        </li>
        <li>
          <i className="fab fa-linkedin"></i> <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/vlademir-junior" target="_blank" rel="noreferrer">
            in/vlademir-junior
          </a>
        </li>
        <li>
          <i className="fab fa-github"></i> <strong>GitHub:</strong>{' '}
          <a href="https://github.com/vlademir-junior" target="_blank" rel="noreferrer">
            github.com/vlademir-junior
          </a>
        </li>
      </ul>
    </div>
  );
};
