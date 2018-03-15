import React from "react";
import { Text, View } from "react-native";
// import PropTypes from "prop-types";
// import { styles } from "./styles";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";

const ProjectConfirm = () => (
  <View>
    <NovaH1 color={red} title="Are You Ready?" />
    <Text>Make sure you are set up in an appropriate work environment</Text>
    <NovaButton title="BEGIN" color={red} onPress={null} />
  </View>
);

// ProjectConfirm.propTypes = {};

export default ProjectConfirm;
