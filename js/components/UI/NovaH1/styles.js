import { StyleSheet } from "react-native";
import { typography } from "../../../config/styles";
const { fontMain } = typography;

export const styles = StyleSheet.create({
  h1: {
    textAlign: "center",
    fontFamily: fontMain,
    fontSize: 32,
    marginTop: 16,
    fontWeight: "bold"
  }
});
