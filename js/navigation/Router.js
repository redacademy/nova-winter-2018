// Dev use only
// temporary routes to make it possible to test components
// remove before shipping!
import DevRoutes from "../scenes/DevRoutes/";
import CompaniesSearch from "../scenes/CompaniesSearch";
import CompanyProfile from "../scenes/CompanyProfile";
import CompaniesFilter from "../scenes/CompaniesFilter";
import Login from "../scenes/Login";
import ProjectBrief from "../scenes/ProjectBrief";
import ProjectConfirm from "../scenes/ProjectConfirm";
import ProjectResources from "../scenes/ProjectResources";
import ProjectResourceTest from "../scenes/ProjectResourceTest";
import ProjectResourceTestResults from "../scenes/ProjectResourceTestResults";
import ProjectSubmit from "../scenes/ProjectSubmit";
import ProjectSubmitConfirm from "../scenes/ProjectSubmitConfirm";
import UserAccountConfirm from "../scenes/UserAccountConfirm";
import UserAccountCreate from "../scenes/UserAccountCreate";
import UserProfileConfirm from "../scenes/UserProfileConfirm";
import UserProfileCreate from "../scenes/UserProfileCreate";

// Main routes in the tab tab
import UserProfile from "../scenes/UserProfile";
import Companies from "../scenes/Companies";
import MyProjects from "../scenes/MyProjects";

import NavigationLayout from "./NavigationLayout";
import { createRouter } from "@expo/ex-navigation";

const Router = createRouter(() => ({
  // Dev use only - remove before shipping!
  devRoutes: () => DevRoutes,

  // Main routes in the tab tab
  layout: () => NavigationLayout,
  userProfile: () => UserProfile,
  companies: () => Companies,
  myProjects: () => MyProjects,

  // temporary routes to make it possible to test components
  // remove before shipping!
  companiesFilter: () => CompaniesFilter,
  companiesSearch: () => CompaniesSearch,
  companyProfile: () => CompanyProfile,
  login: () => Login,
  projectBrief: () => ProjectBrief,
  projectConfirm: () => ProjectConfirm,
  projectResources: () => ProjectResources,
  projectResourceTest: () => ProjectResourceTest,
  projectResourceTestResults: () => ProjectResourceTestResults,
  projectSubmit: () => ProjectSubmit,
  projectSubmitConfirm: () => ProjectSubmitConfirm,
  userAccountConfirm: () => UserAccountConfirm,
  userAccountCreate: () => UserAccountCreate,
  userProfileConfirm: () => UserProfileConfirm,
  userProfileCreate: () => UserProfileCreate
}));

export default Router;
