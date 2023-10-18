import { BaseComponent } from "../baseComponent.ts";
import { initMap } from "../../ts/maps.ts";

export default class Location extends BaseComponent {
  constructor() {
    const template = ` 
 <div class="container-fluid mt-5">
    <div class="row"><h1 class="text-center">Ubicacion</h1></div>
    <div class="row"><div id="map-container"></div></div></div> 
 
</div>
 `;
    super(template, "#location");

    // document.querySelector<HTMLDivElement>("#location")!.innerHTML =
    //   this.getElement();

    initMap();
  }
}
