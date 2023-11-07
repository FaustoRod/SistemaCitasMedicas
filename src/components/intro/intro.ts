import { BaseComponent } from "../baseComponent";

export default class Intro extends BaseComponent {
  constructor() {
    const template = /*html */ `
    <div class="container-fluid bg-dark mt-5 bg-intro">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-xl-8 offset-xl-2 text-white text-center mt-5 mb-5 justify-content-center"
        >
          <h1 class="mt-5 mb-4">Lo mejor para tu salud mental</h1>
          <p class="text-wrap">
            Los terapeutas experimentados en el Psimed se dedican a trabajar hacia el mejor resultado posible para los 
            objetivos de sus clientes. La gama de especialidades profesionales disponibles en nuestra clínica permite a 
            los clientes ser emparejados con los terapeutas que tienen experiencia en la evaluación y el tratamiento de 
            sus preocupaciones únicas.
          </p>
        </div>
      </div>
    </div>
  </div>`;

    super(template, "#intro");
  }
}
