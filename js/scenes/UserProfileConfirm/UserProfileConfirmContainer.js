// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885489

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileConfirm from "./UserProfileConfirm";

class UserProfileConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserProfileConfirm"
    }
  };

  render() {
    return <UserProfileConfirm />;
  }
}

// UserProfileConfirmContainer.propTypes = {};

export default UserProfileConfirmContainer;
