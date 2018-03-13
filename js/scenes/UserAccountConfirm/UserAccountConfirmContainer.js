// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885490

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserAccountConfirm from "./UserAccountConfirm";

class UserAccountConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserAccountConfirm"
    }
  };

  render() {
    return <UserAccountConfirm />;
  }
}

// UserAccountConfirmContainer.propTypes = {};

export default UserAccountConfirmContainer;
