export type userLogin = {
  _id?: string;
  username: string;
  email: string;
};

export type UserType = userLogin & {
  password: string;
};

export type userProps = {
  username: string;
  password: string;
};

