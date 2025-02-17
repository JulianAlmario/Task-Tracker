import { TaskProps } from "../core/interfaces/Taskprops";

export function useSplit(Tasks:TaskProps[]){
  let PendingTasks=[];
  let InProgressTasks=[];
  let CompletedTasks=[];
  for(let i:number=0;i<Tasks.length;i++){
    switch(Tasks[i].typeTask.type){
        case "Pending":
            PendingTasks.push(Tasks[i]);
        break;
        case "In Progress":
            InProgressTasks.push(Tasks[i]);
            break;
        case "Completed":
         CompletedTasks.push(Tasks[i]);    
        break;
    }

  }

  return {PendingTasks,InProgressTasks,CompletedTasks};
}