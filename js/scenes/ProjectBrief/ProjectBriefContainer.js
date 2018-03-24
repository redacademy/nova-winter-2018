

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectBrief from "./ProjectBrief";
import { connect } from "react-redux";
import { getProjectDeliverables, getCompanyProjects, getCompany } from "../../redux/modules/companyReducer";
class ProjectBriefContainer extends Component {
  static route = {
    navigationBar: {
      title: "Brief"
    }
  };
  componentDidMount() {
    this.props.dispatch(getProjectDeliverables("deloitte", "blockchain"));
    this.props.dispatch(getCompanyProjects("deloitte", "blockchain"));
    this.props.dispatch(getCompany("deloitte"))
  }
  render() {
    return <ProjectBrief brief={this.props.projectBrief}
      deliverables={this.props.projectDeliverables}
      title={this.props.projectName}
      logo={this.props.companyLogo}
      dueDate={this.props.dueDate}
      image={this.props.image}
      hours={this.props.hours} />;
  }
}
const mapStateToProps = state => ({
  projectName: state.company.projects.title,
  projectBrief: state.company.projects.brief,
  projectDeliverables: state.company.deliverables,
  companyLogo: state.company.companyInfo.logo,
  dueDate: state.company.projects.dueDate,
  image: state.company.projects.image,
  hours: state.company.projects.hoursAllowed
});
ProjectBriefContainer.propTypes = {
  projectName: PropTypes.string,
  projectBrief: PropTypes.string,
  projectDeliverables: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  companyLogo: PropTypes.string,
  dueDate: PropTypes.string,
  image: PropTypes.string,
  hours: PropTypes.string
};
ProjectBriefContainer.defaultProps = {
  projectName: "",
  projectBrief: "",
  projectDeliverables: [],
  companyLogo: "",
  dueDate: "",
  image: "",
  hours: "",
};

export default connect(mapStateToProps)(ProjectBriefContainer);
