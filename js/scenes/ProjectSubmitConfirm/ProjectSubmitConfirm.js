import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";

const ProjectSubmitConfirm = () => (
  <View>
    <NovaH1 color={red} title="Congratulations" />
    <Text>
      {
        "Your project has been submitted to THE COMPANY's department on DATE/MOMENT for review."
      }
    </Text>
    <NovaButton title="CONTINUE" color={red} onPress={null} />
  </View>
);

export default ProjectSubmitConfirm;
