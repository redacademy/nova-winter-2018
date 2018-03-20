import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";

// import Nova UI components:
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";
import { styles } from "./styles";

const { red } = colors;
const ProjectSubmitConfirm = () => (
  <View style={styles.container}>
    <NovaH1 color={red} title="Congratulations" />
    <Text style={styles.message}>
      {
        "Your project has been submitted to THE COMPANY's department on DATE/MOMENT for review."
      }
    </Text>
    <NovaButton title="CONTINUE" color={red} onPress={null} />
  </View>
);

export default ProjectSubmitConfirm;
