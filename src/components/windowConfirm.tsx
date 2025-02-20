import {WindowProps} from "../core/interfaces/WindowProps";

export function WindowConfirm({open,close}:WindowProps){
    return(
        <div
        className={`fixed inset-0 flex flex-col justify-center items-center z-10 mx-auto ${open ? "visible bg-black/20" : "invisible"
          }`}
      >
       <div className="bg-white rounded-xl shadow p-4 w-10/12 xl:w-3/12 px-6 transition-all relative flex flex-col justify-center items-center md:text-2xl">
       <p>If you mark a task as <strong  className="text-green-400">completed</strong>, you will not be unmark that task.Are you sure you want to do it ?</p>
          <section className="flex gap-2 items-center justify-center mt-4">
          <button onClick={close} 
          className="p-2 px-4 bg-gray-900 text-white rounded-sm hover:bg-gray-700 transition cursor-pointer duration-150">
            Cancel</button>
          <button onClick={close}
          className="p-2 px-4 bg-blue-600 text-white  rounded-sm hover:bg-blue-700 cursor-pointer transition duration-150">
            Confirm</button>
          </section>
       </div>
        </div>
    );
}