import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  header: {
    fontFamily: fontMain,
    fontSize: 16,
    marginLeft: 15,
    paddingTop: 15,
    fontWeight: "bold"
  },
  input: {
    height: 100,
    width: 290,
    backgroundColor: mediumGrey,

    marginTop: 10,
    color: nearBlack,
    padding: 7,
    fontFamily: fontMain,
    borderRadius: 3
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginTop: 10,
    height: 17,
    width: 17,
    marginLeft: 8
  },
  global: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
