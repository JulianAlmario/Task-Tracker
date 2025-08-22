import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSchedule } from "../../services/scheduleService";
import { scheduleSendProps } from "../../core/interfaces/scheduleProps";

export const useCreateSchedule = (setError:(text:string)=>void) => {
    const queryClient = useQueryClient();

  return useMutation({
        mutationKey: ["createSchedule"],
        mutationFn: (taskSchedule:scheduleSendProps)=>createSchedule(taskSchedule),
       onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
      setError("");
    },
    onError: (error) => {
       console.error("Error to schedule this task", error);
      setError("It was not possible to schedule this task, please try again later");
    }
    });
}
