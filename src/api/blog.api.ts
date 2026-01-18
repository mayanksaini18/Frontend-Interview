import { Blog, NewBlog } from '../types';

const BASE_URL = 'http://localhost:3001';

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${BASE_URL}/blogs`);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

export const createBlog = async (blog: NewBlog): Promise<Blog> => {
  const newBlog = {
    ...blog,
    category: ['General'],
    date: new Date().toISOString(),
    coverImage: 'https://placehold.co/600x400',
  };

  const response = await fetch(`${BASE_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBlog),
  });

  if (!response.ok) {
    throw new Error('Failed to create blog');
  }
  return response.json();
};
