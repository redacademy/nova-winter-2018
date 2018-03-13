/**
 * Nova App
 * https://github.com/redacademy/nova-winter-2018
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Router from "./navigation/Router";
import { Provider } from "react-redux";

import {
  StackNavigation as StackNav,
  NavigationContext as NavContext,
  NavigationProvider as NavProvider
} from "@expo/ex-navigation";

const navContext = new NavContext({
  router: Router
});

export default class App extends Component {
  render() {
    return (
      <NavProvider context={navContext}>
        <StackNav
          id="root"
          navigatorUID="root"
          initialRoute={Router.getRoute("layout")}
        />
      </NavProvider>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Welcome to Nova</Text>
//       </View>
//     );
//   }
// }
