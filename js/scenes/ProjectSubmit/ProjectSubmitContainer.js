import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectSubmit from "./ProjectSubmit";
import { connect } from "react-redux";
import { getProjectDeliverables } from "../../redux/modules/companyReducer";

class ProjectSubmitContainer extends Component {
  static route = {
    navigationBar: {
      title: "Project Submission"
    }
  };

  componentDidMount = () => {
    this.props.dispatch(
      getProjectDeliverables(
        this.props.route.params.company,
        this.props.route.params.props.id
      )
    );
  };

  render() {
    return (
      <ProjectSubmit
        deliverables={this.props.deliverables}
        userID={this.props.userID}
        projectName={this.props.route.params.props.id}
        companyName={this.props.route.params.company}
        userEmail={this.props.userEmail}
      />
    );
  }
}
const mapStateToProps = state => ({
  userID: state.auth.userId,
  userEmail: state.auth.user.email,
  deliverables: state.company.deliverables
});
ProjectSubmitContainer.propTypes = {
  userID: PropTypes.string,
  params: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  deliverables: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired
};

ProjectSubmitContainer.defaultProps = {
  userID: ""
};
export default connect(mapStateToProps)(ProjectSubmitContainer);
