import { BaseComponent } from "../baseComponent";

export default class Intro extends BaseComponent {
  constructor() {
    const template = /*html */ `
    <div class="container-fluid bg-dark mt-5">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 order-2 order-lg-1 text-white text-center mt-5 mb-5 justify-content-center"
        >
          <h1 class="mt-5 mb-4">Jordan B. Peterson</h1>
          <p>
            Phd en psicologia clinica. Profesor de psicologia en la
            Universidad de Toronto. Con mas de 20 años de experiencia.
            Autor del libro "12 Reglas para la Vida". Defensor de la
            libertad de expresion y una de las mayores influencias en
            jovenes alrededor del mundo.
          </p>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 mt-5">
          <img
            src="./public/images/jordan-peterson-poetry.png"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>`;

    super(template, "#intro");
  }
}
