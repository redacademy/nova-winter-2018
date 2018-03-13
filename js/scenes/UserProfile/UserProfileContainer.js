// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885483

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserProfile"
    }
  };

  render() {
    return <UserProfile />;
  }
}

// UserProfileContainer.propTypes = {};

export default UserProfileContainer;
