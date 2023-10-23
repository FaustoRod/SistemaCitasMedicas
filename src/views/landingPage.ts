import { BaseComponent } from "../components/baseComponent.ts";
import Header from "../components/header/header.ts";
import Intro from "../components/intro/intro.ts";
import Specialities from "../components/specialties/specialties.ts";
import Information from "../components/information/Information.ts";
import Footer from "../components/footer/Footer.ts";

export default class LandingPage extends BaseComponent {
  constructor() {
    const template = `
    <section id="header"></section>

    <section id="intro"></section>

    <section id="specialties"></section>

    <section id="information"></section>
    
    <section id="location"></section>

    <section id="footer"></section>
        `;

    super(template, "#app");
    this.render();

    new Header().render();

    new Intro().render();

    new Specialities().render();

    new Information().render();

    new Footer().render();
  }
}
