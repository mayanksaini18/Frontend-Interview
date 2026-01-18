
import { Route , Routes , Link } from 'react-router-dom';
import BlogList from "./pages/Bloglist";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
function App() {
  
  return (
    <>
      <Link to="/create">Create Blog</Link>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </>
  )
}

export default App
