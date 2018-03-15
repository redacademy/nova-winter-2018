import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { NovaH2 } from "../../components/NovaUI";
import { colors } from "../../config/styles";
const { green, red } = colors;

const ProjectResources = () => (
  <View>
    <NovaH2 color={red} title="Video Lessons" />
  </View>
);

// ProjectResources.propTypes = {};

export default ProjectResources;
