import { X } from "lucide-react";
import { useWindowStore } from "../../states/WindowStates";


export function TaskDetail(){
    const {DetailWindow,changestate,DetailTitle,DetailDescription,DetailLimitDate}=useWindowStore();
   return(
    <div
    className={`fixed inset-0 flex flex-col justify-center items-center z-10 mx-auto ${DetailWindow ? "visible bg-black/20" : "invisible"
      }`}
  >
       <div className="bg-white rounded-xl shadow p-6 w-4/6 px-10 transition-all relative overflow-y-auto max-h-[80vh]">
        <button onClick={()=>changestate(2)} className="absolute right-3 top-2 p-1 cursor-pointer hover:bg-red-100 rounded-4xl transition duration-150">
           <X className='text-red-600'/>
          </button>
    <div className="flex flex-col gap-4 mt-5">
    <h2 className="text-5xl text-blue-600 text-center">{DetailTitle}</h2>
    <span className="text-center mx-auto">{`Limit date: ${DetailLimitDate ? new Date(DetailLimitDate).toLocaleDateString("es-CO") : "No date available"}`}</span>
    <section className="bg-blue-200 border border-blue-400 p-2">
    <p>{DetailDescription===""||DetailDescription===undefined?"There is not description":DetailDescription}</p>
    </section>
    </div>
    </div>
    </div>
   );
}