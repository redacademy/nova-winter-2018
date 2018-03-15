import React from "react";
import { View } from "react-native";
// import PropTypes from "prop-types";
// import { styles } from "./styles";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:

import NovaH2 from "../../components/UI/NovaH2";

const ProjectBrief = () => (
  <View>
    <NovaH2 color={red} title="Project Title" />
  </View>
);

// ProjectBrief.propTypes = {};

export default ProjectBrief;
