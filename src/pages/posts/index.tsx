import { Chip } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { MediaCard } from '../../components/MediaCard';
import config from '../../lib/config';
import { countPosts, listPostContent, PostContent } from '../../lib/posts';
import { listTags, TagContent } from '../../lib/tags';
import style from './posts.module.scss';

type PostProps = {
  className?: string;
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

const Posts: NextPage<PostProps> = ({ posts, tags, pagination, className }) => {
  return (
    <Layout>
      <div className={className}>
        {posts.map((post, i) => (
          <MediaCard
            key={i}
            tags={post.tags}
            title={post.title}
            photo={`${post.photo}-/scale_crop/342x140/smart/`}
          />
        ))}
      </div>
      <div>
        {tags.map((tag, i) => (
          <Chip key={i} label={tag.name} />
        ))}
      </div>
    </Layout>
  );
};

const WithStyles = styled(Posts)`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 10px;
`;

export default WithStyles;

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
