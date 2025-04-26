import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTask";
import { TypeTaskBoard } from "../components/TypeTaskBoard";
import { getTaskListProps } from "../core/interfaces/Taskprops";
import { useGetTasks } from "../hooks/taskHooks/useGetTasks";
import { useSplit } from "../hooks/useSplit";
import { useWindowStore } from "../states/WindowStates";

type TaskListProps={ type: string; tasklist: getTaskListProps[] }[];

export function TaskTrackerPage() {
  const { changestate } = useWindowStore();
  const { data: tasks=[] } = useGetTasks();
  
  const [TaskList, setTaskList] = useState<TaskListProps>([]);
  useEffect(() => {
   if(tasks!==undefined && tasks.length>0){
    const { PendingTasks, InProgressTasks, CompletedTasks } = useSplit(tasks);
    
    setTaskList([
      { type: "Pending", tasklist: PendingTasks },
      { type: "In Progress", tasklist: InProgressTasks },
      { type: "Completed", tasklist: CompletedTasks },
    ]);

   }
  }, [tasks]);

  

  return (
    <>
      <main className="font-display p-4">
      <h1 className="text-6xl text-blue-600 text-center font-display">Task Tracker</h1>
      <button
        onClick={() => changestate(1)}
        className="mt-5 bg-blue-700 py-2 px-4 text-white rounded-sm
        cursor-pointer hover:bg-blue-800 transition duration-150"
      >
        Add Task
      </button>
      <CreateTask />
      <section className="flex max-[900px]:flex-col max-md:gap-2">
        {TaskList.map((tasks) => (
          <TypeTaskBoard
            key={tasks.type}
            title={tasks.type}
            TaskArray={tasks.tasklist}
          />
        ))}
      </section>
      </main>
    </>
  );
}
