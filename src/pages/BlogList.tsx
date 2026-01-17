
import {useQuery} from "@tanstack/react-query"
import { getBlogs } from '../api/blog.api'
import { Link } from 'react-router-dom'

export default function Bloglist(){
    const { data , isLoading ,isError} = useQuery({
        queryKey : ['blogs'],
        queryFn : getBlogs
    })
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>

  return (
    <div>
      {data.map((blog: any) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

