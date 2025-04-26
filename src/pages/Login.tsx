import { User,Lock } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../states/userStates';
import { useState } from 'react';
import { useGetUser } from '../hooks/userHooks/useGetUser';





export function Login() {
    const {changeUser}=useUserStore();
    
    const nav=useNavigate();
    const [username,setUsername]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const [fetch,setFetch]=useState<boolean>(false);
    const [error,setError]=useState<string>('');

    const {isLoading,refetch}=useGetUser({username:username,password},fetch);

     async function Submit(){
     if(username.length >= 8 && username.length <= 20 
        && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}/.test(password)){
        setFetch(true);
       
      try {
        const { data } = await refetch(); 
            changeUser(data);
            nav('/task-tracker');
    } catch (error) {
        setError(`Error:${error}`);
    }
    setFetch(false);
     }else{
        setError('Username or password is incorrect');
     }

}
   
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                   
                />
                
            </div>
            </label>
            <span className={error!==""?"text-red-500 bg-red-200 border border-red-500 rounded-md p-2":""}>{error}</span>
            <button onClick={()=>Submit()}
            disabled={isLoading}
             className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-700 cursor-pointer transition duration-150">
            {isLoading? <img className="mx-auto my-auto size-8 animate-spin" 
            src="../src/assets/Loading.svg" alt="Loading icon" />
            : "Login"}
            </button>
            <h2 className='font-semibold text-xl text-blue-600'>Do you have an account?</h2>
            <button className='text-blue-700 cursor-pointer p-2 px-4 hover:bg-gray-100 hover:underline transition duration-150'>
                <Link to={"/register"}>Create an account</Link></button>
        </div>
        </main>
    );

}