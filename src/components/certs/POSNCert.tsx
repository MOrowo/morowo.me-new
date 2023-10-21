import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const POSNCert = () => {
  return (
    <div>
      <div className={styles.container2}>
        <div className={styles.main}>
          <Image src={'/certs/POSN2022.jpg'} width={1280} height={720} />
        </div>
      </div>
    </div>
  );
};

export default POSNCert;
