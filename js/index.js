/**
 * Nova App
 * https://github.com/redacademy/nova-winter-2018
 * @flow
 */

import React, { Component } from "react";
import Router from "./navigation/Router";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import {
  StackNavigation as StackNav,
  NavigationContext as NavContext,
  NavigationProvider as NavProvider
} from "@expo/ex-navigation";

import Store from "./redux/store";

const navContext = new NavContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  getInitialRoute() {
    if (Store.getState().auth.authenticated) {
      return "layout";
    }
    return "login";
  }

  render() {
    return (
      <Provider store={Store}>
        <NavProvider context={navContext}>
          <StatusBar barStyle="light-content" />
          <StackNav
            id="root"
            navigatorUID="root"
            initialRoute={Router.getRoute(this.getInitialRoute())}
          />
        </NavProvider>
      </Provider>
    );
  }
}
