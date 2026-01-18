import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blog.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
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
    mutation.mutate({ title, content, description });
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">Create New Article</h3>
          <p className="text-sm text-muted-foreground">Share your insights with the community</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-2">
            <input 
              placeholder="Article Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-lg font-semibold ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            />
          </div>
          <div className="space-y-2">
            <input 
              placeholder="Short Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            />
          </div>
          <div className="space-y-2">
            <textarea 
              placeholder="Write your content here..." 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              className="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            />
          </div>
          <button onClick={handleSubmit} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" disabled={mutation.isPending}>
            {mutation.isPending ? "Publishing..." : "Publish Article"}
          </button>
        </div>
      </div>
    </div>
  );
}
