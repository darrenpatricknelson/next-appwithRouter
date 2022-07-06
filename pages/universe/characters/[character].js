// imports
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Characters.module.css';
import Link from 'next/link';
import Head from 'next/head';

// this page is dynamic and will display a specific character
// this page is not as styled as the previous pages

// created an api call function
export const apiCall = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  // returns data
  return data;
};

// created a component using withRouter to grab information from the url/route
const Characters = withRouter((props) => {
  // created an id provided by the url/route
  const id = props.router.query.id;
  // created a state
  const [data, setData] = useState(null);

  // useEffect function will run once onload
  useEffect(() => {
    // if ID exists
    if (id) {
      // make an api call using id to get a character specific data return
      const getData = async (id) => {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();

        // set that data to the state we created above
        setData(data);
      };

      // call the funcion using the id
      getData(id);
    }
  }, []);

  return (
    <>
      {!data ? (
        <>
        {/* custom head tag */}
      <Head>
        <title>Starwars API | Loading...</title>
      </Head>
        <div className='loadingContent'>
            <div className='loader'></div>
            <Link href="/universe/characters">
            <a className={styles.btnLoading}>Head back to the Characters page</a>
          </Link>
          </div>
          </>
      ) : (
        <>
        {/* custom head tag */}
      <Head>
        <title>Starwars API | {data.name}</title>
      </Head>
          <h1>{data.name}</h1>
          <p>Height: {data.height}</p>
          <p>Hair color: {data.hair_color}</p>
          <p>Skin color: {data.skin_color}</p>
          <p>Eye color: {data.eye_color}</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Gender: {data.gender}</p>
          <br />
          <h3 className={styles.title}>
            For more characters in the starwars universe, head back to the
            Characters page <br /> ↓
          </h3>
          <Link href="/universe/characters">
            <a className={styles.btn}>Characters page</a>
          </Link>
        </>
      )}
    </>
  );
});

export default Characters;
