import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const About = () => {
  const age = new Date().getFullYear() - 2006;
  return (
    <div>
      <div className={styles.container2}>
        <div className={styles.main}>
          <div id="parent-container" className="flex items-center columns-2">
            <div
              id="parent-image"
              className="flex flex-auto items-center justify-center w-full"
            >
              <Image
                className="rounded-half"
                src={'/assets/me.jpeg'}
                width={300}
                height={480}
              />
            </div>
            <div id="parent-text" className="flex-auto w-full">
              <h3 className="pt-10 px-6 font-semibold text-5xl">
                Hey, my name is <span className="text-deepblue">Athipat</span>
              </h3>
              <p className="text-xl py-8 px-8">
                Welcome to my website. I am a {age} years old sophomore. I am
                passionate about computer programming, doing sports, and
                browsing memes! I see computer programming as my future
                profession. Right now, I am working on school projects and my
                own projects. To reach me, consider my social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
