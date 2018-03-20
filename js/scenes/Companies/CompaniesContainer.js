import React, { Component } from "react";
import PropTypes from "prop-types";
import Companies from "./Companies";

import { connect } from "react-redux";
import { getAllCompanys } from "../../redux/modules/companyReducer";

class CompaniesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Companies"
    }
  };

  componentDidMount() {
    this.props.dispatch(getAllCompanys());
  }

  render() {
    const { companyList } = this.props;
    return <Companies companyList={companyList} />;
  }
}

CompaniesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  companyList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    companyList: state.company.companyList
  };
};

export default connect(mapStateToProps)(CompaniesContainer);
