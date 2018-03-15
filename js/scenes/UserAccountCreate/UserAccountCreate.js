import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { colors } from "../../config/styles";
const { green, red } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaHR from "../../components/UI/NovaHR";
import NovaImperative from "../../components/UI/NovaImperative";

const UserAccountCreate = () => (
  <View>
    <NovaImperative color="black" title="Create An Account" />
    <NovaHR color={green} />
    <NovaButton title="CREATE" color={red} onPress={null} />
  </View>
);

export default UserAccountCreate;
