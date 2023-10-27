import "./scss/main.scss";

import "bootstrap";
import LandingPage from "./views/landingPage.ts";
import { UserManagement } from "./ts/utils/userManagement.ts";
import MainLayout from "./layout/mainLayout.ts";
import "./routing";
import { AppointmentManagement } from "./ts/appointmentManagement.ts";

new UserManagement().loadDefaultUsers();
new AppointmentManagement().loadDefaultAppointments();
new MainLayout();
new LandingPage();
