import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Characters.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  const data = await res.json();

  return {
    props: { people: data }
  };
};

export const apiCall = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const people = ({ people }) => {
  const [results, setResults] = useState(people.results);
  const [nextPage, setNextPage] = useState(people.next);
  const [prevPage, setPrevPage] = useState(people.prev);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const getNewData = async (url) => {
    setIsLoading(true);
    setDisable(true);
    const data = await apiCall(url);
    setResults(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setIsLoading(false);
    setDisable(false);
  };
  return (
    <>
      <Head>
        <title>Starwars API | Characters</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          There are {people.count} characters in the star wars universe
        </h1>
        <h3 className={styles.title}>
          Select one to find out more about that character
        </h3>
        <div>
          {results.map((person, idx) => (
            <Link
              href={`/universe/characters/${idx + 1}?id=${idx + 1}`}
              key={idx}
            >
              <div className={styles.listContainer}>
                <p key={idx} value={person}>
                  {person.name}
                </p>
              </div>
            </Link>
          ))}
          <div className={styles.pageButtons}>
            <div className={styles.buttons}>
              {prevPage && (
                <button
                  type="button"
                  disabled={disable}
                  onClick={() => getNewData(prevPage)}
                  className={styles.pageBtn}
                >
                  ⇐ Prev
                </button>
              )}
              {nextPage && (
                <button
                  type="button"
                  disabled={disable}
                  onClick={() => getNewData(nextPage)}
                  className={styles.pageBtn}
                >
                  Next ⇒
                </button>
              )}
            </div>
            <div className={styles.message}>
              {isLoading && <>
                Loading more...  <div className='loader'></div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default people;
