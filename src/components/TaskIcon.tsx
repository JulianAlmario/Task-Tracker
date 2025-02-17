import { Loader, Check } from "lucide-react";
import { TypeTask } from "../core/interfaces/Taskprops";


export function TaskIcon(TypeTask:TypeTask) {
  if (TypeTask.type === "Pending") {
    return (
        <div className="bg-red-500 rounded-4xl font-bold text-white py-2 px-4 my-auto">
          <span>?</span>
        </div>
    );
  } else if (TypeTask.type  === "In Progress") {
    return (
        <div className="bg-yellow-500 rounded-4xl font-bold text-white py-2 px-2 mx-auto my-auto">
          <Loader />
        </div>
   
    );
  } else if (TypeTask.type  === "Completed") {
    return (
        <div className="bg-green-500 rounded-4xl font-bold text-white py-2 px-2 mx-auto my-auto">
          <Check />
        </div>
    );
  }
}