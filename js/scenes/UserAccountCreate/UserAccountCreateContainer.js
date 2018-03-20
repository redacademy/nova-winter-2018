import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserAccountCreate from "./UserAccountCreate";
import {
  createUser,
  setEmailState,
  setPasswordState,
  setNameState,
  setConfirmPasswordState
} from "../../redux/modules/auth";

import { colors } from "../../config/styles";
const { nearBlack } = colors;

import { typography } from "../../config/styles";
const { fontMain } = typography;

class UserAccountCreateContainer extends Component {
  _handleChangeEmail = value => {
    this.props.dispatch(setEmailState(value));
  };

  _handleChangePassword = value => {
    this.props.dispatch(setPasswordState(value));
  };

  _handleChangeName = value => {
    this.props.dispatch(setNameState(value));
  };

  _handleChangeConfirmPassword = value => {
    this.props.dispatch(setConfirmPasswordState(value));
  };

  _handleSubmit = ({ email, password }) => {
    if (
      this.props.email &&
      this.props.password &&
      this.props.password === this.props.confirmPassword
    ) {
      this.props.dispatch(createUser({ email, password }));
    }
  };
  static route = {
    navigationBar: {
      title: "Sign Up",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return (
      <UserAccountCreate
        handleChangeEmail={this._handleChangeEmail}
        handleChangePassword={this._handleChangePassword}
        handleChangeName={this._handleChangeName}
        handleChangeConfirmPassword={this._handleChangeConfirmPassword}
        handleSubmit={this._handleSubmit}
        password={this.props.password}
        email={this.props.email}
        confirmPassword={this.props.confirmPassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword
});

UserAccountCreateContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(UserAccountCreateContainer);
