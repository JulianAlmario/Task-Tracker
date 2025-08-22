import { useQuery } from "@tanstack/react-query";
import { getSchedules } from "../../services/scheduleService";
import { scheduleProps } from "../../core/interfaces/scheduleProps";

export const useGetSchedules = (userId: string | undefined) => {
    return useQuery<scheduleProps[]>({
        queryKey: ["schedules", userId],
        queryFn: () => getSchedules(userId),
        enabled: !!userId
    });
}
