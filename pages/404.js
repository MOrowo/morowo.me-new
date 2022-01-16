import styles from '../src/styles/Home.module.css';

const NotFound = () => {
  return (
    <div className={styles.main}>
      <h1 className="text-4xl">
        <span className="text-red-500">404</span> - Not Found
      </h1>
      <p className="text-xl">This page maybe broken. Please try again later!</p>
    </div>
  );
};

export default NotFound;
