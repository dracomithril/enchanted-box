import styles from './components.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      tworzone przez
      <a href="https://michal.grezel.pl" target="_blank" rel="noreferrer">
        michal.grezel
      </a>
    </footer>
  );
}
