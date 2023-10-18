import { BaseComponent } from "../baseComponent.ts";
import Contact from "./contact.ts";
import Location from "../location/location.ts";

export default class Information extends BaseComponent {
  constructor() {
    const contact = new Contact();
    const template = `
            <div class="container-fluid mt-5">
            <div class="row"><h1 class="text-center">Informacion</h1></div>
            <div class="row">
                <div class="col-12 col-md-6 order-2 order-md-1 d-none d-md-flex">
                <svg class="bd-placeholder-img rounded" width="100%" height="100%
                " xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">CONTACTO</text>
                </svg>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2>
                    ${contact.getElement()}
                </div>
            </div>
        </div>
            `;
    super(template, "#information");

    // document.querySelector<HTMLDivElement>("#information")!.innerHTML =
    //   this.getElement();

    contact.addListeners();
    new Location();
  }
}
