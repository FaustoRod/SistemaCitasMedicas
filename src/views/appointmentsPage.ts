import { BaseComponent } from "../components/baseComponent.ts";
import { User } from "../ts/interfaces/user.ts";
import { UserManagement } from "../ts/utils/userManagement.ts";
import { AppointmentTable } from "../components/appointment/appointmentTable.ts";

export default class AppointmentsPage extends BaseComponent {
  currentUser: User | null;
  constructor() {
    const template = `
   <div class="container-fluid mt-5 min-vh-100">
    <div class="row"><h1 class="mt-3">Citas</h1></div>
    <div class="row">
    <div class="col-12">
    <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#createModal"
  >
    Nueva Cita
  </button></div>
</div>

<!-- TABLE -->
<div id="table-section" class="row mt-3">
  
</div>

<!-- CREATE MODAL -->
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
        <form>
          <input type="text" class="form-control" id="appointment-id" hidden />
          <div class="mb-3">
            <label for="appointment-name" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="appointment-name" />
          </div>
          <div class="mb-3">
            <label for="appointment-date" class="col-form-label">Fecha:</label>
            <input type="date" class="form-control" id="appointment-date" />
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
</div>

    `;
    super(template, "#main");
    this.render();
    this.currentUser = new UserManagement().getCurrentUser();
    new AppointmentTable(true).render();
  }
}
