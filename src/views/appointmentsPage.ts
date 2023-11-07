import { BaseComponent } from "../components/baseComponent.ts";
import { User } from "../ts/interfaces/user.ts";
import { UserManagement } from "../ts/utils/userManagement.ts";
import { AppointmentTable } from "../components/appointment/appointmentTable.ts";
import { AppointmentModal } from "../components/appointment/appointmentModal.ts";
import { UserCreateModal } from "../components/appointment/userCreateModal.ts";
import { UserType } from "../ts/enums/userTypes.ts";

export default class AppointmentsPage extends BaseComponent {
  currentUser: User | null;
  constructor() {
    const template = `
   <div class="container-fluid container-md mt-5 min-vh-100">
    <div class="row"><h1 class="mt-3">Citas</h1></div>
    <div id="buttons-section" class="row">
    
</div>

<!-- TABLE -->
<div id="table-section" class="row mt-3">
  
</div>

<!-- CREATE MODAL -->
<section id="create-appointment-section"></section>
<section id="create-user-section"></section>

</div>

    `;
    super(template, "#main");
    this.render();
    this.currentUser = new UserManagement().getCurrentUser();
    this.setButtons();
    new AppointmentTable().render();
    new AppointmentModal();
    new UserCreateModal();
  }

  setButtons = () => {
    if (this.currentUser?.type === UserType.Doctor ?? false) {
      const buttonsSection =
        document.querySelector<HTMLElement>("#buttons-section");
      if (buttonsSection) {
        buttonsSection.innerHTML = `
          <div class="col-12">
              <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#createAppointmentModal"
            >
              Nueva Cita
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#create-user-modal"
            >
              Nueva Paciente
            </button>
         </div>
        `;
      }
    }
  };
}
