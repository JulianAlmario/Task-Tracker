import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../core/interfaces/Taskprops";
import { addTask } from "../../services/taskService";




export const useCreateTask = (setError:(text:string)=>void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: TaskProps) => addTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setError("");
    },
    onError: (error) => {
       console.error("Error in creating the task", error);
      setError("It was not possible to create the task, please try again later");
    }
  });
};
