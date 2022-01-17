import styles from '../styles/Home.module.css';
import Blinkingtext from './Blinkingtext';
import SocialMedia from './SocialMedia';

const Homepage = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.description}>
            <Blinkingtext
              superpowers={['Full Stack Developer', 'DevOps Engineer']}
            />
          </div>
          <SocialMedia />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
