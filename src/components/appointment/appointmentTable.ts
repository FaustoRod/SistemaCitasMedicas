import { BaseComponent } from "../baseComponent.ts";
import { AppointmentManagement } from "../../ts/appointmentManagement.ts";
import DataTable from "datatables.net-dt";
import moment from "moment";
import { appointmentStatusName } from "../../ts/enums/appointmentStatus.ts";
export class AppointmentTable extends BaseComponent {
  isPatient: boolean;
  constructor(isPatient: boolean) {
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
    this.isPatient = isPatient;
  }

  override render() {
    super.render();
    this.setHeader();
    this.setBody();
    new DataTable("#myTable", {
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
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Estado</th>
          ${this.isPatient ? "" : `<th scope="col"></th>`}
        </tr>`;

    const tableHeader = document.querySelector("#table-header");
    if (tableHeader) tableHeader.innerHTML = header;
  };

  setBody = () => {
    const appointments = new AppointmentManagement().getAppointments();

    let body = "";

    appointments.forEach(({ id, doctor, patientName, time, status }) => {
      body += `<tr>
                <th scope="row">${id}</th>
                <td>${this.isPatient ? doctor : patientName}</td>
                <td>${moment(time).format("L")}</td>
                <td>${moment(time).format("HH:mm")}</td>
                <td>${appointmentStatusName[status]}</td>
                ${
                  this.isPatient
                    ? ""
                    : `
                           <td>
                            <button class="btn btn-primary">+</button>
                            <button class="btn btn-primary">+</button>
                          </td>`
                }
               </tr>`;
    });

    const tableBody = document.querySelector("#table-body");
    if (tableBody) tableBody.innerHTML = body;
  };
}
