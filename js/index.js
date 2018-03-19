/**
 * Nova App
 * https://github.com/redacademy/nova-winter-2018
 * @flow
 */

import React, { Component } from "react";
import Router from "./navigation/Router";
import { Provider } from "react-redux";

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
  render() {
    return (
      <Provider store={Store}>
        <NavProvider context={navContext}>
          <StackNav
            id="root"
            navigatorUID="root"
            initialRoute={Router.getRoute("layout")}
          />
        </NavProvider>
      </Provider>
    );
  }
}
