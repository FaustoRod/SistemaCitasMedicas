import Swal from "sweetalert2";
import { UserManagement } from "../../ts/utils/userManagement.ts";

export class LoginForm {
  private userNameInputId = "userNameInput";
  private passwordInputId = "passwordInput";

  userNameInput: HTMLInputElement | null | undefined;
  passwordInput: HTMLInputElement | null | undefined;
  errorMessage: HTMLInputElement | null | undefined;

  openForm = () => {
    Swal.fire({
      title: "Ingresar",
      html: this.getForm(),
      focusConfirm: false,
      confirmButtonText: "Ingresar",
      preConfirm: () => {
        this.validateForm() && this.logIn();
        console.log(new UserManagement().getCurrentUser());
        return false;
      },
      didOpen: () => {
        this.initializeInputs();
      },
    });
  };

  private initializeInputs = () => {
    this.userNameInput = document.querySelector<HTMLInputElement>(
      `#${this.userNameInputId}`,
    );
    this.passwordInput = document.querySelector<HTMLInputElement>(
      `#${this.passwordInputId}`,
    );

    this.errorMessage =
      document.querySelector<HTMLInputElement>("#login-form-error");
  };

  private getForm = () => {
    return `
    <span id="login-form-error" class="text-danger"></span>
    <input id="userNameInput" class="swal2-input"  placeholder="Usuario">
    <input id="passwordInput" class="swal2-input" type="password" placeholder="Contraseña">
      `;
  };

  private validateForm = () => {
    this.errorMessage!.innerText = "";

    if (this.userNameInput!.value.trim().length <= 0) {
      this.errorMessage!.innerText = "Ingrese Usuario";
      this.userNameInput?.focus();
      return false;
    }

    if (this.passwordInput!.value.trim().length <= 0) {
      this.errorMessage!.innerText = "Ingrese Contraseña";
      this.passwordInput?.focus();
      return false;
    }

    return true;
  };

  private logIn = () => {
    if (
      new UserManagement().logInUser(
        this.userNameInput!.value,
        this.passwordInput!.value,
      )
    )
      return true;
    this.errorMessage!.innerText = "Usuario o Contraseña Incorrecta";
    return false;
  };
}
