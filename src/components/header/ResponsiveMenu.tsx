import { Logo } from "../Logo";
import { SideBarItems } from "./sideBarItems";

type ResponsiveMenuProps={
    visible:boolean;
    close:()=>void;
}
export function ResponsiveMenu({visible,close}:ResponsiveMenuProps){
    if(visible){
      return(
        <div 
           className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-40 transform transition-transform duration-300 ease-in-out 
        ${visible ? "translate-x-0" : "translate-x-full"}`}
          onClick={close}
        >
          <section className="flex items-center mb-4 gap-2">
            <div className="w-1/6"><Logo/></div>
            <span>Task Tracker</span>
          </section>
         <SideBarItems/>
         </div>
    );
    }

}