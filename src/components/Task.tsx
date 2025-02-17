import { TaskProps } from "../core/interfaces/Taskprops";
import { ButtonMenu } from "./ButtonMenu";
import { TaskIcon } from "./TaskIcon";


export function Task(Task: TaskProps) {
    return (
      <div className="flex gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
       <TaskIcon type={Task.typeTask.type}/>
        <section className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{Task.title}</h3>
          <span className="text-sm text-gray-600">{`${Task.limitDate.toLocaleDateString(
            "es-CO"
          )}`}</span>
        </section>
        <section className="flex gap-2 items-center">
          <ButtonMenu type={Task.typeTask.type} />
        </section>
      </div>
    );
  }

