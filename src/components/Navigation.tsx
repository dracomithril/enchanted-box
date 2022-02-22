import { Home } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './components.module.scss';

const Navigation = () => {
  const router = useRouter();
  return (
    <div className={style.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? style.active : undefined}>
              <Home />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a
              className={
                router.pathname.startsWith('/posts') ? style.active : undefined
              }
            >
              posty
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
