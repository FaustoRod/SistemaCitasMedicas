import { BaseComponent } from "../baseComponent.ts";
import Contact from "./contact.ts";
import Location from "../location/location.ts";

export default class Information extends BaseComponent {
  constructor() {
    const template = `
            <div class="container-fluid">
            <div class="row"><h1 class="text-center">Informacion</h1></div>
            <div class="row">
                <div class="col-6">
                    <section id="location">

                    </section>
                </div>
                <div class="col-6">
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
