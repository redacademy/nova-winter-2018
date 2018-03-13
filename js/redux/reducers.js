import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
