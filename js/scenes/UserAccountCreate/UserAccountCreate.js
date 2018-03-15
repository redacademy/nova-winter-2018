import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { NovaImperative, NovaButton, NovaHR } from "../../components/NovaUI";
import { colors } from "../../config/styles";
const { green, red } = colors;

const UserAccountCreate = () => (
  <View>
    <NovaImperative color="black" title="Create An Account" />
    <NovaHR color={green} />
    <NovaButton title="CREATE" color={red} onPress={null} />
  </View>
);

// UserAccountCreate.propTypes = {};

export default UserAccountCreate;
