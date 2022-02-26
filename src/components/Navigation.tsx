import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import style from './components.module.scss';
import styled from 'styled-components';

const drawerWidth = 240;

const Navigation = ({ className }: { className?: string }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${className} navigation`}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Zaczarowane pudełko
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={'drawerMenu'}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : undefined}>
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith('/posts') ? 'active' : undefined
                }
              >
                posty
              </a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

const WithStyles = styled(Navigation)`
  .navigation {
    flex-direction: row;
    width: 7rem;
    display: block;

    ul {
      opacity: 0;
      width: 100%;
      text-align: right;
      list-style: none;
      margin: 0;
      padding: 0;
      position: fixed;
      top: 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
      transform: translateY(100%);
      transition: opacity 200ms;
    }

    .active {
      color: #222;
      ul {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (min-width: 769px) {
    .navigation {
      width: 7rem;
      display: block;
      ul {
        opacity: 1;
        width: 7rem;
        top: auto;
        display: block;

        li {
          font-size: 1rem;
          padding: 0;
        }
      }
    }
  }

  .drawerMenu {
    li {
      margin: 5px;
    }
  }
`;

export default WithStyles;
