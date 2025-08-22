import { create } from "zustand";
import { userLogin } from "../core/interfaces/UserProps";
import { TaskProps } from "../core/interfaces/Taskprops";

type userStoreProps={
    userId:string;
    userName:string;
    userEmail:string;
    userTasks:TaskProps[];
    changeUser:(user:userLogin)=>void;
    putTasks:(task:TaskProps[])=>void;
}
export const useUserStore=create<userStoreProps>((set)=>({
 userId: "",
 userName: "",
 userEmail: "",
 userTasks: [],
 changeUser: (user) =>
    set(() => ({ userId: user._id, userName: user.username, userEmail: user.email})),
 putTasks:(task:TaskProps[])=>
     set(()=>({userTasks:task})),
}));