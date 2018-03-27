import React from "react";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { colors } from "../../config/styles";

import NovaButton from "../../components/UI/NovaButton";
import NovaHR from "../../components/UI/NovaHR";
import NovaImperative from "../../components/UI/NovaImperative";
const { green, red } = colors;
const UserAccountCreate = ({
  email,
  password,
  confirmPassword,
  handleChangeEmail,
  handleChangePassword,
  handleChangeConfirmPassword,
  handleSubmit,
  renderStyleConfirmPassword,
  renderStylePassword,
  userError
}) => (
  <View style={styles.container}>
    <NovaImperative color="white" title="Create An Account" />
    <NovaHR color={green} />
    <TextInput
      placeholder="Email"
      autoCapitalize="none"
      value={email}
      onChange={e => {
        handleChangeEmail(e.nativeEvent.text);
      }}
      style={styles.input}
    />
    <TextInput
      placeholder="Password"
      value={password}
      secureTextEntry
      autoCapitalize="none"
      onChange={e => {
        handleChangePassword(e.nativeEvent.text);
      }}
      style={[styles.input, renderStylePassword()]}
    />
    {password.length < 6 && password.length > 0 ? (
      <Text style={styles.inputError}>Password must at least 6 characters</Text>
    ) : (
      <View />
    )}
    <TextInput
      placeholder="Confirm Password"
      autoCapitalize="none"
      secureTextEntry
      value={confirmPassword}
      style={[styles.input, renderStyleConfirmPassword()]}
      onChange={e => {
        handleChangeConfirmPassword(e.nativeEvent.text);
      }}
    />
    {confirmPassword.length > 0 && password !== confirmPassword ? (
      <Text style={styles.inputError}>Passwords do not match</Text>
    ) : (
      <View />
    )}
    {userError ? (
      <Text style={styles.inputError}>{userError.message}</Text>
    ) : (
      <View />
    )}
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
