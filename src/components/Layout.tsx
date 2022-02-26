import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import Navigation from './Navigation';
import styled from 'styled-components';

const Layout: NextPage<{ className?: string }> = ({ className, children }) => {
  return (
    <div className={className}>
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
      <main className={'main'}>{children}</main>
      <Footer />
    </div>
  );
};

const WithStyles = styled(Layout)`
  min-height: 94vh;
  flex: 1;
  display: grid;
  grid-template-rows: [header] 100px [content] 3fr [footer];
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  nav {
    grid-row: 'header';

    header {
      background-color: cadetblue;
    }
  }
  footer {
    grid-row: 'footer';
  }
  .content {
    grid-row: 'content';
    background-color: hsl(0, 0%, 92%);
  }
`;

export default WithStyles;
