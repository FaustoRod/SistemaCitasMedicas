import { BaseComponent } from "../baseComponent";
import data from "../../data/header.json";
import { HeaderItem } from "../../ts/interfaces/headerItem.ts";
import Swal from "sweetalert2";
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
              >User Name </span
            >
          </li>
        </ul>
        
          <button id="loginBtn" type="button" class="btn btn-primary"><span class="m-2">Ingresar</span><i class="fa-solid fa-right-to-bracket"></i></button>
      </div>
    </nav>
  </header>`;

    super(template, "#header");
    this.addListener();
  }

  private addListener = () => {
    const btnLogin = document.querySelector<HTMLButtonElement>("#loginBtn");
    if (btnLogin) {
      btnLogin.addEventListener("click", () => {
        Swal.fire({
          title: "Ingresar",
          html: this.getLoginForm(),
          focusConfirm: false,
          confirmButtonText: "Ingresar",
          preConfirm: () => {
            return false;
          },
        });
      });
    }
  };

  private getLoginForm = () => {
    return `
    <span id="login-form-error" class="text-danger"></span>
    <input id="swal-input1" class="swal2-input"  placeholder="Usuario">
    <input id="swal-input2" class="swal2-input" type="password" placeholder="Contraseña">
    <div class="swal2-radio">
        <label>
            <input type="radio" name="swal2-radio" value="1"><span class="swal2-label">Paciente</span>
        </label>
        <label>
            <input type="radio" name="swal2-radio" value="2"><span class="swal2-label">Doctor</span>
        </label>
    </div>
    `;
  };
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
