import { BaseComponent } from "../baseComponent.ts";
import TomSelect from "tom-select";
import { UserManagement } from "../../ts/utils/userManagement.ts";
import { UserType } from "../../ts/enums/userTypes.ts";

export class AppointmentModal extends BaseComponent {
  selectDropdown: TomSelect | undefined;

  constructor() {
    const template = `
<div
  class="modal fade"
  id="createModal"
  tabindex="-1"
  aria-labelledby="createModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createModalLabel">Nueva Cita</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form id="appointment-form">
          <input type="text" class="form-control" id="appointment-id" hidden />
          <div class="mb-3">
            <label for="appointment-name" class="col-form-label">Paciente:</label>
            <select id="appointment-name" data-placeholder="Seleccione Paciente"  autocomplete="off">
            </select>

          </div>
          <div class="mb-3">
            <label for="appointment-date" class="col-form-label">Fecha:</label>
            <input type="date" class="form-control" id="appointment-date" />
          </div>
          <div class="mb-3">
            <label for="appointment-date" class="col-form-label">Hora:</label>
            <input type="time" class="form-control" id="appointment-time" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button
          id="saveAppointmentButton"
          type="button"
          class="btn btn-primary"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</div>
            `;

    super(template, "#create-appointment-section");
    this.render();
    this.addListeners();
    this.setUpDropdown();
    this.setDropdownValues();
  }

  addListeners = () => {
    const createModal = document.getElementById("createModal");
    if (createModal) {
      createModal.addEventListener("shown.bs.modal", () => {
        this.setDropdownValues();
      });

      createModal.addEventListener("hidden.bs.modal", () => {
        const formComponent =
          document.querySelector<HTMLFormElement>("#appointment-form");
        formComponent?.reset();
      });
    }
  };

  setDropdownValues = () => {
    const patientsDropdown =
      document.querySelector<HTMLSelectElement>("#appointment-name");
    if (patientsDropdown) {
      const users = new UserManagement()
        .getAllUsers()
        .filter((user) => user.type === UserType.Patient);

      const options = users.map((user) => ({
        value: user.id,
        text: user.name,
      }));

      this.selectDropdown?.addOptions(options);
    }
  };
  setUpDropdown = () => {
    this.selectDropdown = new TomSelect("#appointment-name", {
      create: false,
      sortField: {
        field: "text",
        direction: "asc",
      },
    });
  };
}
