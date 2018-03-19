import React, { Component } from "react";
import Router from "./Router";

import { StackNavigation as StackNav } from "@expo/ex-navigation";

const defaultRouteConfig = {
  navigationBar: {
    // tintColor: white, // colour of scene title and hamburger menu
  }
};

class NavigationLogin extends Component {
  render() {
    return (
      <StackNav
        id="devRoutes"
        navigatorUID="devRoutes"
        initialRoute={Router.getRoute("login")}
        defaultRouteConfig={defaultRouteConfig}
      />
    );
  }
}

export default NavigationLogin;
