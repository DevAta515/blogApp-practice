import AppBar from "../components/AppBar"
import { ChangeEvent, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useBlog } from "../hooks"
const Publish = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const navigate = useNavigate();
    return (
        <div className="flex justify-center flex-col items-center w-screen">
            <div className="w-full">
                <AppBar authorName="Helen"></AppBar>
            </div>
            <div className="w-[60%] flex justify-center items-center">
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" />
            </div>
            <div className="w-[60%] mt-10">
                <TextEditor onChange={(e) => {
                    setContent(e.target.value);
                }} ></TextEditor>
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                onClick={async () => {
                    const response = await axios.post(
                        `${BACKEND_URL}/blog`,
                        { title, content },
                        {
                            headers: {
                                authorization: "Bearer " + localStorage.getItem("token"),
                            },
                        }
                    )
                    if (response.data.success) {
                        const id = response.data.blogId;
                        navigate(`/blog/${id}`)
                    }

                }}
            >
                Publish post
            </button>

        </div >
    )
}
function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <>
            <form>
                <div className="w-full mb-4 border border-gray-500 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between px-3 py-2 border-b">
                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 12 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                        />
                                    </svg>
                                    <span className="sr-only">Attach file</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 20"
                                    >
                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    <span className="sr-only">Embed map</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 20"
                                    >
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    </svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 20"
                                    >
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                    </svg>
                                    <span className="sr-only">Format code</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                    </svg>
                                    <span className="sr-only">Add emoji</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 21 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 17V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v13m4-9 4 4 8-8"
                                        />
                                    </svg>
                                    <span className="sr-only">Apply to all</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg">
                        <label htmlFor="editor" className="sr-only">
                            Publish post
                        </label>
                        <textarea
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                            placeholder="Write an article..."
                            required
                        ></textarea>
                    </div>
                </div>

            </form>


        </>
    )
}
export default Publish
