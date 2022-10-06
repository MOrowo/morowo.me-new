import type { NextPage } from 'next';

import Head from 'next/head';
import Contactform from '../src/components/Contactform';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MOrowo</title>
        <meta name="description" content="MOrowo | Contact" />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <Navbar />
      <Contactform />
      <Footer />
    </div>
  );
};

export default Contact;
