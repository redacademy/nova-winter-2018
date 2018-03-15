// https://projects.invisionapp.com/d/main/default/#/console/13659608/284837902/preview#project_console

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
