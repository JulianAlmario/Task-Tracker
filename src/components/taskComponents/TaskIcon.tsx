import { Loader, Check } from "lucide-react";

interface TaskIconProps {
  TypeTask: "Pending" | "In Progress" | "Completed";
}

export function TaskIcon({ TypeTask }: TaskIconProps) {
  if (TypeTask === "Pending") {
    return (
        <div className="bg-red-500 rounded-4xl font-bold text-white py-2 px-4 my-auto">
          <span>?</span>
        </div>
    );
  } else if (TypeTask === "In Progress") {
    return (
        <div className="bg-yellow-500 rounded-4xl font-bold text-white py-2 px-2 mx-auto my-auto">
          <Loader />
        </div>
   
    );
  } else if (TypeTask === "Completed") {
    return (
        <div className="bg-green-500 rounded-4xl font-bold text-white py-2 px-2 mx-auto my-auto">
          <Check />
        </div>
    );
  }
}