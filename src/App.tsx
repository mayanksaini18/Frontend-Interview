import { Route , Routes , Link } from 'react-router-dom';
import BlogList from "./pages/Bloglist";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/createBlog";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-sans">
      
      {/* 1. Top Navigation Bar (Sticky) */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b px-6 py-3 bg-white/95 backdrop-blur shrink-0">
        <div className="flex items-center gap-2">
           <Link to="/" className="flex items-center gap-2">
             <span className="text-xl md:text-2xl font-bold tracking-wide text-slate-900">
               CA MONK
             </span>
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
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
        >
          Create Blog
        </Link>
      </nav>

      {/* 2. Branding Hero Section */}
      <div className="bg-white border-b py-10 text-center space-y-2 shrink-0 px-4">
         <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">CA Monk Blog</h1>
         <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Stay updated with the latest trends in finance, accounting, and career growth
         </p>
      </div>

      {/* 3. Main Content Area */}
      <div className="flex flex-1 container mx-auto max-w-7xl">
        
        {/* Left Sidebar: Blog List - UPDATED WIDTH */}
        {/* Changed width to [300px] to make it tighter/shift left */}
        <aside className="hidden md:block w-[280px] md:w-[300px] border-r bg-muted/5 shrink-0 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
           <div className="p-4 pb-2 sticky top-0 bg-background/95 backdrop-blur z-10 border-b">
              <h2 className="font-bold text-lg tracking-tight">Latest Articles</h2>
           </div>
           <div className="p-3 pt-2">
              <BlogList />
           </div>
        </aside>

        {/* Right Panel: Detail View */}
        <main className="flex-1 bg-background min-h-[600px]">
          <div className="max-w-4xl mx-auto p-6 md:p-10">
            <Routes>
              <Route path="/" element={<div className="flex h-[40vh] items-center justify-center text-muted-foreground">Select an article to start reading</div>} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/create" element={<CreateBlog />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}

export default App