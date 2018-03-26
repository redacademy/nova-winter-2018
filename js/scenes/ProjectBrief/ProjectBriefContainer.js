

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

    this.props.dispatch(getProjectDeliverables(this.props.route.params.props.company, this.props.route.params.props.id));
    this.props.dispatch(getCompanyProjects(this.props.route.params.props.company, this.props.route.params.props.id));
    this.props.dispatch(getCompany(this.props.route.params.props.company))
  }
  render() {
    return <ProjectBrief brief={this.props.projectBrief}
      deliverables={this.props.projectDeliverables}
      title={this.props.projectName}
      logo={this.props.companyLogo}
      dueDate={this.props.dueDate}
      image={this.props.image}
      hours={this.props.hours}
      success={this.props.route.params.props} />;
  }
}
const mapStateToProps = state => ({
  projectName: state.company.projects.title,
  projectBrief: state.company.projects.brief,
  projectDeliverables: state.company.deliverables,
  companyLogo: state.company.companyInfo.logo,
  dueDate: state.company.projects.dueDate,
  image: state.company.projects.image,
  hours: state.company.projects.hoursAllowed,


});
ProjectBriefContainer.propTypes = {
  projectName: PropTypes.string,
  projectBrief: PropTypes.string,
  projectDeliverables: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  companyLogo: PropTypes.string,
  dueDate: PropTypes.string,
  image: PropTypes.string,
  hours: PropTypes.string,

  route: PropTypes.object.isRequired,


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
