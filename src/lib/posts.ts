import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const postDirectory = join(process.cwd(), 'content/posts');

export type PostContent = {
  date: string;
  title: string;
  slug: string;
  tags?: string[];
  photo: string;
  fullPath: string;
  description: string;
};

let postCache: Readonly<PostContent>[];

const fetchPosts = () => {
  const allPostsData = readdirSync(postDirectory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filepath = join(postDirectory, filename);

      const fileContent = readFileSync(filepath, 'utf-8');

      const result = matter(fileContent, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      const matterData = result.data as PostContent;
      matterData.fullPath = filepath;

      const slug = filename.replace(/\.mdx$/, '');

      if (matterData.slug !== slug) {
        throw new Error(
          'slug field not match with the path of its content source'
        );
      }

      return matterData;
    });
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
};

export function countPosts(tag?: string): number {
  return fetchPosts().filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .length;
}

export const listPostContent = (page: number, limit: number, tag?: string) => {
  return fetchPosts()
    .filter((it) => !tag || it.tags?.includes(tag))
    .slice((page - 1) * limit, page * limit);
};
