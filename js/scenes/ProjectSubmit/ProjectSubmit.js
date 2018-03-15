import React from "react";
import { View } from "react-native";

import { colors } from "../../config/styles";
const { green, red } = colors;

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton";

const ProjectSubmit = () => (
  <View>
    <NovaH2 color={red} title="Time Remaining" />
    <NovaButton title="FINISH" color={green} onPress={null} />
  </View>
);

export default ProjectSubmit;
