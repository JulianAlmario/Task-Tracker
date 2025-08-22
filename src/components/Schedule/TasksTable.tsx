import { Value } from "../../pages/Schedule";

const TasksTable = ({ Date }: { Date: Value }) => {
  let displayDate = "No date selected";
  if (Date) {
    if (typeof Date === "object" && Date !== null && "toISOString" in Date && typeof (Date as Date).toISOString === "function") {
      displayDate = (Date as Date).toISOString().split("T")[0];
    } else if (Array.isArray(Date)) {
      displayDate = "Multiple dates selected";
    } else {
      displayDate = String(Date);
    }
  }
  return (
    <div className="flex justify-center mt-8">
      <h1>{`${displayDate}`}</h1>
      <table className="table-auto w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-800 text-white border-white border-2">Task Schedule</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Task Limited to Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Task 1</td>
            <td className="border px-4 py-2">Task A</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Task 2</td>
            <td className="border px-4 py-2">Task B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;