import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, white } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black,
    paddingTop: 100
  },
  message: {
    margin: 20,
    color: white,
    fontFamily: fontMain,
    fontSize: 20,
    textAlign: "center"
  },
  score: {
    margin: 10,
    color: white,
    fontFamily: fontMain,
    fontSize: 40
  }
});
