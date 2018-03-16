import React from "react";
import { Text, View } from "react-native";

import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";

const ProjectResources = () => (
  <View>
    <NovaH2 color={red} title="Video Lessons" />
    <Text>
      Carefully watch each video in sequence to prepare for your test.
    </Text>
  </View>
);

export default ProjectResources;
