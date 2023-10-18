import { BaseComponent } from "../baseComponent";
import data from "../../data/specialties.json";
import Specialty from "../../ts/interfaces/specialty";
import SpecialtyCard from "./specialtyCard";
import Carousel from "./carousel.ts";

export default class Specialities extends BaseComponent {
  specialties: Specialty[];
  constructor() {
    const template = /*html */ `
        <div class="container-fluid">
            <div class="row text-center mt-5"><h1>Especialidades</h1></div>
            <div id="specialty-cards-desktop" class="row d-none d-md-flex"></div>
            <div id="specialty-cards-mobile" class="row d-md-none"></div>
        </div>    
    `;

    super(template, "#specialties");

    // document.querySelector<HTMLDivElement>("#specialties")!.innerHTML =
    //   this.getElement();

    this.specialties = this.getSpecialties();

    const specialtyCardsSectionDesktop = document.querySelector<HTMLDivElement>(
      "#specialty-cards-desktop",
    )!;

    specialtyCardsSectionDesktop.innerHTML += this.getSpecialtiesDesktop();

    const specialtyCardsSectionMobile = document.querySelector<HTMLDivElement>(
      "#specialty-cards-mobile",
    )!;
    specialtyCardsSectionMobile.innerHTML = new Carousel(
      this.specialties,
    ).getElement();
  }

  private getSpecialties = () => {
    return data as unknown as Specialty[];
  };

  private getSpecialtiesDesktop = () => {
    let result = "";

    const col = document.createElement("div");
    col.setAttribute("class", "col-3");

    this.specialties.forEach((specialty) => {
      const card = new SpecialtyCard(
        specialty.text,
        `./public/images/${specialty.image}`,
        specialty.description,
      );

      col.innerHTML = card.getElement();
      return (result += col.outerHTML);
    });

    return result;
  };
}
