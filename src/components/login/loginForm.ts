import Swal from "sweetalert2";

export class LoginForm {
  private userNameInputId = "userNameInput";
  private passwordInputId = "passwordInput";
  private userTypeId = "userType";

  userNameInput: HTMLInputElement | null | undefined;
  passwordInput: HTMLInputElement | null | undefined;
  userTypeRadio: HTMLInputElement | null | undefined;
  errorMessage: HTMLInputElement | null | undefined;

  openForm = () => {
    Swal.fire({
      title: "Ingresar",
      html: this.getForm(),
      focusConfirm: false,
      confirmButtonText: "Ingresar",
      preConfirm: () => {
        this.validateForm();
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

    this.userTypeRadio = document.querySelector<HTMLInputElement>(
      `#${this.userTypeId}`,
    );

    this.errorMessage =
      document.querySelector<HTMLInputElement>("#login-form-error");
  };

  private getForm = () => {
    return `
    <span id="login-form-error" class="text-danger"></span>
    <input id="userNameInput" class="swal2-input"  placeholder="Usuario">
    <input id="passwordInput" class="swal2-input" type="password" placeholder="Contraseña">
    <div class="swal2-radio">
        <label>
            <input type="radio" name="swal2-radio" value="1"><span class="swal2-label">Paciente</span>
        </label>
        <label>
            <input type="radio" name="swal2-radio" value="2"><span class="swal2-label">Doctor</span>
        </label>
    </div>
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

    const radio = document.querySelector<HTMLInputElement>(
      'input[type="radio"]:checked',
    );

    if (!radio) {
      this.errorMessage!.innerText = "Seleccione tipo de usuario";
      return false;
    }

    return true;
  };
}
