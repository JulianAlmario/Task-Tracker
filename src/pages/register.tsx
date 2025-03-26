import { useForm } from 'react-hook-form';
import { User, Mail, Lock } from 'lucide-react';
import { Logo } from '../components/Logo';
import { useState } from 'react';
import { UserType } from '../core/interfaces/UserProps';
import { useCreateUser } from '../hooks/useCreateUser';
import { useNavigate } from 'react-router-dom';

interface RegisterProps extends UserType {
    confirmPassword: string;
};


export function Register() {
    const navigate=useNavigate();
    const { mutate: CreateUser } = useCreateUser();
    const [checkpassword, setcheckpassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>();
    const onSubmit = (data: RegisterProps) => {
        if (data.password !== data.confirmPassword) {
            setcheckpassword('Passwords do not match');
            return;
        }

        setcheckpassword('');
            
            const newUser: UserType = {
                user: data.user,
                email: data.email,
                password: data.password
            };

            CreateUser(newUser);
            navigate('/login');
        
    };

    return (
        <main className='font-display p-4 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen'>
            <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-2xl md:w-4/6 lg:w-3/6 h-auto mx-auto p-8 shadow-lg">
                <Logo />
                <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">Register to ToCompleteTask</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 justify-center items-center">
                    <label htmlFor="user" className="w-full mb-4">
                        <span className="block text-white">Username:</span>
                        <div className={`flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600 ${errors.user ? 'border-red-500' : ''}`}>
                            <User className="text-blue-500 my-auto" />
                            <input
                                type="text"
                                id="user"
                                placeholder='Enter your username'
                                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                                {...register('user', { required: true,
                                   pattern: {
                                    value: /^[a-zA-Z0-9]{8,20}$/,
                                    message: "Username must be between 8 and 20 characters"
                                   }
                                 })}
                            />
                        </div>
                        {errors.user && <span className="text-red-500 mt-2">{errors.user.message}</span>}
                    </label>
                    <label htmlFor="email" className="w-full">
                        <span className="block text-white">Email:</span>
                        <div className={`flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600 ${errors.email ? 'border-red-500' : 'border-blue-500'}`}>
                            <Mail className="text-blue-500 my-auto" />
                            <input
                                type="email"
                                id="email"
                                placeholder='Enter your email'
                                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                                {...register('email', { required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Email not valid"
                                    }
                                 }
                                    
                                )}
                            />
                        </div>
                        {errors.email && <span className="text-red-500 mt-2">{errors.email.message}</span>}
                    </label>
                    <label htmlFor="password" className="w-full">
                        <span className="block text-white mb-2">Password:</span>
                        <div className={`flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600 ${errors.password ? 'border-red-500' : ''}`}>
                            <Lock className="text-blue-500 my-auto" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                                {...register('password', { required: true,
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/,
                                        message: "Password must contain at least 8 characters, including 1 uppercase letter, 1 number, and 1 special character"
                                    }
                                 })}
                            />
                        </div>
                        {errors.password && <span className="text-red-500 mt-2">{errors.password.message}</span>}
                    </label>
                    <label htmlFor="confirmPassword" className="w-full">
                        <span className="block text-white mb-2">Confirm Password:</span>
                        <div className={`flex gap-2 w-full p-2 rounded border border-gray-300 bg-blue-100 items-center focus:border focus:border-blue-600 ${errors.confirmPassword ? 'border-red-500' : ''}`}>
                            <Lock className="text-blue-500 my-auto" />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full p-1 placeholder-blue-400 placeholder-opacity-75 focus:outline-none"
                                {...register('confirmPassword', { required: true,
                                })}
                            />
                        </div>
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                    </label>
                    <p className='text-red-600'>{checkpassword}</p>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-700 cursor-pointer transition duration-150">
                        Register
                    </button>
                </form>
                <h2 className='font-semibold text-xl text-blue-600'>Already have an account?</h2>
                <button className='text-blue-700 cursor-pointer p-2 px-4 hover:bg-gray-100 hover:underline transition duration-150'>Login</button>
            </div>
        </main>
    );
}