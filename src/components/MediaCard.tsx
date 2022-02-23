import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Stack } from '@mui/material';
import { MouseEventHandler } from 'react';
import { PostContent } from '../lib/posts';

export function MediaCard({
  photo,
  title,
  tags,
  onClick,
}: Partial<PostContent> & { onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Stack direction="row" spacing={1}>
              {tags?.map((tag) => {
                return <Chip key={tag} label={tag} />;
              })}
            </Stack>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
