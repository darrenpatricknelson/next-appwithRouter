import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Characters.module.css';

const inactiveList = [
  'Films (Inactive)',
  'Starships (Inactive)',
  'Planets (Inactive)',
  'Species (Inactive)',
  'Vehicles (Inactive)'
];

const Universe = () => {
  return (
    <>
      <Head>
        <title>Starwars API | Universe</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to the starwars universe!</h1>
        <h3 className={styles.title}>
          We have a list below of everything you could find in the starwars
          universe!
        </h3>
        <p className={styles.title}>Choose one and happy exploring.</p>
        <Link href="/universe/characters">
          <div className={styles.listContainer}>
            <p>Characters</p>
          </div>
        </Link>
        {inactiveList.map((item) => {
          return (
            <div className={styles.listContainer}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Universe;
