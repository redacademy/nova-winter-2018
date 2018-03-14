import React from "react";
import { View, TextInput } from "react-native";

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
    <TextInput placeholder="Email" autoCapitalize="none" onChange={e => {}} />
    <TextInput
      placeholder="Password"
      autoCapitalize="none"
      onChange={() => {}}
    />
    <NovaButton title="CREATE" color={red} onPress={() => {}} />
  </View>
);

export default UserAccountCreate;
