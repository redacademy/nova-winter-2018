import React from "react";
import { FlatList, Image, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";

const Companies = ({ companyList }) => (
  <View>
    <FlatList
      data={companyList}
      keyExtractor={item => item.name}
      numColumns={3}
      renderItem={({ item }) => (
        <Image style={styles.logo} source={{ uri: item.logo }} />
      )}
    />
  </View>
);

Companies.propTypes = {
  companyList: PropTypes.array.isRequired
};

export default Companies;
