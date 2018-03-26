import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { red } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
  header: {
    fontFamily: fontMain,
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center"
  },
  header1: {
    fontFamily: fontMain,
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    color: red
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 6
  },
  deliverables: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 6,
    paddingBottom: 6,
    paddingLeft: 14,
    borderBottomColor: red,
    borderBottomWidth: 1,
    paddingRight: 14
  },
  timer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 34,
    paddingRight: 6,
    paddingLeft: 6,
    borderRadius: 2,
    backgroundColor: "lightgrey",
    margin: 12
  }
});
