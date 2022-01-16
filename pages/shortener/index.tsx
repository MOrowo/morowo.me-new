import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../../src/styles/Home.module.css';
import { is_valid_link } from '../../src/utils/ValidateUtil';
import Footer from '../../src/components/Footer';

const index: NextPage = () => {
  const [link, setLink] = React.useState('');

  function handleSubmit(event: any) {
    event.preventDefault();

    const form_link = event.target[0].value;

    // Post to API
    // Check if link is valid
    if (is_valid_link(form_link)) {
      fetch('/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: form_link }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLink(data.new_link);
        });
    } else {
      // Yell at user for not posting a valid link
      alert('Please enter a valid link');
    }
  }

  // input -> server -> new link -> value
  return (
    <div className={styles.container}>
      <Head>
        <title>MOrowo's</title>
        <meta name="description" content="Welcome to mysite, fellow nerds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col">
          <div className={styles.description}>
            <h1 className="text-4xl text-deepblue">URL Shortener</h1>
            <p className="">Shorten your link in a click</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="gap-4 flex">
              <input
                id="link"
                type="text"
                className="p-6 max-w-sm mx-auto bg-nice_gray rounded-xl shadow-lg flex items-center space-x-4 text-xl"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="http://"
              />
              <button type="submit" className="rounded-sm bg-cyan-300">
                OK
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default index;
