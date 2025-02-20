import React, { useState } from 'react';
import { useWindowStore } from '../states/WindowStates';
import { WindowDialogue } from './WindowDialogue';
import {X} from "lucide-react"


const CreateTask: React.FC = () => {
    const {changestate } = useWindowStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [limitDate, setLimitDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle task creation logic here
        console.log({ title, description, limitDate });
    };

    return (
     <WindowDialogue>
        <div className="bg-white rounded-xl shadow p-6 px-10 transition-all relative overflow-y-auto max-h-[80vh]">
        <button onClick={()=>changestate(1)} className="absolute right-3 top-2 cursor-pointer">
           <X className='text-red-600'/>
          </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => {if(e.target.value.length<=18){setTitle(e.target.value)}}}
                        className="shadow appearance-none border focus:border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700 focus:shadow-outline"
                        placeholder="Task Title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="shadow appearance-none border focus:border-2 focus:border-blue-700 rounded w-full h-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Task Description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="limitDate">
                        Limit Date
                    </label>
                    <input
                        type="date"
                        id="limitDate"
                        value={limitDate}
                        onChange={(e) => setLimitDate(e.target.value)}
                        className="shadow appearance-none border focus:border-2 focus:border-blue-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={()=>changestate(1)}
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer mx-auto rounded-sm transition duration-150"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
     </WindowDialogue>
    );
};

export default CreateTask;