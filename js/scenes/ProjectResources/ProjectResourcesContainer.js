import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResources from "./ProjectResources";

// import Redux
import { connect } from "react-redux";
import { getProjectResources } from "../../redux/modules/companyReducer";
import { getResourceProgress } from "../../redux/modules/userReducer";

class ProjectResourcesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Resources"
    }
  };

  componentDidMount() {
    const { companyID, projectID } = this.props.route.params.props;
    const { userID } = this.props;
    this.props.dispatch(getProjectResources(companyID, projectID));
    this.props.dispatch(getResourceProgress(userID, companyID, projectID));
  }

  render() {
    const { companyID, projectID } = this.props.route.params.props;
    const { userID, resources, progress, dispatch } = this.props;
    return (
      <ProjectResources
        userID={userID}
        resources={resources}
        companyID={companyID}
        projectID={projectID}
        progress={progress}
        dispatch={dispatch}
      />
    );
  }
}

ProjectResourcesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  resources: PropTypes.array.isRequired,
  progress: PropTypes.number
};

ProjectResourcesContainer.defaultProps = {
  companyID: "",
  projectID: "",
  progress: 0
};

const mapStateToProps = state => {
  return {
    userID: state.auth.userId,
    resources: state.company.resources,
    progress: state.user.resourceProgress
  };
};

export default connect(mapStateToProps)(ProjectResourcesContainer);
