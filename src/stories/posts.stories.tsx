import { TagContent } from '../lib/tags';
import Posts from '../pages/posts';
import '../pages/posts/posts.module.scss';

export default {
  title: 'Pages/Posts',
  component: Posts,
  parameters: {
    nextRouter: {
      path: '/posts',
      asPath: '/posts',
      query: {},
    },
  },
};

const post = {
  slug: 'komunijnie',
  title: 'Komunijnie',
  date: '2022-02-23',
  author: 'mgrezel',
  photo: 'https://ucarecdn.com/94c58852-ca3c-46f4-9150-c01c105a3d9a/',
  tags: ['komunia', 'okolicznościowe'],
  fullPath: '',
  description: `
  # wstęp

niezapomniana pamiatka pierwszej komunii

## metoda wykonania

## informacje dodatkowe
`,
};

const createTags = (tags: string[]): TagContent[] =>
  tags.map((tag) => ({
    name: tag,
    slug: tag,
  }));

export const NoPosts = () => (
  <Posts posts={[]} tags={[]} pagination={{ current: 1, pages: 5 }} />
);

export const WithPosts = () => (
  <Posts
    posts={Array.from({ length: 30 }, () => post)}
    tags={createTags(post.tags)}
    pagination={{ current: 1, pages: 5 }}
  />
);
