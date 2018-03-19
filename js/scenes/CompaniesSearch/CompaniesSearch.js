import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

// import Nova UI components:

import NovaImperative from "../../components/UI/NovaImperative";

const CompaniesSearch = () => (
  <View>
    <NovaImperative
      color="black"
      title="Search for Your Industry of Interest"
      style={styles.imperative}
    />
  </View>
);

export default CompaniesSearch;
