// imports
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Characters.module.css';
import { useState } from 'react';

// using an array to output the catergories
// for this example, only the characters catergory is active therefor it is not in the array below
const inactiveList = ['Films', 'Starships', 'Planets', 'Species', 'Vehicles'];

const Universe = () => {
  // created some states for statemanagement 
  const [isLoading, setIsLoading] = useState(false);
  const [valMessage, setValMessage] = useState('');

  // handles the user clicking on the active catergory (characters)
  const handleActiveClick = () => {
    // sets isLoading to true which will display a loader animation and deactivated button clicks
    setIsLoading(true);
  };

  // handles the user clicking on the inactive catergory (inactive list)
  const handleInactiveClick = (item) => {
    // outputs a message telling the user that catergory is inactive
    setValMessage(
      `${item} is current inactive. Please select an active catergory.`
    );
  };

  return (
    <>
    {/* custom head tag */}
      <Head>
        <title>Starwars API | Universe</title>
      </Head>
      {/* body */}
      <div>
        <h1 className={styles.title}>Welcome to the starwars universe!</h1>
        <h3 className={styles.title}>
          We have a list below of everything you could find in the starwars
          universe!
        </h3>
        <p className={styles.title}>Choose one and happy exploring.</p>
        {/* creating the active caterory using next Link */}
        <Link href="/universe/characters">
          <div onClick={handleActiveClick} className={styles.listContainer}>
            <p>Characters</p>
          </div>
        </Link>
        {/* using .map to creating a list based on the inactive catergories */}
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
        {/* loading animation content  */}
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
