import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  auth: authReducer
});

export default rootReducer;
