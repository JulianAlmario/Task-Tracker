import CreateTask from "../components/CreateTask";
import { useWindowStore } from "../states/WindowStates";


export function TaskTrackerPage(){
    const {changestate} = useWindowStore();
    return(
        <>
        <h1 className="text-6xl text-blue-600 text-center">Task Tracker</h1>
        <button  
        onClick={changestate} 
        className='mt-5 bg-blue-700 py-2 px-4 text-white rounded-sm
        cursor-pointer hover:bg-blue-800 transition duration-150'>Add Task</button>
        <CreateTask/>
        </>
    );
}