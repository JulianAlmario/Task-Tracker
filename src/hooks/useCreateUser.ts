import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserType } from "../core/interfaces/UserProps";
import { addUser } from "../services/userService";



export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: UserType) => addUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
    onError: (error) => {
      console.error("Error in creating the user", error);
    }
  });
};
