import { BaseComponent } from "../baseComponent";
import data from "../../data/specialties.json";
import Specialty from "../../ts/interfaces/specialty";
import SpecialtyCard from "./specialtyCard";

export default class Specialities extends BaseComponent {
  constructor() {
    const template = /*html */ `
        <div class="container-fluid">
            <div class="row text-center mt-3"><h1>Especialidades</h1></div>
            <div id="specialty-cards" class="row"></div>
        </div>    
    `;

    super(template);

    document.querySelector<HTMLDivElement>("#specialties")!.innerHTML =
      this.getElement();

    const specialties = getSpecialties();

    const specialtyCardsSection =
      document.querySelector<HTMLDivElement>("#specialty-cards")!;

    specialties.forEach((specialty) => {
      const card = new SpecialtyCard(
        specialty.text,
        `./public/images/${specialty.image}`,
        specialty.description,
      );

      specialtyCardsSection.innerHTML += card.getElement();
    });
  }
}

const getSpecialties = () => {
  return data as unknown as Specialty[];
};
