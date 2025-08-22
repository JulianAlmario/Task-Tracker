import { useState } from 'react';
import Calendar from '../components/Schedule/Calendar';
import TasksTable from '../components/Schedule/TasksTable';
import {Header} from '../components/header/header';

  type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = () => {

  const [date, setDate] = useState<Value>(new Date());

  return (
    <>
      <Header >
      <Calendar onChange={setDate} value={date}/>
      <TasksTable Date={date} />
      </Header>
    </>
  );
};

export default Schedule;