// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885486

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserAccountCreate from "./UserAccountCreate";

class UserAccountCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserAccountCreate"
    }
  };

  render() {
    return <UserAccountCreate />;
  }
}

// UserAccountCreateContainer.propTypes = {};

export default UserAccountCreateContainer;
