
import { Route , Routes , Link } from 'react-router-dom';
import BlogList from "./pages/Bloglist";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

function App() {
  
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background">
      {/* 1. Top Navigation Bar */}
      <nav className="flex items-center justify-between border-b px-6 py-3 bg-white z-20 shrink-0">
        <div className="flex items-center gap-2">
           <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter">
             <div className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-lg">CA</div>
             <span>MONK</span>
           </Link>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
           {['Tools', 'Practice', 'Events', 'Job Board', 'Points'].map(item => (
             <span key={item} className="cursor-pointer hover:text-foreground transition-colors">{item}</span>
           ))}
        </div>

        <Link 
          to="/create" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
        >
          Create Blog
        </Link>
      </nav>

      {/* 2. Branding Hero Section */}
      <div className="bg-white border-b py-8 text-center space-y-2 shrink-0 px-4">
         <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">CA Monk Blog</h1>
         <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Stay updated with the latest trends in finance, accounting, and career growth
         </p>
      </div>

      {/* 3. Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Blog List */}
        <aside className="w-[350px] md:w-[400px] border-r bg-muted/10 overflow-y-auto flex flex-col shrink-0">
           <div className="p-5 pb-2 sticky top-0 bg-background/95 backdrop-blur z-10 border-b">
              <h2 className="font-bold text-lg tracking-tight">Latest Articles</h2>
           </div>
           <div className="p-4 pt-2">
              <BlogList />
           </div>
        </aside>

        {/* Right Panel: Detail View */}
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="max-w-4xl mx-auto p-6 md:p-10">
            <Routes>
              <Route path="/" element={<div className="flex h-[50vh] items-center justify-center text-muted-foreground">Select an article to start reading</div>} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/create" element={<CreateBlog />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
