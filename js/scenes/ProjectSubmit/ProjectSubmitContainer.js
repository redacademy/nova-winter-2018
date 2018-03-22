import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectSubmit from "./ProjectSubmit";
import { connect } from "react-redux";
class ProjectSubmitContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectSubmit"
    }
  };

  render() {
    return <ProjectSubmit userID={this.props.userID} />;
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userId
});

ProjectSubmitContainer.propTypes = {
  userID: PropTypes.string
};

ProjectSubmitContainer.defaultProps = {
  userID: ""
};
export default connect(mapStateToProps)(ProjectSubmitContainer);
