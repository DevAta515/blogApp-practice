
import { BlogData } from '../hooks'
import AppBar from './AppBar'

interface BlogProps {
    blog?: BlogData;
}
const BodyBlog = ({ blog }: BlogProps) => {
    if (!blog) {
        return <div>No blog data available</div>;
    }

    return (
        <>
            <AppBar authorName={blog.author.name} ></AppBar>
            <div className='grid grid-cols-12 px-20 pt-20 '>
                <div className="col-span-8">
                    <div className='text-6xl text-slate-900 font-extrabold'>
                        {blog.title}
                    </div>
                    <div className="text-lg text-slate-400">{blog.content}</div>
                    <div className="text-lg">Posted On 2nd December 2023</div>
                </div>
                <div className="col-span-4">
                    Author
                    <div className='ml-4 font-semibold  text-xl'>
                        {blog.author.name}
                    </div>
                    <div className='ml-4 text-slate-700'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cupiditate, laboriosam aspernatur dolor porro perspiciatis magnam. Laborum impedit consectetur.
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyBlog
