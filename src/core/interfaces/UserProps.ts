import { TaskProps } from "./Taskprops";

export type userLogin = {
  _id?: string;
  username: string;
  email: string;
  tasks?: TaskProps[];
};

export type UserType = userLogin & {
  password: string;
};

export type userProps = {
  username: string;
  password: string;
};

