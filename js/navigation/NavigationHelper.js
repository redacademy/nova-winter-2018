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
export const buttonToScene = params => {
  const { currentNavigatorUID, targetScene, props } = params;
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute(targetScene, { props })
    )
  );
};
