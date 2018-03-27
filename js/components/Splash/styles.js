import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  splash: { width: width, height: height, backgroundColor: colors.nearBlack }
});
