import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id:string

}

export const BlogCard= ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps)=>{
    return (
    <Link to={`/blog/${id}`} >
    
    <div className="border-b border-slate-200 p-4  w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="flex justify-center flex-col">
                <Avatar />
            </div>
        
            <div className="text-base font-normal text-slate-800 px-2">
            {authorName}
            </div>
            <div className="text-base text-slate-500">
            {publishedDate}
            </div>
        </div>
       
        <div className="text-xl pt-2 font-semibold">
            {title}
        </div>
        <div className="text-base t-1 font-extralight">
            {content.slice(0,100)+ "..."}
        </div>
        <div className="text-sm font-thin pt-3">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>

    </div> </Link>
    )
}

export function Avatar(){
    return (
        <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
    )
}