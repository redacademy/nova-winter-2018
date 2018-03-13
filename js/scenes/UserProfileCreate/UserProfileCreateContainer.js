// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885491

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";

class UserProfileCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserProfileCreate"
    }
  };

  render() {
    return <UserProfileCreate />;
  }
}

// UserProfileCreateContainer.propTypes = {};

export default UserProfileCreateContainer;
