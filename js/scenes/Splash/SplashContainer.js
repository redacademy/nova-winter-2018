// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setAuthenticationStatus,
  setUserState,
  userLoading
} from "../../redux/modules/auth";
import Splash from "./Splash";

class SplashContainer extends Component {
  static route = {
    navigationBar: {
      title: "Splash"
    }
  };

  componentDidMount() {
    this.props.dispatch(userLoading(true));
    AsyncStorage.getItem("USER", (err, result) => {
      if (result) {
        this.props.dispatch(setUserState(JSON.parse(result)));
        this.props.dispatch(setAuthenticationStatus(true));
      }
      this.props.dispatch(userLoading(false));
    });
  }

  render() {
    return <Splash />;
  }
}

SplashContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(SplashContainer);
