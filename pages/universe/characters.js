// Imports
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Characters.module.css';

// this page will make a general api call with the 'people' catergory
// that data will then be outputed in a list form and the user will be able to select a character that they are interested in

// getStaticProps will do the initial api call
export const getStaticProps = async () => {
  // using a catergory search and not a specific search (url)
  const res = await fetch('https://swapi.dev/api/people/');
  const data = await res.json();

  // returning data
  return {
    props: { people: data }
  };
};

// created another apiCall function which will be used when the user switches between pages
// the outputed list will be 10 items long so the user will be able to move to pages to load more
export const apiCall = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  // returns data
  return data;
};

// destructuring the returned data from getStaticProps
const people = ({ people }) => {
  // creating states for state management
  // first there states will be set to the initial data returned from getStaticProps
  const [results, setResults] = useState(people.results);
  const [nextPage, setNextPage] = useState(people.next); // next page url (used which calling apiCall(url))
  const [prevPage, setPrevPage] = useState(people.prev); // previous paage url (used which calling apiCall(url))
  // the following states are used when the user clicks the next/prev buttons
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  // this is the handle button click function
  const getNewData = async (url) => {
    // sets states to true which pops up the loader animation and disables button clicks since each button click is an api Call
    setIsLoading(true);
    setDisable(true);
    // api call
    const data = await apiCall(url);
    // the data returned will be destructed and set to the specific states
    setResults(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    // setting the following states back to false to hide loader animation and allow button clicks
    setIsLoading(false);
    setDisable(false);
  };
  return (
    <>
    {/* custom head tag */}
      <Head>
        <title>Starwars API | Characters</title>
      </Head>
      {/* body */}
      <div>
        <h1 className={styles.title}>
        {/* returns a sentence with the total number of characters */}
          There are {people.count} characters in the star wars universe
        </h1>
        <h3 className={styles.title}>
          Select one to find out more about that character
        </h3>
        <div>
        {/* using .map to run through the results array and create a specific item per entry in the array */}
          {results.map((person, idx) => (
            <Link
            // creating a custom route that will be used in the specific character page
            // this custom route will contain an ID that will be used to make an api call that will return a specific character
              href={`/universe/characters/${idx + 1}?id=${idx + 1}`}
              key={idx}
            >
            {/* using custom classes from the characters css module */}
              <div className={styles.listContainer}>
                <p>
                  {person.name}
                </p>
              </div>
            </Link>
          ))}
          {/* 
          creating the previous and next buttons 
          will run a function using the prevPage and nextPage states created above
          These states contain a URL that will be used to make a page url request 
          that will return the next 10 set of characters
          */}
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
            {/* loading animation */}
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
