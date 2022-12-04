import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Projectspage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          {/* item 1 */}
          <div
            id="parent-container"
            className="flex items-center columns-2 mt-32"
          >
            <div id="parent-text" className="flex-auto w-full">
              <h3 className="px-6 font-semibold text-5xl">
                <span className="text-deepblue">Item Classification</span>
              </h3>
              <p className="text-xl py-4 px-8">
                A python system that reads text on product. Then the system
                classify the item!
              </p>
              <p className="text-lg pl-8 pr-8">Github: NDA!</p>
            </div>
            <div
              id="parent-image"
              className="flex flex-auto items-center justify-center w-full"
            >
              <Image
                className="rounded"
                src={'/assets/item_classy.png'}
                width={300}
                height={480}
              />
            </div>
          </div>

          {/* item 2 */}
          <div
            id="parent-container"
            className="flex items-center columns-2 mt-52 mb-20"
          >
            <div
              id="parent-image"
              className="flex flex-auto items-center justify-center w-full"
            >
              <Image
                className="rounded"
                src={'/assets/poggers.png'}
                width={300}
                height={300}
              />
            </div>
            <div id="parent-text" className="flex-auto w-full">
              <h3 className="px-6 font-semibold text-5xl">
                <span className="text-deepblue">Poggers Pumpkin</span>
              </h3>
              <p className="text-xl py-4 px-8">
                A mysterious pumpkin that changes its color on vocal command.
              </p>
              <p className="text-lg pl-8 pr-8">
                Github:
                <a
                  target="_blank"
                  href="https://github.com/MOrowo/simple_speech_recognition"
                  rel="noopener noreferrer"
                  className="text-deepblue"
                >
                  {' '}
                  Click Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectspage;
