/**
 * Nova App
 * https://github.com/redacademy/nova-winter-2018
 * @flow
 */

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Splash from "./components/Splash";
import Router from "./navigation/Router";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import {
  StackNavigation as StackNav,
  NavigationContext as NavContext,
  NavigationProvider as NavProvider
} from "@expo/ex-navigation";

import {
  setAuthenticationStatus,
  setUserState,
  userLoading
} from "./redux/modules/auth";
import Store from "./redux/store";
const navContext = new NavContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUser: true
    };
  }
  componentDidMount() {
    Store.dispatch(userLoading(true));
    this._getUserStatus();
  }

  _getUserStatus = async () => {
    await AsyncStorage.getItem("USER", (err, result) => {
      if (result) {
        Store.dispatch(setUserState(JSON.parse(result)));
        Store.dispatch(setAuthenticationStatus(true));
      }
    });
    Store.dispatch(userLoading(false));
    this.setState({ loadingUser: false });
  };

  _getInitialRoute() {
    if (Store.getState().auth.authenticated) {
      return "layout";
    }
    return "login";
  }

  render() {
    if (this.state.loadingUser) {
      return <Splash />;
    }
    return (
      <Provider store={Store}>
        <NavProvider context={navContext}>
          <StatusBar barStyle="light-content" />
          <StackNav
            id="root"
            navigatorUID="root"
            initialRoute={Router.getRoute(this._getInitialRoute())}
          />
        </NavProvider>
      </Provider>
    );
  }
}
