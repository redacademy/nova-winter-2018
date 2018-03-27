import { StyleSheet } from "react-native";
import { colors } from "../../config/styles.js";
const { red, mediumGrey } = colors;

export const styles = StyleSheet.create({
  copy: {
    marginLeft: 12,
    marginRight: 12,
    textAlign: "center"
  },

  videoContainer: {
    width: 300,
    height: 225,
    marginLeft: "auto",
    marginRight: "auto"
  },

  lockedVideoPlaceholder: {
    width: 300,
    height: 225
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center"
  },

  resourceTitle: {
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 12,
    color: red,
    fontWeight: "bold"
  }
});
