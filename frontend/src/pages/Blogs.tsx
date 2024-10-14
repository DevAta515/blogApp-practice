import AppBar from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div className="w-full flex justify-center items-center px-36 mt-36 scale-150">
            <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    }
    console.log(blogs);
    return (
        <>
            <AppBar authorName="Jane Smith"></AppBar>
            <div className="flex flex-col justify-center items-center gap-4 py-10">
                {blogs.map((blog, index) => {
                    return (
                        <BlogCard
                            key={index}
                            id={blog.id}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={blog.publishedDate}
                        />

                    )
                })}
                {/* <BlogCard
                    authorName="Jane Smith"
                    title="Exploring AI in Everyday Life"
                    content="Artificial intelligence is now a part of our daily lives. From smart home assistants to advanced healthcare solutions, AI is transforming how we live and work..."
                    publishedDate="October 13, 2024"
                />
                <BlogCard
                    authorName="Jane Smith"
                    title="Exploring AI in Everyday Life"
                    content="Artificial intelligence is now a part of our daily lives. From smart home assistants to advanced healthcare solutions, AI is transforming how we live and work..."
                    publishedDate="October 13, 2024"
                /> */}
            </div>
        </>
    )
}

