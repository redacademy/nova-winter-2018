import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./Router";

// https://red-adp.herokuapp.com/lesson/02-navigation-and-dependencies/
export const goToScene = (currentNavigatorUID, targetScene) => {
  Store.dispatch(
    NavigationActions.push(currentNavigatorUID, Router.getRoute(targetScene))
  );
};

export const closeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};