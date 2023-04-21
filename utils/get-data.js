import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

const filesPath = path.join(process.cwd(), 'markdown');

export function getAllPostName() {
  const allFileNames = fs.readdirSync(filesPath);
  return allFileNames;
}

export function getPostData(fileName) {
  const postData = fs.readFileSync(path.join(filesPath, fileName), 'utf-8');
  const { data, content } = matter(postData);
  data.date = convertDateToReadableString(data.date);
  const post = {
    ...data,
    content,
  };
  return post;
}

export function getAllPostData() {
  const allPostName = getAllPostName();
  const allPostData = allPostName.map(postName => getPostData(postName));
  return allPostData;
}

export function convertDateToReadableString(dateObj) {
  const date = new Date(dateObj);
  const readableDate = date.toLocaleDateString(date, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return readableDate;
}

export function getFeaturedPosts() {
  const allPosts = getAllPostData();
  const featuredPosts = allPosts.filter(post => post.isFeatured);
  return featuredPosts;
}
