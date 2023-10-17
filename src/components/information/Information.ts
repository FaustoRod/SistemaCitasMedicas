import { BaseComponent } from "../baseComponent.ts";
import Contact from "./contact.ts";
import Location from "../location/location.ts";

export default class Information extends BaseComponent {
  constructor() {
    const template = `
            <div class="container-fluid mt-5">
            <div class="row"><h1 class="text-center">Informacion</h1></div>
            <div class="row">
                <div class="col-12 col-md-6 order-2 order-md-1">
                    <section id="location">

                    </section>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2>
                    ${new Contact().getElement()}
                </div>
            </div>
        </div>
            `;
    super(template);

    document.querySelector<HTMLDivElement>("#information")!.innerHTML =
      this.getElement();

    new Location();
  }
}
