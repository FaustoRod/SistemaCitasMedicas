﻿import { BaseComponent } from "../components/baseComponent.ts";

export default class AppointmentsPage extends BaseComponent {
  constructor() {
    const template = `
   <div class="container-fluid min-vh-100">
    <div class="row"><h1>Citas</h1></div>
<div class="mb-3">
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#createModal"
  >
    Nueva Cita
  </button>
</div>

<!-- TABLE -->
<div class="row">
  <table class="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Hora</th>
        <th scope="col">Estado</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Juan Perez</td>
        <td>12:00 pm</td>
        <td>Pendiente</td>
        <td>
          <button class="btn btn-primary">+</button>
          <button class="btn btn-primary">+</button>
          <button class="btn btn-primary">+</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Maria Tomas</td>
        <td>12:00 pm</td>
        <td>Pendiente</td>
        <td>
          <button class="btn btn-primary">+</button>
          <button class="btn btn-primary">+</button>
          <button class="btn btn-primary">+</button>
        </td>
      </tr>
    </tbody>
  </table>
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
  }
}
