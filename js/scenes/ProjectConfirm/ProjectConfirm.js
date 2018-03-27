import React from "react";
import { Text, View } from "react-native";
import { buttonToScene } from "../../navigation/NavigationHelper";
import { colors } from "../../config/styles";
import { styles } from "./styles";
// import Nova UI components:
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";
const { red } = colors;
const ProjectConfirm = () => (
  <View style={styles.container}>
    <NovaH1 color={red} title="Are You Ready?" />
    <Text style={styles.message}>
      Make sure you are set up in an appropriate work environment
    </Text>
    <NovaButton
      title="BEGIN"
      color={red}
      onPressParams={{
        currentNavigatorUID: "devRoutes",
        targetScene: "projectSubmit",
        props: { success: true, id: "blockchain", company: "deloitte" }
      }}
      onPressFunc={buttonToScene}
    />
  </View>
);

export default ProjectConfirm;
