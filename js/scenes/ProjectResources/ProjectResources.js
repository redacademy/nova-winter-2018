import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";

const ProjectResources = () => (
  <View>
    <NovaH2 color={red} title="Video Lessons" />
  </View>
);

export default ProjectResources;
