import { BaseComponent } from "../baseComponent.ts";

export default class Location extends BaseComponent {
  constructor() {
    const template = ` <div  class="container-fluid mt-3">
          <div class="row text-center"><h1>Ubicacion</h1></div>
          <div class="row">
            <div class="col-12 ">
              <div id="map-container"></div></div>
          </div>
        </div>`;
    super(template);

    document.querySelector<HTMLDivElement>("#location")!.innerHTML =
      this.getElement();
  }
}
