export interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

export type NewBlog = Pick<Blog, 'title' | 'content' | 'description'>;
