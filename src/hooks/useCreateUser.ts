import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserType } from "../core/interfaces/UserProps";
import { addUser } from "../services/userService";
import { useNavigate } from "react-router-dom";



export const useCreateUser = (setError:(text:string)=>void) => {
  const queryClient = useQueryClient();
  const navigate=useNavigate();
  return useMutation({
    mutationFn: (user: UserType) => addUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
      navigate('/login');
    },
    onError: (error) => {
       console.error("Error in creating the user", error);
      setError("It was not possible to create the user, please try again later");
    }
  });
};
