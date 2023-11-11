import { BaseComponent } from "../components/baseComponent.ts";
import Intro from "../components/intro/intro.ts";
import Specialities from "../components/specialties/specialties.ts";
import Information from "../components/information/Information.ts";

export default class LandingPage extends BaseComponent {
  constructor() {
    const template = `
 <div class="container-fluid container-md">
    <section id="intro"  data-aos="fade-up" ></section>

    <section id="specialties"  data-aos="fade-up"></section>

    <section id="information"  data-aos="fade-up"></section>
    
    <section id="location"  data-aos="fade-up"></section>
 
 
</div>

        `;

    super(template, "#main");
    this.render();

    new Intro().render();

    new Specialities().render();

    new Information().render();
  }
}
