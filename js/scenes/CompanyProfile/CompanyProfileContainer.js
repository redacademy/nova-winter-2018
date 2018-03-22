import React, { Component } from "react";
import PropTypes from "prop-types";
import CompanyProfile from "./CompanyProfile";

import { connect } from "react-redux";
import {
  getCompany,
  getAllCompanyProjects
} from "../../redux/modules/companyReducer";

class CompanyProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "Company"
    }
  };

  componentDidMount() {
    this.props.dispatch(getCompany(this.props.route.params.props));
    this.props.dispatch(getAllCompanyProjects(this.props.route.params.props));
  }

  render() {
    const { companyInfo, projects } = this.props;
    return <CompanyProfile companyInfo={companyInfo} projects={projects} />;
  }
}

CompanyProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  companyInfo: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    companyInfo: state.company.companyInfo,
    projects: state.company.projects
  };
};

export default connect(mapStateToProps)(CompanyProfileContainer);
