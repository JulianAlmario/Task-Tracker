export interface TypeTask{
  type:"Pending"|"In Progress"|"Completed";    
}

export interface TaskProps{
    id:number;
    title:string;
    description?:string;
    limitDate:Date;
    typeTask:TypeTask;
}