import { TaskProps } from "../core/interfaces/Taskprops";

export function useSplit(Tasks:TaskProps[]){
  let PendingTasks=Tasks.filter((task)=>task.type==='Pending');
  let InProgressTasks=Tasks.filter((task)=>task.type==='In Progress');
  let CompletedTasks=Tasks.filter((task)=>task.type==='Completed');

  return {PendingTasks,InProgressTasks,CompletedTasks};
}