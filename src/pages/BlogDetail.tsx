import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/blog.api";
import type { Blog } from "../types";
import { Share2, ThumbsUp, MessageSquare } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<Blog>({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  if (isLoading) return (
    <div className="space-y-6">
      <div className="h-[300px] w-full rounded-xl bg-muted animate-pulse" />
      <div className="h-10 w-3/4 bg-muted animate-pulse rounded" />
      <div className="h-24 w-full bg-muted animate-pulse rounded" />
    </div>
  );

  if (isError || !data) return <p className="text-destructive">Unable to load article.</p>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* 1. Hero Image */}
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl shadow-sm">
        <img 
          src={data.coverImage} 
          alt={data.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 2. Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wide">
            {data.category?.[0]} <span className="text-muted-foreground">•</span> 5 min read
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
          {data.title}
        </h1>

        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors h-9">
            <Share2 className="w-4 h-4" /> Share Article
        </button>
      </div>

      {/* 3. The Metadata Box (Grey Box in UI) */}
      <div className="bg-muted/30 border border-border rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Category</p>
            <p className="font-semibold">{data.category?.join(" & ")}</p>
        </div>
        <div className="space-y-1 md:border-l md:border-r border-border/50">
            <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Read Time</p>
            <p className="font-semibold">5 Mins</p>
        </div>
        <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Date</p>
            <p className="font-semibold">{new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* 4. Content */}
      <article className="max-w-none text-muted-foreground leading-7">
        {/* Note: In a real app, use a markdown parser if content is markdown, or dangerouslySetInnerHTML if HTML */}
        <p className="whitespace-pre-wrap">{data.content}</p> 

        {/* Example Quote based on UI */}
        <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic rounded-r-lg not-italic my-6 text-foreground">
            "The accountant of the future will be a data scientist, a storyteller, and a strategic partner, all rolled into one."
        </blockquote>
      </article>

      <hr className="my-8" />

      {/* 5. Author Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://github.com/shadcn.png" alt="Author" />
            </div>
            <div>
                <p className="text-sm font-bold text-foreground">Written by Author Name</p>
                <p className="text-xs text-muted-foreground">Senior Financial Analyst</p>
            </div>
        </div>
        <div className="flex gap-4 text-muted-foreground">
            <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-primary" />
            <MessageSquare className="w-5 h-5 cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
}