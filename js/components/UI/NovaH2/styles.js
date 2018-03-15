import { StyleSheet } from "react-native";
import { typography } from "../../../config/styles";
const { fontMain } = typography;

export const styles = StyleSheet.create({
  h2: {
    textAlign: "center",
    fontFamily: fontMain,
    fontSize: 20,
    marginTop: 16,
    fontWeight: "bold"
  }
});
