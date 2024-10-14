import { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SignupSchema } from '@dev_ata_515/blogapp-common';
import axios from 'axios';
import { BACKEND_URL } from '../config';
const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupSchema>({
        name: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/user/${type === 'signup' ? "signup" : "signin"}`, postInputs);
            const token = response.data.jwt;
            localStorage.setItem("token", token);
            navigate('/blogs')
        } catch (error) {
            console.log("SignUp failed", error)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
            <div className="flex flex-col justify-center w-[55%]">
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className="text-4xl font-bold text-center">
                        {type == "signup" ? "Create Account" : "Log In"}
                    </div>
                    <div className="text-slate-400">
                        {type == "signup" ? "Already have an account?" : "Don't have an account"} <Link to={type == "signup" ? "/signin?" : "/signup"} className='hover:underline'>{type == "signup" ? "Sign In" : "Sign Up"}</Link>
                    </div>
                </div>
                <div className='flex flex-col mt-4 w-full gap-3'>
                    {type === "signup" && <LabelInput label="Name" placeholder='Your Name' onChange={(e) => {
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            name: e.target.value
                        }))
                    }} />}
                    <LabelInput label="Email" placeholder='Your Email' onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelInput label="Password" type='password' placeholder='Your Password' onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>
                <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg mt-4 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
        </div>
    )
}
interface inputType {
    label: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelInput({ type, label, placeholder, onChange }: inputType) {
    return (
        <div>
            <label className="block mb-2 text-lg font-semibold text-gray-900">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}
export default Auth
