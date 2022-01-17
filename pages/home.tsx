import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './home.module.scss';
import { attributes, react as HomeContent } from '../content/home.md';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';

function MediaCard({ photo, name, description }: Box) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Podziel się</Button>
      </CardActions>
    </Card>
  );
}

const Home: NextPage = () => {
  let { title, boxes, meta } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>
      <Toolbar style={{ backgroundColor: 'cadetblue', color: 'antiquewhite' }}>
        <h1>{title}</h1>
      </Toolbar>
      <main className={styles.main}>
        <div className={styles.content}>
          <HomeContent />
        </div>
        <ul className={styles.list}>
          {boxes.map((box, k) => (
            <MediaCard
              key={k}
              description={box.description}
              name={box.name}
              photo={`${box.photo}-/scale_crop/342x140/smart/`}
            />
          ))}
        </ul>
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
