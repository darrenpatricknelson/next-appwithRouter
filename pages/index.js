// Imports
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// using a module for the index page styles
// Modules were not explained. Had to research alot about Next.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    {/* Created a custom Head tag to show the user which page they were currently on */}
      <Head>
        <title>Starwars API | Home</title>
      </Head>
      {/* body */}
      <div>
      {/* using a module to have page specific styles. therefore styles becomes an object */}
        <h1 className={styles.title}>Homepage</h1>
        {/* filler infoon the home page */}
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
          voluptates ullam, quasi dignissimos nisi error in ab consequatur
          facilis praesentium veritatis provident quaerat voluptas consequuntur
          eos tempora expedita. Quisquam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
          voluptates ullam, quasi dignissimos nisi error in ab consequatur
          facilis praesentium veritatis provident quaerat voluptas consequuntur
          eos tempora expedita. Quisquam.
        </p>
        {/* have a link the the details page */}
        <h3 className={styles.title}>
          For more about the starwars universe, head over to the details page{' '}
          <br /> ↓
        </h3>
        <Link href="/universe">
          <a className={styles.btn}>Details page</a>
        </Link>
      </div>
    </>
  );
}
