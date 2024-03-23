import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog=()=>{
    const { id }=useParams();
    const {loading,blog}=useBlog({
        id: id || ""
    });
    
    if(loading || !blog){
        return(<div>
            <BlogSkeleton />
        </div>)
    }

   return(
   <div>
    
   <FullBlog blog={blog} />
    
   </div>)
    
}