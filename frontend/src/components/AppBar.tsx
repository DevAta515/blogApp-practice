import { useNavigate } from "react-router-dom";
interface details {
    authorName: string;
}
const AppBar = ({ authorName }: details) => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between px-10 border-b-2 border-b-black items-center bg-slate-100 py-2 mb-3 cursor-pointer'
            onClick={() => navigate("/publish")}
        >
            <div className='text-2xl font-semibold'>
                Medium
            </div>
            <div className="flex justify-between items-center gap-24">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    onClick={() => navigate('/publish')}
                >+ New</button>
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{/\s/.test(authorName.trim()) === true ? authorName.split(" ")[0][0] + authorName.split(' ')[1][0] : authorName[0]}</span>
                </div>
            </div>
        </div>
    )
}

export default AppBar
