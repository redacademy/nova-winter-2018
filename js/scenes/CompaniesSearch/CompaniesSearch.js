import React from "react";
import {
  FlatList,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import PropTypes from "prop-types";

import NovaHr from "../../components/UI/NovaHR";
import { goToScene } from "../../navigation/NavigationHelper";
import { colors } from "../../config/styles";
import { styles } from "./styles";

const CompaniesSearch = ({
  activeFilter,
  handleChange,
  searchResults,
  currentNavigatorUID
}) => (
  <View style={styles.container}>
    <View style={styles.searchInputContainer}>
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        style={styles.searchBar}
        onChange={e => {
          handleChange(e.nativeEvent.text);
        }}
      />
      <Text style={styles.filterText}>Filters</Text>
      <TouchableHighlight
        underlayColor={colors.mediumGrey}
        onPress={() => {
          goToScene(currentNavigatorUID, "companiesFilter");
        }}
      >
        <View style={styles.filterBox}>
          <Text style={styles.filterBoxText}>
            {activeFilter ? activeFilter : "None"}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.horizontalRule} />
    <View style={styles.companyListContainer}>
      <FlatList
        data={searchResults}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() =>
              goToScene(currentNavigatorUID, "companyProfile", item.id)
            }
          >
            <Image style={styles.logo} source={{ uri: item.logo }} />
          </TouchableHighlight>
        )}
      />
    </View>
  </View>
);

CompaniesSearch.propTypes = {
  currentNavigatorUID: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array
};

CompaniesSearch.defaultProps = {
  searchResults: []
};

export default CompaniesSearch;
