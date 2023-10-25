import AppointmentsPage from "../views/appointmentsPage.ts";
import LandingPage from "../views/landingPage.ts";

const manageRoutes = () => {
  const url = window.location.hash.slice(1) || "/";
  if (url === "appointments") {
    new AppointmentsPage();
  } else {
    new LandingPage();
    if (url !== "/") {
      location.href = window.location.hash;
    }
  }
};

window.addEventListener("load", manageRoutes);

window.addEventListener("hashchange", manageRoutes);
