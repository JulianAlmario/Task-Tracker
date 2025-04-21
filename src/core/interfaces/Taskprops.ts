
export interface TaskProps{
    _id?:number;
    title:string;
    userId:string;
    description?:string;
    limitDate:Date;
    type:"Pending"|"In Progress"|"Completed";
}