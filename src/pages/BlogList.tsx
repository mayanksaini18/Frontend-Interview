import { useQuery } from "@tanstack/react-query";
import { getBlogs } from '../api/blog.api';
import { Link, useMatch } from 'react-router-dom';
import type { Blog } from '../types';
import { cn } from "../lib/utils";

export default function BlogList() {
  // useMatch is required here because BlogList is outside the <Routes>
  const match = useMatch('/blogs/:id');
  const id = match?.params.id;

  const { data, isLoading, isError } = useQuery<Blog[]>({
    queryKey: ['blogs'],
    queryFn: getBlogs
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-4 rounded-lg border border-transparent animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) return <div className="text-destructive">Failed to load list</div>;

  return (
    <div className="space-y-3">
      {data?.map((blog) => {
        const isActive = id === String(blog.id);
        
        return (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="block group">
            <div className={cn(
              "p-4 rounded-lg transition-all duration-200 border border-transparent",
              // Active State: White background, Shadow, Left Primary Border (Blue)
              isActive 
                ? "bg-card shadow-md border-l-4 border-l-primary border-y-border border-r-border" 
                : "hover:bg-muted/50 border border-border/40"
            )}>
              {/* Top Row: Category & Date */}
              <div className="flex justify-between items-center mb-3">
                 <div className="flex gap-2">
                    {blog.category?.slice(0,1).map(c => (
                        <span key={c} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
                          {c}
                        </span>
                    ))}
                 </div>
                 <span className="text-[10px] text-muted-foreground">
                    {new Date(blog.date).toLocaleDateString()}
                 </span>
              </div>

              <h3 className={cn(
                "font-bold text-sm leading-tight mb-2 group-hover:text-primary transition-colors",
                isActive ? "text-primary" : "text-foreground"
              )}>
                {blog.title}
              </h3>
              
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {blog.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}