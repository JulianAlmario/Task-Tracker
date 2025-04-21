import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/taskService";
import { useUserStore } from "../../states/userStates";
import { TaskProps } from "../../core/interfaces/Taskprops";


export const useGetTasks = () => {
    const { userId } = useUserStore();
    return useQuery<TaskProps[]>({
        queryKey: ["tasks", userId],
        queryFn: () => getTasks(userId),
    });
};