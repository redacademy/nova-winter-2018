import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red, white } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black,
    paddingTop: 90
  },
  message: {
    margin: 30,
    color: white,
    fontFamily: fontMain,
    fontSize: 18
  }
});
