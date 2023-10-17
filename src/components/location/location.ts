import { BaseComponent } from "../baseComponent.ts";
import { initMap } from "../../ts/maps.ts";

export default class Location extends BaseComponent {
  constructor() {
    const template = ` 
 <h1 class="text-center">Ubicacion</h1>
              <div id="map-container"></div></div>`;
    super(template);

    document.querySelector<HTMLDivElement>("#location")!.innerHTML =
      this.getElement();

    initMap();
  }
}
