import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Value } from '../../pages/Schedule';


type CalendarProps = {  
  onChange: (date: Value) => void;
  value: Value;
}
const CalendarComponent = ({onChange,value}:CalendarProps) => {

  const handleDateClick = (arg: { date: Date }) => {
    onChange(arg.date);
  }

  return (
    <div className="flex justify-center mt-8 w-full">
      <div className="p-4 bg-white rounded-lg shadow-md">
      
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-2xl shadow-lg p-4 bg-white dark:bg-gray-900 dark:text-gray-600"
     tileClassName={({ date, view }) => {
  // fines de semana
  if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
    return "text-red-500";
  }

  // HOY: cambiar amarillo por azul (forzado con !)
  if (view === "month" && date.toDateString() === new Date().toDateString()) {
    // opción 1: fondo azul suave
    return "!bg-blue-100 !text-blue-700 hover:!bg-blue-200 focus:!bg-blue-200";
    // opción 2 (círculo sólido):
    // return "flex items-center justify-center w-10 h-10 !bg-blue-500 !text-white font-bold rounded-full";
  }

  return "";
}}

      />
      <style>
  {`
    /* barra superior */
    .react-calendar__navigation {
      background-color: rgb(59 130 246); /* bg-blue-700 */
      border-radius: 0.75rem; /* rounded-xl */
      padding: 0.5rem; /* p-2 */
      color: white; /* text-white */
      font-weight: 600; /* font-semibold */
    }

    /* botones de navegación */
    .react-calendar__navigation button {
      color: white; /* text-white */
      min-width: 44px;
      background: transparent;
    }

    .react-calendar__navigation button:hover {
      background-color: rgb(37 99 235); /* hover:bg-blue-600 */
      border-radius: 0.5rem;
    }
  `}
</style>
      </div>
    </div>
  );
};

export default CalendarComponent;