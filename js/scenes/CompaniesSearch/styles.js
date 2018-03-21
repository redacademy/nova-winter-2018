import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const logoDimension = width / 3;

export const styles = StyleSheet.create({
  logo: { width: logoDimension, height: logoDimension }
});
