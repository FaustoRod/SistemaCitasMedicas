import { BaseComponent } from "../baseComponent";
import data from "../../data/specialties.json";
import Specialty from "../../ts/interfaces/specialty";
import SpecialtyCard from "./specialtyCard";

export default class Specialities extends BaseComponent {
  constructor() {
    const template = /*html */ `    
    <div class="row text-center"><h1>Especialidades</h1></div>
    <div id="specialty-cards" class="row"></div>
    `;

    const specialties = getSpecialties();

    const specialtyCardsSection =
      document.querySelector<HTMLDivElement>("#specialty-cards")!;

    specialties.forEach((specialty) => {
      const card = new SpecialtyCard(
        specialty.text,
        specialty.description,
        specialty.image
      );

      specialtyCardsSection.append(card.getElement());
    });

    super(template);
  }
}

const getSpecialties = () => {
  const specialties = data as unknown as Specialty[];
  return specialties;
};
