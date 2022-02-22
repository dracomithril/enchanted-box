import type { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        tu wkrótce znajdziesz swoje <strong>zaczarowane pudełko</strong>
      </h1>
    </Layout>
  );
};

export default Home;
