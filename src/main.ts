import "./scss/main.scss";
import "bootstrap";
import LandingPage from "./views/landingPage.ts";
import { UserManagement } from "./ts/utils/userManagement.ts";
new UserManagement().loadDefaultUsers();
new LandingPage();
