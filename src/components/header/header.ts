import { BaseComponent } from "../baseComponent";
import data from "../../data/header.json";
import { HeaderItem } from "../../ts/interfaces/headerItem.ts";
import { LoginForm } from "../login/loginForm.ts";
import { UserManagement } from "../../ts/utils/userManagement.ts";

export default class Header extends BaseComponent {
  constructor() {
    const template =
      /*html*/
      `
    <header class="navbar navbar-expand-lg header-bg mb-2 fixed-top">
    <nav class="container-xxl">
        
      <a class="navbar-brand "  href="#"><i class="fa-solid fa-brain"></i> PSIMED</a>
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
        <ul id="header-left-section" class="navbar-nav me-auto mb-2 mb-lg-0">
        
        </ul>
        <div id="header-right-section" class="d-flex"></div>
         </div>
    </nav>
  </header>`;

    super(template, "#header");
  }

  override render() {
    super.render();
    this.renderLeftSection();
    this.renderRightSection();
    this.addListener();
  }

  private addListener = () => {
    const btnLogin = document.querySelector<HTMLButtonElement>("#loginBtn");

    if (btnLogin) {
      btnLogin.addEventListener("click", () => {
        if (!new UserManagement().getCurrentUser()) new LoginForm().openForm();
        else this.logOut();
      });
    }

    // const appointmentBtn =
    //   document.querySelector<HTMLButtonElement>("#appointment-btn");
    //
    // if (appointmentBtn) {
    //   appointmentBtn.addEventListener("click", () => {});
    // }
  };

  private renderRightSection = () => {
    const template = `
    <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item">
            <span id="username-label" class="nav-link active" aria-current="page"
              >${
                new UserManagement().getCurrentUser()
                  ? `Bienvenido, ${
                      new UserManagement().getCurrentUser()!.userName
                    }`
                  : ""
              } </span
            >
          </li>
        </ul>
        
       ${this.renderSessionButton()}
      
    `;

    const rightSection = document.querySelector<HTMLButtonElement>(
      "#header-right-section",
    );

    if (rightSection) {
      rightSection.innerHTML = template;
    }
  };

  renderLeftSection = () => {
    const headerLeftSection = document.querySelector<HTMLElement>(
      "#header-left-section",
    );
    if (headerLeftSection) {
      const headerItems = data as unknown as HeaderItem[];

      let result = "";

      headerItems.forEach((item) => {
        result += `
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="${item.link}">${item.text}</a>
    </li>
    `;
      });

      //   if (this.currentUser) {
      //     result += `<li class="nav-item">
      //     <a id="appointment-btn" class="nav-link active" aria-current="page" >Citas</a>
      // </li>`;
      //   }

      if (new UserManagement().getCurrentUser())
        result += `<li class="nav-item">
        <a id="appointment-btn" class="nav-link active" aria-current="page" href="/#appointments">Citas</a>
    </li>`;
      headerLeftSection.innerHTML = result;
    }
  };

  private renderSessionButton = () => {
    const currentUser = new UserManagement().getCurrentUser();
    return `
    <button id="loginBtn" type="button" class="btn ${
      currentUser ? "btn-danger" : "btn-primary"
    }"><span class="m-2">${
      currentUser ? "Salir" : "Ingresar"
    }</span><i class="fa-solid fa-${
      currentUser ? "power-off" : "right-to-bracket"
    }"></i></button>
    `;
  };

  private logOut = () => {
    new UserManagement().logOutUser();
    window.location.replace("/")
    this.setCurrentUser();
  };

  setCurrentUser = () => {
    this.renderRightSection();

    this.renderLeftSection();

    this.addListener();
  };
}
