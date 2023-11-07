import { BaseComponent } from "../baseComponent.ts";
import { AppointmentManagement } from "../../ts/appointmentManagement.ts";
import DataTable from "datatables.net-dt";
import moment from "moment";
import {
  appointmentStatus,
  appointmentStatusName,
} from "../../ts/enums/appointmentStatus.ts";
import { UserManagement } from "../../ts/utils/userManagement.ts";
import { UserType } from "../../ts/enums/userTypes.ts";
import Swal from "sweetalert2";

export class AppointmentTable extends BaseComponent {
  //@ts-ignore
  isPatient: boolean;
  //@ts-ignore
  userId: number;

  constructor() {
    const template = `
<div class="table-responsive">
<table id="myTable" class="table table-bordered table-striped table-hover">
                    <thead id="table-header">
                    </thead>
                    <tbody id="table-body">                      
                    </tbody>
                </table></div>
                 
            `;

    super(template, "#table-section");
    this.setUserType();
  }

  override render() {
    super.render();
    this.setHeader();
    this.setBody();
    this.addListeners();
    new DataTable("#myTable", {
      columnDefs: [{ targets: 6, orderable: false, width: "10%" }],
      language: {
        lengthMenu: "Mostrar _MENU_ registros por pagina",
        info: "Mostrando pagina _PAGE_ de _PAGES_",
        search: "Buscar:",
        paginate: {
          next: "Siguiente",
          previous: "Anterior",
          last: "Ultimo",
          first: "Primero",
        },
      },
    });
  }

  setHeader = () => {
    const header = `<tr>
          <th scope="col">#</th>
          <th scope="col">${this.isPatient ? "Doctor" : "Nombre"}</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
        </tr>`;

    const tableHeader = document.querySelector("#table-header");
    if (tableHeader) tableHeader.innerHTML = header;
  };

  setBody = () => {
    const appointments = new AppointmentManagement()
      .getAppointments()
      .filter(
        (appointment) =>
          (this.isPatient && appointment.patientId === this.userId) ||
          (!this.isPatient && appointment.doctorId === this.userId),
      );
    //
    // if (this.isPatient) {
    //   appointments = appointments.filter(
    //       (appointment) => appointment.patientId === this.userId,
    //   );
    // } else {
    //   appointments = appointments.filter(
    //       (appointment) => appointment.doctorId === this.userId,
    //   );
    // }

    let body = "";

    appointments.forEach(
      ({ id, doctor, patientName, time, status, specialty, patientId }) => {
        body += `<tr>
                <th scope="row">${id}</th>
                <td>${this.isPatient ? doctor : patientName}</td>
                <td>${specialty}</td>
                <td>${moment(time).format("L")}</td>
                <td>${moment(time).format("HH:mm")}</td>
                <td>${appointmentStatusName[status]}</td>
                <td>${
                  this.isPatient
                    ? `<button class="btn btn-danger">Cancelar</button>`
                    : status !== appointmentStatus.Canceled
                    ? `
                            <button class="btn btn-primary" 
                            data-bs-toggle="modal" data-bs-target="#createAppointmentModal"
                            data-appointment-id="${id}" 
                            data-patient-id="${patientId}" 
                            data-patient-name="${patientName}" 
                            data-date="${moment(time).format("L")}" 
                            data-time="${moment(time).format("HH:mm")}" 
                            data-specialty="${specialty}" 
                            data-edit="true"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button class="btn btn-danger appointment-cancel-btn" 
                            data-appointment-id="${id}" ><i class="fa-solid fa-trash"></i></button>`
                    : ""
                }</td>
                
               </tr>`;
      },
    );

    const tableBody = document.querySelector("#table-body");
    if (tableBody) tableBody.innerHTML = body;
  };

  private showDeleteModal = (appointmentId: number) => {
    Swal.fire({
      title: "Confirmacion",
      text: "Seguro desea cancelar esta cita?",
      icon: "question",
      confirmButtonText: "Si",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        new AppointmentManagement().deleteAppointment(appointmentId);
        Swal.fire({
          text: "Cita eliminada con exito.",
          icon: "success",
        });
        this.render();
      }
    });
  };

  private setUserType = () => {
    const currentUser = new UserManagement().getCurrentUser();
    this.isPatient = currentUser?.type === UserType.Patient;
    this.userId = currentUser?.id ?? 0;
  };

  private addListeners = () => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      ".appointment-cancel-btn",
    );

    for (const button of buttons) {
      button.addEventListener("click", () => {
        this.showDeleteModal(+button.getAttribute("data-appointment-id")!);
      });
    }
  };
}
