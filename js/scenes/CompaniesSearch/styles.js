import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");
const logoDimension = width / 3;

export const styles = StyleSheet.create({
  logo: { width: logoDimension, height: logoDimension },
  searchInputContainer: {
    width: width,
    marginTop: 10,
    padding: 20
  },
  filterText: {
    paddingHorizontal: 10,
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: 15
  },
  filterBox: {
    backgroundColor: colors.mediumGrey,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 10,
    minWidth: 80
  },
  filterBoxText: {
    fontFamily: typography.fontMainLight,
    color: colors.darkGrey
  },
  searchBar: {
    backgroundColor: colors.mediumGrey,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  companyListContainer: { height: width, marginTop: 20 },
  container: {
    flex: 1,
    alignItems: "center"
  },
  horizontalRule: {
    width: 380,
    height: 2,
    backgroundColor: colors.mediumGrey,
    marginVertical: 20
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
