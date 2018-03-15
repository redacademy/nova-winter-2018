import { StyleSheet } from "react-native";
import { typography } from "../../../config/styles";
const { fontMain } = typography;

export const styles = StyleSheet.create({
  novaButtonOuterWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  novaButtonTouchable: {
    width: 192,
    height: 48,
    borderRadius: 4
  },
  novaButtonInnerWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  novaButtonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: fontMain
  }
});
