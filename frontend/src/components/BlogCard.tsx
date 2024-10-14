
import { useNavigate } from 'react-router-dom';
interface BlogComp {
    id: string,
    title: string;
    authorName: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogComp) => {
    const navigate = useNavigate();
    return (
        <div className='border-b-2 border-b-slate-400 rounded-lg p-2 w-[40%] flex justify-center  flex-col gap-3 hover:scale-105'
            onClick={() => navigate(`/blog/${id}`)}
        >
            <div className='flex flex-col'>
                <div className='header flex gap-2  justify-start '>
                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">{/\s/.test(authorName.trim()) === true ? authorName.split(" ")[0][0] + authorName.split(' ')[1][0] : authorName[0]}</span>
                    </div>
                    <div className="font-semibold font-mono">{authorName} <span>&#9679;</span> <span className='font-thin ml-1 text-sm'> {publishedDate}</span> </div>
                </div>
                <div className='font-semibold text-2xl my-2'>
                    {title}
                </div>
                <div className="line-clamp-2 leading-5 mb-2 ">
                    {content}
                </div>
                <div className='font-semibold text-sm'>
                    {`${Math.ceil(content.length / 100)} min(s) read`}
                </div>
            </div>
        </div>
    )
}


