import React from "react";
import { View } from "react-native";

import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:

import NovaH2 from "../../components/UI/NovaH2";

const ProjectBrief = () => (
  <View>
    <NovaH2 color={red} title="Project Title" />
  </View>
);

export default ProjectBrief;
