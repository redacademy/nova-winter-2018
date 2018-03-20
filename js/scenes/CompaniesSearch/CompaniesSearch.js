import React from "react";
import { FlatList, Image, TextInput, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";
import NovaImperative from "../../components/UI/NovaImperative";

const CompaniesSearch = ({ handleChange, searchResults }) => (
  <View>
    <NovaImperative
      color="black"
      title="Search for Your Industry of Interest"
      style={{ textAlign: "left" }}
    />
    <TextInput
      autoCapitalize="none"
      placeholder="Search"
      onChange={e => {
        handleChange(e.nativeEvent.text);
      }}
    />
    <View>
      <FlatList
        data={searchResults}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({ item }) => (
          <Image style={styles.logo} source={{ uri: item.logo }} />
        )}
      />
    </View>
  </View>
);

CompaniesSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default CompaniesSearch;
