import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blog.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const client = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['blogs'] });
      navigate("/");
    }
  });

  const handleSubmit = () => {
    mutation.mutate({ title, content });
  };

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}
