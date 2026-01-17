export const getBlogs = async () => {
  const res = await fetch('http://localhost:3001/blogs');
  return res.json();
};

export const getBlogById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);
  return res.json();
};

export const createBlog = async (blog: any) => {
  const res = await fetch('http://localhost:3001/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog)
  });
  return res.json();
};
