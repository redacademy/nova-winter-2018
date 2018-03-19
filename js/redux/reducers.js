import {
  combineReducers
} from "redux";
import authReducer from "./modules/auth";
import companyReducer from "./modules/companyReducer";
import userReducer from "./modules/userReducer";
import {
  NavigationReducer
} from "@expo/ex-navigation";

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  auth: authReducer,
  company: companyReducer,
  user: userReducer
});

export default rootReducer;