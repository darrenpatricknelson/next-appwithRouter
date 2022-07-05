import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starwars API | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
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
