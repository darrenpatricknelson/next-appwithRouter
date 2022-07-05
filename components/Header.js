import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <h1 className="logo">Starwars universe</h1>
      <Link href="/">
        <a className="home">Home</a>
      </Link>
      <Link href="/about">
        <a className="about">About</a>
      </Link>
      <Link href="/universe">
        <a className="details">Details</a>
      </Link>
    </nav>
  );
};

export default Header;
