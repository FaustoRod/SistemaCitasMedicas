import "./scss/main.scss";
import "bootstrap";
import Header from "./components/header/header.ts";
import Intro from "./components/intro/intro.ts";
import Specialities from "./components/specialties/specialties.ts";
import Information from "./components/information/Information.ts";
import Footer from "./components/footer/Footer.ts";

new Header();
// document.querySelector<HTMLDivElement>("#header")!.innerHTML =
//   header.getElement();

new Intro();
// document.querySelector<HTMLDivElement>("#intro")!.innerHTML =
//   intro.getElement();

new Specialities();

new Information();

new Footer();
