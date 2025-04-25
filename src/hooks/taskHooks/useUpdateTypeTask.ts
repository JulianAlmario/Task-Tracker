import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTypeTask } from "../../services/taskService";
import { updateTypeTaskProps } from "../../core/interfaces/Taskprops";

export const useUpdateTypeTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updateType:updateTypeTaskProps) => updateTypeTask(updateType),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: (error) => {
            console.error('Error updating the task:', error);
        },
    });
};