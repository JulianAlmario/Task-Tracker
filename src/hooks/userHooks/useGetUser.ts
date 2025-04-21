import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userService";
import { userProps } from "../../core/interfaces/UserProps";

export const useGetUser = (user:userProps,enable:boolean) => {
    return useQuery({
        queryKey: ["users",user],
        queryFn: () => getUser(user),
    enabled: enable,
    });
};