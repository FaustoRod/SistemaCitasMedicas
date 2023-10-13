import { BaseComponent } from "../baseComponent.ts";
import Specialty from "../../ts/interfaces/specialty.ts";
import SpecialtyCard from "./specialtyCard.ts";

export default class Carousel extends BaseComponent {
  constructor(specialties: Specialty[]) {
    const template = /*html*/ `
<div id="specialtiesCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  ${getCards(specialties)}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#specialtiesCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#specialtiesCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

    super(template);
  }
}

const getCards = (specialties: Specialty[]) => {
  let cards = "";
  let carouselItem = document.createElement("div");
  carouselItem.setAttribute("class", "carousel-item active");

  specialties.forEach((specialty, index) => {
    if (index !== 0) {
      carouselItem.classList.remove("active");
    }

    const card = new SpecialtyCard(
      specialty.text,
      `./public/images/${specialty.image}`,
      specialty.description,
    );

    carouselItem.innerHTML = card.getElement();
    cards += carouselItem.outerHTML;
  });

  return cards;
};
