import CreateTask from "../components/CreateTask";
import { TypeTaskBoard } from "../components/TypeTaskBoard";
import { TaskProps } from "../core/interfaces/Taskprops";
import { useSplit } from "../hooks/useSplit";
import { useWindowStore } from "../states/WindowStates";

export function TaskTrackerPage() {
  const { changestate } = useWindowStore();
  const task: TaskProps[] = [
    {
      id: 1,
      title: "Do homework",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque, dis penatibus pharetra rhoncus a aliquet senectus, venenatis id blandit commodo sodales interdum felis. Est in mi aenean congue ullamcorper cubilia, natoque sociosqu sodales sagittis lacinia condimentum curabitur, montes dis pellentesque a himenaeos. Maecenas aliquet ullamcorper nisl dictum at malesuada fusce scelerisque ultricies, duis facilisi tristique non massa porttitor mollis enim accumsan, nascetur integer curae pulvinar inceptos commodo facilisis lacinia.",
      limitDate: new Date(2025, 9, 16),
      typeTask: { type: "Completed" },
    },
    {
      id: 2,
      title: "Do many many homework",
      limitDate: new Date(2025, 10, 20),
      typeTask: { type: "In Progress" },
    },
    {
      id: 3,
      title: "Task3",
      limitDate: new Date(2025, 11, 25),
      typeTask: { type: "Pending" },
    },
    {
      id: 4,
      title: "Task4",
      limitDate: new Date(2025, 12, 30),
      typeTask: { type: "Completed" },
    },
    {
      id: 5,
      title: "Do many homework12",
      limitDate: new Date(2026, 1, 15),
      typeTask: { type: "In Progress" },
    },
    {
      id: 6,
      title: "Task6",
      limitDate: new Date(2026, 2, 20),
      typeTask: { type: "Pending" },
    },
  ];

  const { PendingTasks, InProgressTasks, CompletedTasks } = useSplit(task);

  const TaskList: { type: string; tasklist: TaskProps[] }[] = [
    { type: "Pending", tasklist: PendingTasks },
    { type: "In Progress", tasklist: InProgressTasks },
    { type: "Completed", tasklist: CompletedTasks },
  ];

  return (
    <>
      <main className="font-display p-4">
      <h1 className="text-6xl text-blue-600 text-center font-display">Task Tracker</h1>
      <button
        onClick={() => changestate(1)}
        className="mt-5 bg-blue-700 py-2 px-4 text-white rounded-sm
        cursor-pointer hover:bg-blue-800 transition duration-150"
      >
        Add Task
      </button>
      <CreateTask />
      <section className="flex max-[900px]:flex-col max-md:gap-2">
        {TaskList.map((tasks) => (
          <TypeTaskBoard
            key={tasks.type}
            title={tasks.type}
            TaskArray={tasks.tasklist}
          />
        ))}
      </section>
      </main>
    </>
  );
}
