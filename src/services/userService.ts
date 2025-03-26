
import { axiosApi } from "../api/axios";
import { UserType } from "../core/interfaces/UserProps";

export const addUser = async (user: UserType) => {

  try {
    const response = await axiosApi.post("/users", user, {
      headers: { "Content-Type": "application/json" },
    });
  
    return response.data;
  } catch (error:any) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error("Error request:", error.request);
    } else {
      // Algo pasó al configurar la solicitud que desencadenó un error
      console.error("Error message:", error.message);
    }
    throw new Error("Error in creating the user. Error: " + error.message);
  }
  };

export const getUser = async ():Promise<UserType> => {
  const response= await axiosApi.get(`/users`);
  return response.data;
};

