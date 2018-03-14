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

class NavigationLogin extends Component {
  render() {
    return (
      
          <StackNav
            id="devRoutes"
            navigatorUID="devRoutes"
            initialRoute={Router.getRoute("devRoutes")}
            defaultRouteConfig={defaultRouteConfig}
          />
       

          <StackNav
            id="userProfile"
            navigatorUID="userProfile"
            initialRoute={Router.getRoute("userProfile")}
            defaultRouteConfig={defaultRouteConfig}
          />
   

       
          <StackNav
            id="companies"
            navigatorUID="companies"
            initialRoute={Router.getRoute("companies")}
            defaultRouteConfig={defaultRouteConfig}
          />
       

        
          <StackNav
            id="myProjects"
            navigatorUID="myProjects"
            initialRoute={Router.getRoute("myProjects")}
            defaultRouteConfig={defaultRouteConfig}
          />
        
      
    );
  }
}

export default NavigationLayout;
