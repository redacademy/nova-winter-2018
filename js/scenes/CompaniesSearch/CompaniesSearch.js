import React from "react";
import {
  FlatList,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

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
      <View style={styles.searchBar}>
        <Icon
          name="ios-search"
          size={16}
          style={styles.searchIcon}
          color={colors.darkGrey}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Search"
          style={{ marginLeft: 10 }}
          onChange={e => {
            handleChange(e.nativeEvent.text);
          }}
        />
      </View>
      <Text style={styles.filterText}>Filters</Text>
      <TouchableHighlight
        style={styles.filterBox}
        underlayColor={"#ddd"}
        onPress={() => {
          goToScene(currentNavigatorUID, "companiesFilter");
        }}
      >
        <Text style={styles.filterBoxText}>
          {activeFilter ? activeFilter : "None"}
        </Text>
      </TouchableHighlight>
    </View>
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
  activeFilter: PropTypes.string,
  currentNavigatorUID: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array
};

CompaniesSearch.defaultProps = {
  searchResults: []
};

export default CompaniesSearch;
