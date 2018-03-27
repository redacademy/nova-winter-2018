import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");
const logoDimension = width / 3;

export const styles = StyleSheet.create({
  logo: { width: logoDimension, height: logoDimension },
  searchInputContainer: {
    backgroundColor: "white",
    width: width,
    padding: 20
  },
  filterText: {
    paddingHorizontal: 10,
    marginBottom: 5,
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: 15
  },
  filterBox: {
    backgroundColor: colors.mediumGrey,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: 95
  },
  filterBoxText: {
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    color: colors.darkGrey
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.mediumGrey,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10
  },
  searchIcon: {
    color: colors.darkGrey
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  companyListContainer: { height: width },
  container: {
    flex: 1,
    alignItems: "center"
  },
  paginationText: {
    fontFamily: typography.fontMainLight,
    color: colors.darkGrey
  },
  paginationContainer: {
    flex: 0,
    alignItems: "center",
    margin: 10
  }
});
