import React from "react";
import { Text, View } from "react-native";

import { colors } from "../../config/styles";
const { red } = colors;
import { styles } from "./styles";
// import Nova UI components:
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";

const ProjectConfirm = () => (
  <View style={styles.container}>
    <NovaH1 color={red} title="Are You Ready?" />
    <Text style={styles.message}>
      Make sure you are set up in an appropriate work environment
    </Text>
    <NovaButton title="BEGIN" color={red} onPress={null} />
  </View>
);

export default ProjectConfirm;
