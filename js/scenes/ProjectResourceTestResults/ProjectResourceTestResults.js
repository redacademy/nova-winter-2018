import React from "react";
import { View } from "react-native";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const ProjectResourceTestResults = () => (
  <View>
    <NovaH1 title="Test Results" color={red} />
    <NovaButton title="CONTINUE" color={red} onPress={null} />
  </View>
);

// ProjectResourceTestResults.propTypes = {};

export default ProjectResourceTestResults;
