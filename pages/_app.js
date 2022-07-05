import Layout from '../components/Layout';
import '../styles/globals.css';

// this page was provided by npx create-next-app. 
// Using a layout component to make sure all my pages have the header
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
