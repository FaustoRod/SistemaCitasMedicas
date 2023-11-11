import { DataManagement } from "./dataManagement.ts";
import { User } from "../interfaces/user.ts";
import data from "../../data/defaultUsers.json";
export class UserManagement extends DataManagement {
  createUser = (user: User) => {
    if (!this.validateUserName(user.userName)) return false;
    user.id = this.getUserNewId();
    const users = this.getAllUsers();

    users.push(user);
    this.saveData(JSON.stringify(users), import.meta.env.VITE_USER_STORAGE_KEY);
    return true;
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
    sessionStorage.setItem(import.meta.env.VITE_CURRENT_USER_STORAGE_KEY, "");
  };

  getCurrentUser = () => {
    return this.getData<User>(import.meta.env.VITE_CURRENT_USER_STORAGE_KEY);
  };

  loadDefaultUsers = () => {
    this.saveData("", import.meta.env.VITE_USER_STORAGE_KEY);
    this.saveData("", import.meta.env.VITE_CURRENT_USER_STORAGE_KEY);
    const users = data as unknown as User[];
    users.forEach((user) => {
      this.createUser(user);
    });
    // this.logInUser("admin", "admin");
  };

  getAllUsers = () =>
    this.getDataArray<User>(import.meta.env.VITE_USER_STORAGE_KEY);

  private getUserNewId = () => {
    return this.getAllUsers().length + 1;
  };

  private validateUserName = (userName: string) => {
    const user = this.getAllUsers().find((user) => user.userName === userName);
    return user == undefined;
  };
}
