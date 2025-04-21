import { create } from "zustand";
import { userLogin } from "../core/interfaces/UserProps";

type userStoreProps={
    userId:string;
    userName:string;
    userEmail:string
    changeUser:(user:userLogin)=>void;
}
export const useUserStore=create<userStoreProps>((set)=>({
 userId: "68042c2025807c1920a843ea",
 userName: "",
 userEmail: "",
 changeUser: (user) =>
    set(() => ({ userId: user._id, userName: user.username, userEmail: user.email  })),
}));