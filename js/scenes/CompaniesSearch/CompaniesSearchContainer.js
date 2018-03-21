import React, { Component } from "react";
import { connect } from "react-redux";
import CompaniesSearch from "./CompaniesSearch";
import PropTypes from "prop-types";
import {
  executeCompanySearch,
  setSearchQuery
} from "../../redux/modules/companyReducer";

class CompaniesSearchContainer extends Component {
  static route = {
    navigationBar: {
      title: "Filter"
    }
  };

  _handleChange = async value => {
    await this.props.dispatch(setSearchQuery(value));
    this.props.dispatch(executeCompanySearch(this.props.searchQuery));
  };

  render() {
    return (
      <CompaniesSearch
        searchQuery={this.props.searchQuery}
        searchResults={this.props.searchResults}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.company.searchQuery,
  searchResults: state.company.companySearchResults
});

CompaniesSearchContainer.defaultProps = {
  searchResults: []
};

CompaniesSearchContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchResults: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CompaniesSearchContainer);
