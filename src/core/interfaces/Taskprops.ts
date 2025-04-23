
export interface TaskProps{
    title:string;
    userId:string;
    description?:string;
    limitDate:Date;
    type:"Pending"|"In Progress"|"Completed";
}

export interface getTaskListProps{
    _id:string;
    title:string;
    userId:string;
    description?:string;
    limitDate:Date;
    type:"Pending"|"In Progress"|"Completed";
}