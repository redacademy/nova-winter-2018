import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserAccountCreate from "./UserAccountCreate";
import { createUser } from "../../redux/modules/auth";

class UserAccountCreateContainer extends Component {
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
    return <UserAccountCreate />;
  }
}

const mapStateToProps = state => {
  return state;
};

UserAccountCreateContainer.propTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(UserAccountCreateContainer);
