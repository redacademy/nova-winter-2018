import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { NovaH1, NovaButton } from "../../components/NovaUI";
import { colors } from "../../config/styles";
const { green, red } = colors;

const UserAccountConfirm = () => (
  <View>
    <NovaH1 color={red} title="Account Created" />
    <NovaButton title="CREATE PROFILE" color="black" onPress={null} />
  </View>
);

// UserAccountConfirm.propTypes = {};

export default UserAccountConfirm;
