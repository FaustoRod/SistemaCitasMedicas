import { BaseComponent } from "../baseComponent.ts";

export default class Contact extends BaseComponent {
  constructor() {
    const template = `
        <section id="contact">
                      <h1 class="text-center">Contactenos</h1>
                        <form>
                            <div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="email">
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Telefono</label>
                                    <input type="text" class="form-control" id="phone">
                                </div>
                                <div class="mb-3">
                                    <label for="specialty" class="form-label">Especialidad</label>
                                    <select class="form-select" id="specialty">
                                        <option>Matrimonio</option>
                                        <option>Ninos</option>
                                        <option>Mujere</option>
                                        <option>CLinica</option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label for="question" class="form-label">Pregunta</label>
                                    <textarea type="text" class="form-control" id="question"></textarea>
                                </div>
                            </div>
                        </form>
                    </section>
        `;

    super(template);
  }
}
