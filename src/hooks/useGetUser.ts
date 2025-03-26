import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/userService";

export const useGetUser = () => {
    return useQuery({
        queryKey: ["Users"],
        queryFn: getUser,
        // select:(data)=>data.filter((item:ActivityType)=>item["BusinessName"]===NombreNegocio)
    });
    }