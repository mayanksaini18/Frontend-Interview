import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blog.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

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
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
          <CardDescription>Share your insights with the community</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Article Title" value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg font-semibold" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Write your content here..." value={content} onChange={(e) => setContent(e.target.value)} className="min-h-[300px]" />
          </div>
          <Button onClick={handleSubmit} className="w-full" disabled={mutation.isPending}>
            {mutation.isPending ? "Publishing..." : "Publish Article"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
