import { create } from "zustand";

type windowStoreProps={
    windowCreateTask:boolean;
    DetailWindow:boolean;
    changestate:(num:number)=>void;
    DetailTitle:string;
    DetailDescription:string;
    DetailLimitDate:Date;
    AsignDetail:(title:string,description:string,limitDate:Date)=>void;
}
export const useWindowStore=create<windowStoreProps>((set)=>({
  windowCreateTask:false,
  DetailWindow:false,
  DetailTitle:"",
  DetailDescription:"",
  DetailLimitDate:new Date(),
  changestate:(num:number)=>
    set((state)=>{
      switch(num){
        case 1:
          return {windowCreateTask:!state.windowCreateTask};
        case 2:
          return {DetailWindow:!state.DetailWindow};
        default:
          return state;
      }
    }),
  AsignDetail:(title:string,description:string,limitDate:Date)=>
    set(()=>{return {DetailTitle:title,DetailDescription:description,DetailLimitDate:limitDate};}),
  
}));