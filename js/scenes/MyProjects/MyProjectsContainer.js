import React, { Component } from "react";
import PropTypes from "prop-types";
import MyProjects from "./MyProjects";
import { getMyProjects } from "../../redux/modules/userReducer";
import { connect } from "react-redux";

class MyProjectsContainer extends Component {
  static route = {
    navigationBar: {
      title: "My Projects"
    }
  };

  componentDidMount() {
    this.props.dispatch(getMyProjects(this.props.userID));
  }

  render() {
    const { projects } = this.props;
    console.log(projects);
    return <MyProjects myProjects={projects} />;
  }
}

MyProjectsContainer.propTypes = {
  userID: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    userID: state.auth.userId,
    projects: state.user.userProjects
  };
};

export default connect(mapStateToProps)(MyProjectsContainer);
