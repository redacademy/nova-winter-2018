import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red, white } = colors;
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
    marginTop: 10,
    color: nearBlack,
    paddingLeft: 10,
    fontFamily: fontMain,
    borderRadius: 3
  },
  header: { height: 50, width: 150, marginTop: 20 },
  logo: { height: 90, width: 90, marginTop: 20 },
  newuser: {
    color: white,
    fontFamily: fontMain
  }
});
