
import { useParams } from "react-router-dom";
import BlogList from "./Bloglist";
import BlogDetail from "./BlogDetail";

export default function BlogPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-2">CA Monk Blog</h1>
        <p className="text-muted-foreground">Stay updated with the latest trends in finance, accounting, and career growth</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar - Blog List */}
        <aside className="lg:col-span-4 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto pr-2">
           <div className="mb-4 font-bold text-lg">Latest Articles</div>
           <BlogList />
        </aside>

        {/* Right Content - Blog Detail */}
        <main className="lg:col-span-8 bg-background min-h-[500px] border-l pl-0 lg:pl-8 border-transparent lg:border-border">
          {/* If an ID exists, show detail, otherwise show a placeholder */}
          {id ? <BlogDetail /> : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-50">
              <p>Select an article to read</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}