import "./scss/main.scss";
import "bootstrap";
import Header from "./components/header/header.ts";
import Intro from "./components/intro/intro.ts";
import Specialities from "./components/specialties/specialties.ts";

const header = new Header();
document.querySelector<HTMLDivElement>("#header")!.innerHTML =
  header.getElement();

const intro = new Intro();
document.querySelector<HTMLDivElement>("#intro")!.innerHTML =
  intro.getElement();

 new Specialities();
