
import { axiosApi } from "../api/axios";
import { UserType } from "../core/interfaces/UserProps";
import { userProps } from "../core/interfaces/UserProps";

export const addUser = async (user: UserType) => {
  try {
    const response = await axiosApi.post(`/users/register`, user, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.data||error.request) {
      throw new Error(error.response.data.message || "Failed to create user");
    }
    throw new Error( error.message);
  }
  };



export const getUser = async (user:userProps) => {
  try {
    const response = await axiosApi.post(`/users/login`, user , {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    throw new Error("Error in retrieving the user. Error: " + error.message);
  }
};

