
import { useWindowStore } from "../states/WindowStates";


  
  export function WindowDialogue({ children }: { children: React.ReactNode }) {

  const { windowCreateTask} = useWindowStore();
  

    return (
      <div
        className={`fixed inset-0 flex flex-col justify-center items-center z-10  ${windowCreateTask ? "visible bg-black/20" : "invisible"
          }`}
      >
          {children}
        </div>
    );
  }