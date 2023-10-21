import { DataManagement } from "./dataManagement.ts";
import { User } from "../interfaces/user.ts";
import data from "../../data/defaultUsers.json";
export class UserManagement extends DataManagement {
  createUser = (user: User) => {
    user.id = this.getUserNewId();
    const users = this.getAllUsers();

    users.push(user);
    this.saveData(JSON.stringify(users), import.meta.env.VITE_USER_STORAGE_KEY);
  };

  logInUser = (userName: string, password: string) => {
    const users = this.getAllUsers();

    const currentUser = users.find(
      (user) => user.userName === userName && user.password === password,
    );

    if (currentUser) {
      this.saveData(
        JSON.stringify(currentUser),
        import.meta.env.VITE_CURRENT_USER_STORAGE_KEY,
      );
      return true;
    }

    return false;
  };

  logOutUser = () => {
    this.saveData("", import.meta.env.VITE_CURRENT_USER_STORAGE_KEY);
  };

  getCurrentUser = () => {
    return this.getData(import.meta.env.VITE_CURRENT_USER_STORAGE_KEY);
  };

  loadDefaultUsers = () => {
    this.saveData("", import.meta.env.VITE_USER_STORAGE_KEY);
    this.saveData("", import.meta.env.VITE_CURRENT_USER_STORAGE_KEY);
    const users = data as unknown as User[];
    users.forEach((user) => {
      this.createUser(user);
    });
  };

  private getAllUsers = () =>
    this.getDataArray<User>(import.meta.env.VITE_USER_STORAGE_KEY);

  private getUserNewId = () => {
    return this.getAllUsers().length + 1;
  };
}
