import { getTaskListProps } from "../core/interfaces/Taskprops";
import { Task } from "./Task";

type TypeTaskBoardProps={
    title:string;
    TaskArray:getTaskListProps[];

}

export function TypeTaskBoard({title,TaskArray}:TypeTaskBoardProps){
    
    let color="";
    switch(title){
        case "Pending":
            color="bg-red-100";
        break;
        case "In Progress":
            color="bg-yellow-100";
        break;
        case "Completed":
            color="bg-green-100";
        break;
    }


    return(
        <section className={`${color} p-4 min-[901px]:w-1/3 mt-5 flex flex-col gap-2 transition-all relative overflow-y-auto max-h-[80vh]`}>
            <h2 className="text-center text-gray-800 text-3xl mb-4 rounded-md">{title}</h2>
            { TaskArray.map((task,index)=>(
                <Task key={index} {...task}/>
            ) )}
        </section>
    );

}