import { getTaskListProps } from "../../core/interfaces/Taskprops"; 
import { ButtonMenu } from "./ButtonMenu";
import { TaskIcon } from "./TaskIcon";


export function Task(Task: getTaskListProps) {
    return (
      <div className="flex gap-4 bg-gray-100 p-4 rounded-lg shadow-md justify-start items-center">
       <TaskIcon TypeTask={Task.type}/>
        <section className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold text-gray-800 truncate w-full">{Task.title}</h3>
          <span className="text-sm text-gray-600">{`${new Date(Task.limitDate).toLocaleDateString("es-CO")}`}</span>
        </section>
        <section className="flex gap-2 items-center">
          <ButtonMenu {...Task} />
        </section>
      </div>
    );
  }

