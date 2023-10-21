import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import POSNCert from '../../src/components/certs/POSNCert';

const Posn2022: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MOrowo</title>
        <meta name="description" content="Welcome to mysite, fellow nerds" />
        <link rel="icon" href="/me.jpg" />
      </Head>
      <Navbar />
      <POSNCert />
      <Footer />
    </div>
  );
};

export default Posn2022;
