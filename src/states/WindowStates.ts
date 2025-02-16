import { create } from "zustand";

type windowStoreProps={
    windowCreateTask:boolean;
    changestate:()=>void;
}
export const useWindowStore=create<windowStoreProps>((set)=>({
  windowCreateTask:false,
  changestate:()=>
    set((state)=>{return {windowCreateTask:!state.windowCreateTask};})
  
}));