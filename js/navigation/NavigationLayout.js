import React, { Component } from "react";
import Router from "./Router";
import {
  StackNavigation as StackNav,
  TabNavigation as TabNav,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/styles.js";
const { nearBlack, red } = colors;

const defaultRouteConfig = {
  navigationBar: {
    tintColor: "white", // colour of scene title and hamburger menu
    backgroundColor: nearBlack
  }
};

class NavigationLayout extends Component {
  render() {
    return (
      <TabNav
        id="main"
        navigatorUID="main"
        initialTab="devRoutes"
        tabBarColor={nearBlack}
      >
        <TabItem
          id="devRoutes"
          // title="Dev Routes"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-code")}
        >
          <StackNav
            id="devRoutes"
            navigatorUID="devRoutes"
            initialRoute={Router.getRoute("devRoutes")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="userProfile"
          // title="User Profile"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-contact")}
        >
          <StackNav
            id="userProfile"
            navigatorUID="userProfile"
            initialRoute={Router.getRoute("userProfile")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="companies"
          // title="Companies"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-globe")}
        >
          <StackNav
            id="companies"
            navigatorUID="companies"
            initialRoute={Router.getRoute("companies")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="myProjects"
          // title="My Projects"
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-briefcase")
          }
        >
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

  renderIcon(isSelected, iconName) {
    return (
      <Icon name={iconName} size={24} color={isSelected ? red : "white"} />
    );
  }
}

export default NavigationLayout;
