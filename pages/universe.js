import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Characters.module.css';
import { useState } from 'react';

const inactiveList = ['Films', 'Starships', 'Planets', 'Species', 'Vehicles'];

const Universe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [valMessage, setValMessage] = useState('');

  const handleActiveClick = () => {
    setIsLoading(true);
  };

  const handleInactiveClick = (item) => {
    setValMessage(
      `${item} is current inactive. Please select an active catergory.`
    );
  };

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
          <div onClick={handleActiveClick} className={styles.listContainer}>
            <p>Characters</p>
          </div>
        </Link>
        {inactiveList.map((item) => {
          return (
            <div
              onClick={() => handleInactiveClick(item)}
              className={styles.listContainer}
            >
              <p>{item} (Inactive)</p>
            </div>
          );
        })}
        <div>{valMessage}</div>
        {isLoading && (
          <div className="loadingContent">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Universe;
