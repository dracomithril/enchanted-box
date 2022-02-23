import { Chip } from '@mui/material';
import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import { MediaCard } from '../../components/MediaCard';
import config from '../../lib/config';
import { countPosts, listPostContent, PostContent } from '../../lib/posts';
import { listTags, TagContent } from '../../lib/tags';

type PostProps = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

const Posts = ({ posts, tags, pagination }: PostProps) => {
  return (
    <Layout>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <MediaCard
              tags={post.tags}
              title={post.title}
              photo={`${post.photo}-/scale_crop/342x140/smart/`}
            />
          </li>
        ))}
      </ul>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>
            <Chip label={tag.name} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
