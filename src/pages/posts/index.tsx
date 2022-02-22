import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import config from '../../lib/config';
import { listPostContent } from '../../lib/posts';

const Posts = () => {
  return <Layout></Layout>;
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = [] as any[]; // listTags();
  const pagination = {
    current: 1,
    pages: 5, // Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
