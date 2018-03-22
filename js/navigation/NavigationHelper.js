import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./Router";

export const goToScene = (currentNavigatorUID, targetScene, props) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute(targetScene, { props })
    )
  );
};
<<<<<<< HEAD

export const buttonToScene = params => {
=======
export const buttonToScene = (params) => {
>>>>>>> a00dfad... Wiring to brief page done, errors debugged
  const { currentNavigatorUID, targetScene, props } = params;
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute(targetScene, { props })
    )
  );
};
<<<<<<< HEAD
=======

>>>>>>> a00dfad... Wiring to brief page done, errors debugged
