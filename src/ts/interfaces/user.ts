import { UserType } from "../enums/userTypes.ts";

export interface User {
  id: number;
  name: string;
  userName: string;
  password: string;
  type: UserType;
  specialty?: string;
}
