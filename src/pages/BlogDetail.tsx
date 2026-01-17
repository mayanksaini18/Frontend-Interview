import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/blog.api";

export default function BlogDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(Number(id))
  });

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}
