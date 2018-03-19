import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, tintBlack, green, red, white } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    backgroundColor: red
  },
  message: {
    margin: 30,
    color: white,
    fontFamily: fontMain,
    fontSize: 18
  }
});
