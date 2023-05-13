import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNoneFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      //날짜별 정렬(내림차순)
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getPost(id: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.path === id);
}

export async function getMarkdown(id: string) {
  const filePath = path.join(process.cwd(), 'data/posts', `${id}.md`);
  return readFile(filePath, 'utf-8');
}
