import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";
import { styles } from "./styles";
// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const { white, nearBlack } = colors;
const UserProfileConfirm = ({ routeToLayout }) => (
  <View style={styles.container}>
    <NovaH1 title="Profile Created" color={white} />
    <Text style={styles.message}>{"It's time to start exploring!"}</Text>
    <NovaButton
      title="CONTINUE"
      color={nearBlack}
      onPressParams={{
        currentNavigatorUID: "root",
        targetScene: "layout"
      }}
      onPressFunc={routeToLayout}
    />
  </View>
);

export default UserProfileConfirm;
