import { BaseComponent } from "../baseComponent.ts";
import { Modal } from "bootstrap";
import { UserManagement } from "../../ts/utils/userManagement.ts";
import { UserType } from "../../ts/enums/userTypes.ts";
import Swal from "sweetalert2";

export class UserCreateModal extends BaseComponent {
  modal: Modal | null = null;
  constructor() {
    const template = `
<div
  class="modal fade"
  id="create-user-modal"
  tabindex="-1"
  aria-labelledby="create-user-modal-label"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="create-user-modal-label"">Nuevo Paciente</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form id="create-user-form">
          <input type="text" class="form-control" id="user-id" hidden />
          <div class="mb-3">
            <label for="patient-name" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="patient-name" required min="10" max="50"/>
          </div>
          <div class="mb-3">
            <label for="patient-username" class="col-form-label">Username:</label>
            <input type="text" class="form-control" id="patient-username" required min="5" max="15"/>
          </div>
          <div class="mb-3">
            <label for="patient-password" class="col-form-label">Contraseña:</label>
            <input type="password" class="form-control" id="patient-password" required min="5" max="15"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button
          id="saveUserButton"
          type="submit"
          class="btn btn-primary"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</div>
            `;

    super(template, "#create-user-section");
    this.render();
    this.setModal();
    this.addListeners();
  }

  addListeners = () => {
    const saveButton =
      document.querySelector<HTMLInputElement>("#saveUserButton");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        const form =
          document.querySelector<HTMLFormElement>("#create-user-form");
        if (form?.reportValidity()) {
          if (this.createUser()) {
            this.modal?.hide();
            Swal.fire({
              text: "Usuario Creado con Exito",
              icon: "success",
            });
          } else {
            Swal.fire({
              text: "Nombre de usuario ya existe",
              icon: "error",
            });
          }
        }
      });
    }

    const createModal = document.getElementById("create-user-modal");
    createModal?.addEventListener("hidden.bs.modal", () => {
      const formComponent =
        document.querySelector<HTMLFormElement>("#create-user-form");
      formComponent?.reset();
    });
  };

  createUser = () => {
    const name =
      document.querySelector<HTMLInputElement>("#patient-name")?.value ?? "";
    const userName =
      document.querySelector<HTMLInputElement>("#patient-username")?.value ??
      "";
    const password =
      document.querySelector<HTMLInputElement>("#patient-password")?.value ??
      "";

    return new UserManagement().createUser({
      id: 0,
      name,
      userName,
      password,
      type: UserType.Patient,
    });
  };

  private setModal = () => {
    const modalElement =
      document.querySelector<HTMLElement>("#create-user-modal");
    this.modal = new Modal(modalElement!);
  };
}
