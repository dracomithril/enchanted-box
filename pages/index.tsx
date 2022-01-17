import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          tu wkrótce znajdziesz swoje <strong>zaczarowane pudełko</strong>
        </h1>
      </main>

      <footer className={styles.footer}>
        tworzone przez
        <a href="https://michal.grezel.pl" target="_blank" rel="noreferrer">
          michal.grezel
        </a>
      </footer>
    </div>
  );
};

export default Home;
