import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from './Footer';
import styles from './components.module.scss';
import Navigation from './Navigation';

const Home: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>zaczarowane pudełko</title>
        <meta
          name="description"
          content="magiczne pudełka na wyjatkowe okazje"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Home;
