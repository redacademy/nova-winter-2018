import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

import { colors } from "../../config/styles";
const { green, red } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaHR from "../../components/UI/NovaHR";
import NovaImperative from "../../components/UI/NovaImperative";

const UserAccountCreate = ({
  email,
  password,
  confirmPassword,
  handleChangeEmail,
  handleChangePassword,
  handleChangeConfirmPassword,
  handleSubmit
}) => (
  <View>
    <NovaImperative color="black" title="Create An Account" />
    <NovaHR color={green} />
    <TextInput
      placeholder="Email"
      autoCapitalize="none"
      value={email}
      onChange={e => {
        handleChangeEmail(e.nativeEvent.text);
      }}
    />
    <TextInput
      placeholder="Password"
      value={password}
      autoCapitalize="none"
      onChange={e => {
        handleChangePassword(e.nativeEvent.text);
      }}
    />
    <TextInput
      placeholder="Confirm Password"
      autoCapitalize="none"
      value={confirmPassword}
      onChange={e => {
        handleChangeConfirmPassword(e.nativeEvent.text);
      }}
    />
    <NovaButton
      title="CREATE"
      color={red}
      onPressParams={{ email, password }}
      onPressFunc={handleSubmit}
    />
  </View>
);

UserAccountCreate.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeConfirmPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default UserAccountCreate;
