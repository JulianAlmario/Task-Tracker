import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/taskService";
import { useUserStore } from "../../states/userStates";
import { getTaskListProps } from "../../core/interfaces/Taskprops";


export const useGetTasks = () => {
    const { userId } = useUserStore();
    return useQuery<getTaskListProps[]>({
        queryKey: ["tasks", userId],
        queryFn: () => getTasks(userId),
    });
};