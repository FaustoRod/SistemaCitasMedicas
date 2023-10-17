import { BaseComponent } from "../baseComponent";
import data from "../../data/header.json";
import { HeaderItem } from "../../ts/interfaces/headerItem.ts";

export default class Header extends BaseComponent {
  constructor() {
    const template =
      /*html*/
      `
    <header class="navbar navbar-expand-lg bg-body-secondary mb-2 fixed-top">
    <nav class="container-xxl">
      <a class="navbar-brand" href="#intro">CITAMED</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${getHeaderItems()}
        </ul>
        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item">
            <span class="nav-link active" aria-current="page" href="#"
              >User Name</span
            >
          </li>
          <button class="btn btn-primary">Ingresar</button>
        </ul>
      </div>
    </nav>
  </header>`;

    super(template);
  }
}

const getHeaderItems = () => {
  const headerItems = data as unknown as HeaderItem[];

  let result = "";

  headerItems.forEach((item) => {
    result += `
    <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${item.link}">${item.text}</a>
          </li>
    `;
  });

  return result;
};
