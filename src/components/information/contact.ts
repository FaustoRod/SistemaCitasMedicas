import { BaseComponent } from "../baseComponent.ts";
import data from "../../data/specialties.json";
import Specialty from "../../ts/interfaces/specialty.ts";
import Swal from "sweetalert2";
export default class Contact extends BaseComponent {
  constructor() {
    const template = `
        <section id="contact">
                        <form id="contact-form">
                            <div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Telefono</label>
                                    <input type="text" class="form-control" id="phone" required>
                                </div>
                                <div class="mb-3">
                                    <label for="specialty" class="form-label">Especialidad</label>
                                    <select class="form-select" id="specialty" required>
                                        ${getSpecialtiesOptions()}
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label for="question" class="form-label">Pregunta</label>
                                    <textarea type="text" class="form-control" minlength="10" maxlength="250" id="question" required></textarea>
                                </div>
                                
                                <button id="information-submit" type="submit" class="btn btn-primary col-12" >Enviar</button>
                            </div>
                        </form>
                    </section>
        `;

    super(template);
  }

  addListeners() {
    const informationBtn = document.getElementById("contact-form");
    if (informationBtn)
      informationBtn.addEventListener("submit", () => {
        Swal.fire({
          title: "Informacion Enviada",
          text: "Estaremos respondiendo su pregunta lo mas pronto posible.",
          icon: "success",
          showConfirmButton: false,
        });
      });
  }
}

const getSpecialtiesOptions = () => {
  const specialties = data as unknown as Specialty[];
  let result = `<option>Seleccione Especialidad</option>`;

  specialties.forEach(({ key, text }) => {
    result += `<option value="${key}">${text}</option>`;
  });

  return result;
};
