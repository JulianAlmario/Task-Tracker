import React, { useState } from 'react';
import { useWindowStore } from '../states/WindowStates';
import { WindowDialogue } from './windows/WindowDialogue';
import { Button,Heading, Dialog, DialogTrigger, Modal } from 'react-aria-components';
import { X} from "lucide-react"
import { useForm } from 'react-hook-form';
import { TaskProps } from '../core/interfaces/Taskprops';
import { useUserStore } from '../states/userStates';
import { useCreateTask } from '../hooks/taskHooks/useCreateTask';


const CreateTask: React.FC = () => {
    const { changestate } = useWindowStore();
    const {userId} = useUserStore();
    const [error, setError] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const {mutate:addTask}=useCreateTask(setError);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskProps>();

    const onSubmit = (values: TaskProps) => {
        if(errors.title || errors.description || errors.limitDate) {
            return;
        }

        
     const newTask: TaskProps = {
            title: values.title,
            userId: userId,
            description: values.description,
            limitDate: new Date(new Date(values.limitDate).setMinutes(new Date(values.limitDate).getMinutes() + new Date().getTimezoneOffset())),
            type: "Pending",
        };
         addTask(newTask, {
            onSuccess: () => {
                setError("");
                reset();
                setIsOpen(false); // Cierra el modal solo si fue exitoso
            },
            onError: () => {
                setError("It was not possible to create the task, please try again later");
                // No cerramos el modal si hay error
            }
        });
    };

    return (
            <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen} >
           
             <Button className="mt-5 bg-blue-700 py-2 px-4 text-white rounded-sm
        cursor-pointer hover:bg-blue-800 transition duration-150">
            Add Task</Button>
             <Modal isKeyboardDismissDisabled>
                <Dialog>
                    <WindowDialogue>
            <div className="max-md:w-10/12 bg-white rounded-xl shadow p-6 px-10 transition-all relative overflow-y-auto max-h-[80vh]">
                <Button slot="close" onClick={() => {changestate(1);setError("")}} className="absolute right-3 top-2 cursor-pointer p-1 hover:bg-red-100 rounded-4xl transition duration-150">
                    <X className="text-red-600" />
                </Button>
                <Heading slot="title" className="text-2xl font-bold mb-4 text-center text-blue-700">Create Task</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register("title", { required: "Title is required" })}
                            className={`shadow appearance-none border focus:border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700 focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
                            placeholder="Task Title"
                        />
                        {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register("description", { required: "Description is required" })}
                            className={`shadow appearance-none border focus:border-2 focus:border-blue-700 rounded w-full h-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`}
                            placeholder="Task Description"
                        />
                        {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="limitDate">
                            Limit Date
                        </label>
                        <input
                            type="date"
                            id="limitDate"
                            {...register("limitDate", { required: "Limit date is required" })}
                            className={`shadow appearance-none border focus:border-2 focus:border-blue-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.limitDate ? 'border-red-500' : ''}`}
                        />
                        {errors.limitDate && <p className="text-red-500 text-xs italic">{errors.limitDate.message}</p>}
                    </div>
                    <div className={error!==""?"my-5 text-red-500 bg-red-200 border border-red-500 rounded-md p-2":""}>
                        <span >{error}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-700 mt-5 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer mx-auto rounded-sm transition duration-150"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
            </WindowDialogue>
            </Dialog>
            </Modal>
        </DialogTrigger>
    );
};

export default CreateTask;