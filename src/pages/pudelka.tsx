import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { attributes, react as HomeContent } from '../content/pages/box.md';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Modal, Toolbar } from '@mui/material';
import { useState } from 'react';
import styles from './pudelka.module.scss';
import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material';
import { MediaCard } from '../components/MediaCard';

const Boxes: NextPage = () => {
  let { title, boxes, meta } = attributes;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number>(0);
  const handleOpen = (index: number) => () => {
    setSelected(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const selectedBox = boxes[selected];
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
              onClick={handleOpen(k)}
            />
          ))}
        </ul>
        <Modal
          open={open}
          sx={{
            width: '100%',
            height: '100%',
          }}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className={styles.modal_size}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className={styles.modal_title}
            >
              {selectedBox.name}
            </Typography>
            <Button onClick={handleClose} className={styles.b_close}>
              <Close />
            </Button>
            <Button
              className={styles.b_previous}
              onClick={() => {
                const newIndex = selected - 1;
                if (newIndex >= 0) {
                  setSelected(newIndex);
                }
              }}
            >
              <ChevronLeft fontSize="large" />
            </Button>
            <Button
              className={styles.b_next}
              onClick={() => {
                const nextIndex = selected + 1;
                if (nextIndex < boxes.length) {
                  setSelected(nextIndex);
                }
              }}
            >
              <ChevronRight fontSize="large" />
            </Button>
            <div className={styles.image}>
              <Image
                layout={'fill'}
                objectFit={'contain'}
                src={`${selectedBox.photo}`}
                alt={selectedBox.name}
              />
            </div>
          </div>
        </Modal>
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

export default Boxes;
