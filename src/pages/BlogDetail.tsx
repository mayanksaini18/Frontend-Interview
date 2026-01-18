import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/blog.api";
import { Blog } from "../types";

export default function BlogDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<Blog>({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>
  if (!data) return <p>No blog found</p>

  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.coverImage} alt={data.title} style={{ maxWidth: '100%' }} />
      <p>{data.content}</p>
    </div>
  );
}
