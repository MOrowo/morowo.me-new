import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className={styles.footer}>
        © {year} · Athipat Boonchamnan · All rights reserved
      </footer>
    </div>
  );
};

export default Footer;
