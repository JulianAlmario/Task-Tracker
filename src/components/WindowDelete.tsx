import {WindowProps} from "../core/interfaces/WindowProps";
export function WindowDelete({open,close}:WindowProps){
    return(
        <div
        className={`fixed inset-0 flex flex-col justify-center items-center z-10 mx-auto ${open ? "visible bg-black/20" : "invisible"
          }`}
      >
       <div className="bg-white rounded-xl shadow p-4 xl:w-6/12 px-10 transition-all relative flex flex-col justify-center items-center md:text-xl">
       <p>Are you sure you want to delete this task?</p>
          <section className="flex gap-2 items-center justify-center mt-4">
          <button onClick={close} 
          className="p-2 px-4 bg-gray-900 text-white rounded-sm hover:bg-gray-700 transition cursor-pointer duration-150">
            No</button>
          <button onClick={close}
          className="p-2 px-4 bg-red-600 text-white  rounded-sm hover:bg-red-700 cursor-pointer transition duration-150">
            Yes</button>
          </section>
       </div>
        </div>
    );
}