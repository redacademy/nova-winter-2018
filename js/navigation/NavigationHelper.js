import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./Router";

<<<<<<< HEAD

=======
// https://red-adp.herokuapp.com/lesson/02-navigation-and-dependencies/
>>>>>>> Add content and styles to CompanyProfile scene.
export const goToScene = (currentNavigatorUID, targetScene, props) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
<<<<<<< HEAD
      Router.getRoute(targetScene, {
        props
      })
=======
      Router.getRoute(targetScene, { props })
>>>>>>> Add content and styles to CompanyProfile scene.
    )
  );
};

export const closeSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};
