import { axiosApi } from "../api/axios";
import { TaskProps, updateTypeTaskProps } from "../core/interfaces/Taskprops";


export const addTask = async (task: TaskProps) => {
  try {
    const response = await axiosApi.post(`/tasks/addTask`, task, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error:any) {
    if (error.response && error.response.data||error.request) {
      throw new Error(error.response.data.message || "Failed to create task");
    }
    throw new Error( error.message);
  }
  };



export const getTasks = async (userId:string) => {
   
  try {
    const response = await axiosApi.get(`/tasks/getTasks?userId=${userId}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    throw new Error("Error in retrieving the tasks. Error: " + error.message);
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosApi.delete(`/tasks/deleteTask?taskId=${taskId}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    throw new Error("Error in deleting the task. Error: " + error.message);
  }

}

export const updateTypeTask = async (updateType:updateTypeTaskProps) => {
  try {
    const response = await axiosApi.patch(`/tasks/updateTypeTask`, updateType, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    throw new Error("Error in updating the task. Error: " + error.message);
  }
}
