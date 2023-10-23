import { BaseComponent } from "../components/baseComponent.ts";
import Header from "../components/header/header.ts";
import Footer from "../components/footer/Footer.ts";

export default class MainLayout extends BaseComponent {
  constructor() {
    const template = `
    
    <section id="header"></section>

    <section id="main"></section>

    <section id="footer"></section>
    `;
    super(template, "#app");
    this.render();

    new Header().render();

    new Footer().render();
  }
}
