import { BaseComponent } from "../components/baseComponent.ts";
import Intro from "../components/intro/intro.ts";
import Specialities from "../components/specialties/specialties.ts";
import Information from "../components/information/Information.ts";

export default class LandingPage extends BaseComponent {
  constructor() {
    const template = `

    <section id="intro"></section>

    <section id="specialties"></section>

    <section id="information"></section>
    
    <section id="location"></section>
        `;

    super(template, "#main");
    this.render();

    new Intro().render();

    new Specialities().render();

    new Information().render();
  }
}
