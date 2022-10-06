import type { NextPage } from 'next';

import Head from 'next/head';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Homepage from '../src/components/Homepage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MOrowo</title>
        <meta name="description" content="Welcome to mysite, fellow nerds" />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <Navbar />
      <Homepage />
      <div id="about">
        <About />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
