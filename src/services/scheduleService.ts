import { AxiosResponse } from "axios";
import { SheduleProps } from "../core/interfaces/scheduleProps";
import api from "../api/axios";

export const getSchedules = async (userId: string | undefined): Promise<SheduleProps[]> => {
    const response: AxiosResponse<SheduleProps[]> = await api.get(`/schedule/get/${userId}`);
    return response.data;
}

export const createSchedule = async (schedule: SheduleProps): Promise<SheduleProps> => {
    const response: AxiosResponse<SheduleProps> = await api.post("/schedule/create", schedule);
    return response.data;
}
