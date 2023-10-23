import "./scss/main.scss";
import "bootstrap";
import LandingPage from "./views/landingPage.ts";
import { UserManagement } from "./ts/utils/userManagement.ts";
import MainLayout from "./layout/mainLayout.ts";
new UserManagement().loadDefaultUsers();
new MainLayout();
new LandingPage();
