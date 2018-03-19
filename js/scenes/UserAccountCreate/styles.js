import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, tintBlack, green, red, white } = colors;
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
    color: tintBlack,
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
    color: tintBlack,
    paddingLeft: 10,
    fontFamily: fontMain,
    borderRadius: 3,
    marginBottom: 10
  }
});
