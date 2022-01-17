import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { attributes, react as HomeContent } from '../content/home.md';
import Image from 'next/image';

const Home: NextPage = () => {
  let { title, boxes } = attributes;
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
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {boxes.map((box, k) => (
              <li key={k}>
                <h2>{box.name}</h2>
                <p>{box.description}</p>
                <Image
                  src={box.image}
                  height={144}
                  width={144}
                  alt={box.name.replace(' ', '_')}
                />
              </li>
            ))}
          </ul>
        </article>
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
