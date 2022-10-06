import type { NextPage } from 'next';

import Head from 'next/head';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Projectspage from '../src/components/Projectspage';

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MOrowo</title>
        <meta name="description" content="MOrowo | Contact" />
        <link rel="icon" href="/me.jpg" />
      </Head>
      <Navbar />
      {/* add project I've made here */}
      <Projectspage />
      <Footer />
    </div>
  );
};

export default Projects;
