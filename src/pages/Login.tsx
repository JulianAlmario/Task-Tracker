import { User,Lock } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
export function Login() {
    return (
            <main className='font-display p-4 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen'>
        <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-2xl md:w-4/6 lg:w-3/6 h-auto mx-auto p-8 shadow-lg">
            <Logo/>
            <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">Welcome to ToCompleteTask</h1>
            <label htmlFor="Username" className="w-full mb-4">
            <span className="block text-white mb-2">Username:</span>
            <div className="flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600">
            <User className="text-blue-500 my-auto" />
            <input
                type="text"
                name="Username"
                id="Username"
                placeholder='Enter your username'
                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
            />
            </div>
               
            </label>
            <label htmlFor="Password" className="w-full mb-6">
            <span className="block text-white mb-2">Password</span>
            <div className="flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600">
            <Lock className="text-blue-500 my-auto" />
                <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Enter your password"
                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                   
                />
                
            </div>
            </label>
            <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-700 cursor-pointer transition duration-150">
            Login
            </button>
            <h2 className='font-semibold text-xl text-blue-600'>Do you have an account?</h2>
            <button className='text-blue-700 cursor-pointer p-2 px-4 hover:bg-gray-100 hover:underline transition duration-150'>
                <Link to={"/register"}>Create an account</Link></button>
        </div>
        </main>
    );
}