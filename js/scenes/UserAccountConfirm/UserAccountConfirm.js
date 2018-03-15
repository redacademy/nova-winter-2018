import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const UserAccountConfirm = () => (
  <View>
    <NovaH1 color={red} title="Account Created" />
    <NovaButton title="CREATE PROFILE" color="black" onPress={null} />
  </View>
);

export default UserAccountConfirm;
