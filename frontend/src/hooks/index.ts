import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface BlogData {
    id: string,
    content: string,
    title: string,
    publishedDate: string,
    author: {
        name: string,
    }
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogData>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/${id}`, {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token'),
            }
        })
            .then(response => {
                console.log(response.data)
                setBlog(response.data.post);
                setLoading(false)
            })
    }, [id])
    return {
        loading,
        blog
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogData[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token'),
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false)
            })
    }, [])
    return {
        loading,
        blogs
    }
}