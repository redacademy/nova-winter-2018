import Splash from "../scenes/Splash";
import Login from "../scenes/Login";
import UserProfile from "../scenes/UserProfile";
import Companies from "../scenes/Companies";
import MyProjects from "../scenes/MyProjects";

import NavigationLayout from "./NavigationLayout";
import { createRouter } from "@expo/ex-navigation";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  login: () => Login,
  userProfile: () => UserProfile,
  companies: () => Companies,
  myProjects: () => MyProjects
}));

export default Router;
