import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { MainSkeleton } from "../components/MainSkeleton";

import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();


if(loading){
    return (
      <div>
      <Appbar />
      <div className="flex justify-center pt-2">
        <div>
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
            <MainSkeleton />
        </div>
      </div>
    </div>
    )
}

  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-2">
        <div>
          {blogs.map(blog => 
            <BlogCard
                id={(blog.id)}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"21 March 2024"}
            />
            )}
        </div>
      </div>
    </div>
  );
};
