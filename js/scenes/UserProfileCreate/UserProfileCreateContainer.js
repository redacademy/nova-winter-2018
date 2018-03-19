import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;
import { connect } from "react-redux";
class UserProfileCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return <UserProfileCreate userID={this.props.userID} />;
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userId
});

export default connect(mapStateToProps)(UserProfileCreateContainer);
