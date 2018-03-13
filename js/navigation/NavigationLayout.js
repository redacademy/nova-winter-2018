import React, { Component } from "react";
import Router from "./Router";

import {
  StackNavigation as StackNav,
  TabNavigation as TabNav,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

const defaultRouteConfig = {
  navigationBar: {
    // tintColor: white, // colour of scene title and hamburger menu
  }
};

class NavigationLayout extends Component {
  render() {
    return (
      <TabNav
        id="main"
        navigatorUID="main"
        initialTab="companies"
        tabBarColor="#ccc"
      >
        <TabItem id="login" title="Login">
          <StackNav
            id="login"
            navigatorUID="login"
            initialRoute={Router.getRoute("login")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem id="userProfile" title="User Profile">
          <StackNav
            id="userProfile"
            navigatorUID="userProfile"
            initialRoute={Router.getRoute("userProfile")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem id="companies" title="Companies">
          <StackNav
            id="companies"
            navigatorUID="companies"
            initialRoute={Router.getRoute("companies")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem id="myProjects" title="My Projects">
          <StackNav
            id="myProjects"
            navigatorUID="myProjects"
            initialRoute={Router.getRoute("myProjects")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNav>
    );
  }
}

export default NavigationLayout;
