import { BaseComponent } from "../baseComponent.ts";
import Contact from "./contact.ts";
import Location from "../location/location.ts";

export default class Information extends BaseComponent {
  constructor() {
    const contact = new Contact();
    const template = `
            <div class="container-fluid mt-5">
            <div class="row"><h1 class="text-center">Contactenos</h1></div>
            <div class="row">
                <div class="col-12 col-md-6 order-2 order-md-1 d-none d-lg-flex">
                <img class="img-fluid" src="../../../public/images/hand.jpg"/>
                </div>
                <div class="col-12 col-md-12 col-lg-6  order-1 order-md-2>
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
