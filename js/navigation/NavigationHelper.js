import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./Router";


export const goToScene = (currentNavigatorUID, targetScene, props) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute(targetScene, {
        props
      })
    )
  );
};

export const closeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};
