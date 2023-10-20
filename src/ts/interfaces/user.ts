import { UserType } from "../enums/userTypes.ts";

export interface User {
  id: number;
  name: string;
  lastName: string;
  userName: string;
  password: string;
  type: UserType;
}
