import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
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
    width: 200,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginTop: 20,
    color: nearBlack,
    paddingLeft: 10,
    fontFamily: fontMain,
    borderRadius: 3
  }
});
