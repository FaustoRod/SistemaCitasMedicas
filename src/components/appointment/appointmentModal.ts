﻿import { BaseComponent } from "../baseComponent.ts";
import TomSelect from "tom-select";
import { UserManagement } from "../../ts/utils/userManagement.ts";
import { UserType } from "../../ts/enums/userTypes.ts";
import moment from "moment";
import { AppointmentCreate } from "../../ts/interfaces/appointment.ts";
import { AppointmentManagement } from "../../ts/appointmentManagement.ts";
import specialitiesData from "../../data/specialties.json";
import Specialty from "../../ts/interfaces/specialty.ts";
import { AppointmentTable } from "./appointmentTable.ts";
import Swal from "sweetalert2";
export class AppointmentModal extends BaseComponent {
  selectDropdown: TomSelect | undefined;
  formComponent: HTMLFormElement | null;

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
            <select id="appointment-name" data-placeholder="Seleccione Paciente"  autocomplete="off" required>
            </select>

          </div>
          <div class="mb-3">
            <label for="specialty" class="col-form-label">Especialidad:</label>
            <select id="specialty" class="form-select" data-placeholder="Seleccione Especialidad"  autocomplete="off" required>
            </select>

          </div>
          <div class="mb-3">
            <label for="appointment-date" class="col-form-label">Fecha:</label>
            <input type="date" class="form-control" id="appointment-date" min="${moment().format(
              import.meta.env.VITE_DATE_FORMAT,
            )}" max="${moment()
              .add(1, "M")
              .format(import.meta.env.VITE_DATE_FORMAT)}" required/>
          </div>
          <div class="mb-3">
            <label for="appointment-time" class="col-form-label">Hora:</label>
            <input type="time" class="form-control" id="appointment-time" min="08:00" max="17:00" required/>
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
    this.formComponent = document.querySelector("#appointment-form");
    this.addListeners();
    this.setUpDropdown();
    this.setSpecialties();
    this.setDropdownValues();
  }

  private addListeners = () => {
    const createModal = document.getElementById("createModal");
    if (createModal) {
      createModal.addEventListener("shown.bs.modal", (event) => {
        this.setDropdownValues();

        var button = (event as MouseEvent).relatedTarget as HTMLButtonElement;
        const isEdit = button.getAttribute("data-edit");
        if (isEdit) {
          this.setAppointmentInformation(button);
        }
      });

      createModal.addEventListener("hidden.bs.modal", () => {
        this.resetForm();
      });
    }

    const saveAppointmentBtn = document.getElementById("saveAppointmentButton");
    if (saveAppointmentBtn) {
      saveAppointmentBtn.addEventListener("click", () => {
        if (this.formComponent?.reportValidity()) {
          this.createAppointment();
          new AppointmentTable().render();
          this.resetForm();
          Swal.fire({
            title: "Cita Creada con Exito",
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
          });
        }
      });
    }
  };

  private setDropdownValues = () => {
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

  private setSpecialties = () => {
    const specialties = specialitiesData as unknown as Specialty[];
    const specialtyDropdown =
      document.querySelector<HTMLSelectElement>("#specialty");
    if (specialtyDropdown) {
      specialties.forEach((specialty, index) => {
        specialtyDropdown.innerHTML += `<option ${
          index === 0 ? "selected" : ""
        } value="${specialty.key}">${specialty.text}</option>`;
      });
    }
  };
  private setUpDropdown = () => {
    this.selectDropdown = new TomSelect("#appointment-name", {
      create: false,
      sortField: {
        // @ts-ignore
        field: "text",
        direction: "asc",
      },
      onChange: () => {
        const current = this.selectDropdown?.getValue();
        console.log(this.selectDropdown?.getItem(current![0])?.innerText);
      },
    });
  };

  private resetForm = () => {
    this.formComponent?.reset();
    this.selectDropdown?.setValue("");
  };

  private createAppointment = () => {
    const currentDoctor = new UserManagement().getCurrentUser();
    if (true || currentDoctor) {
      const patientId = this.selectDropdown?.getValue()[0]!;
      const patientName = this.selectDropdown?.getItem(patientId)?.innerText;

      const date =
        document.querySelector<HTMLInputElement>("#appointment-date")?.value ??
        "";

      const time =
        document.querySelector<HTMLInputElement>("#appointment-time")?.value ??
        "";

      const specialty =
        document.querySelector<HTMLSelectElement>("#specialty")
          ?.selectedOptions[0].innerText ?? "";

      const newAppointment: AppointmentCreate = {
        specialty: specialty,
        patientId: parseInt(patientId),
        patientName: patientName!,
        time: new Date(`${date} ${time}`),
        doctorId: currentDoctor?.id ?? 0,
        doctor: currentDoctor?.name ?? "RICARDO",
      };

      new AppointmentManagement().saveAppointment(newAppointment);
    }
  };

  private setAppointmentInformation = (eventButton: HTMLButtonElement) => {
    const id = eventButton.getAttribute("data-appointment-id");
    const patientId = eventButton.getAttribute("data-patient-id");
    const date = eventButton.getAttribute("data-date");
    const time = eventButton.getAttribute("data-time");
    const specialty = eventButton.getAttribute("data-specialty");

    console.log(id, patientId, date, time, specialty);
  };
}
