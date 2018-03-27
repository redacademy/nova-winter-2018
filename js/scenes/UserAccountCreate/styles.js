import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, nearBlack } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black
  },
  input: {
    height: 45,
    width: 250,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginTop: 10,
    color: nearBlack,
    paddingLeft: 10,
    fontFamily: fontMain,
    borderRadius: 3
  },
  inputLast: {
    height: 45,
    width: 250,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginTop: 10,
    color: nearBlack,
    paddingLeft: 10,
    fontFamily: fontMain,
    borderRadius: 3,
    marginBottom: 10
  },
  inputError: {
    marginTop: 5,
    color: colors.red,
    fontFamily: typography.fontMainLight
  }
});
