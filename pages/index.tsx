import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../src/styles/Home.module.css';
import Homepage from '../src/components/Home';
import About from '../src/components/About';
import SocialMedia from '../src/components/SocialMedia';
import Footer from '../src/components/Footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOrowo's</title>
        <meta name="description" content="Welcome to mysite, fellow nerds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <Homepage superpowers={['Full Stack Developer', 'DevOps Engineer']} />
        </div>
        <SocialMedia />
      </main>
      <About />

      <Footer />
    </div>
  );
};

export default Home;
