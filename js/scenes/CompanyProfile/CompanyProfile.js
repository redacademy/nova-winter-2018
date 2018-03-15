import React from "react";
import { View } from "react-native";

import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";

const CompanyProfile = () => (
  <View>
    <NovaH2 color={red} title="Company Name" />
  </View>
);

export default CompanyProfile;
