import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTask";
import { TypeTaskBoard } from "../components/TypeTaskBoard";
import { getTaskListProps } from "../core/interfaces/Taskprops";
import { useGetTasks } from "../hooks/taskHooks/useGetTasks";
import { useSplit } from "../hooks/useSplit";
import { Header } from "../components/header/header";
import { useUserStore } from "../states/userStates";

type TaskListProps={ type: string; tasklist: getTaskListProps[] }[];

export function TaskTrackerPage() {
  const { data: tasks=[] } = useGetTasks();
  const {putTasks}=useUserStore();
  
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
    <Header>
      <main className="font-display p-4">
      <h1 className="text-6xl text-blue-600 text-center font-display">Task Tracker</h1>
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
      </Header>
    </>
  );
}
