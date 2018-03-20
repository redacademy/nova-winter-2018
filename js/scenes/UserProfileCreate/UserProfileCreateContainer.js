import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";
import { connect } from "react-redux";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

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

UserProfileCreate.propTypes = {
  userID: PropTypes.string
};
export default connect(mapStateToProps)(UserProfileCreateContainer);
