import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Characters.module.css';
import Link from 'next/link';

export const apiCall = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const Characters = withRouter((props) => {
  const id = props.router.query.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const getData = async (id) => {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        setData(data);
      };

      getData(id);
    }
  }, []);

  return (
    <div>
      {!data ? (
        <div className='loadingContent'>
            <div className='loader'></div>
            <Link href="/universe/characters">
            <a className={styles.btnLoading}>Head back to the Characters page</a>
          </Link>
          </div>
      ) : (
        <>
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
    </div>
  );
});

export default Characters;
