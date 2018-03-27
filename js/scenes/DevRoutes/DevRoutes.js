import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text } from "react-native";
import { goToScene } from "../../navigation/NavigationHelper";

const DevRoutes = ({ logOut }) => (
  <ScrollView>
    <Text style={{ fontWeight: "bold", marginTop: 16 }}>Companies stack:</Text>
    <Text onPress={() => goToScene("companies", "companies")}>Companies</Text>
    <Text onPress={() => goToScene("companies", "companiesSearch")}>
      CompaniesSearch
    </Text>
    <Text onPress={() => goToScene("companies", "companyProfile", "deloitte")}>
      CompanyProfile (Deloitte)
    </Text>
    <Text onPress={() => goToScene("companies", "companyProfile", "adobe")}>
      CompanyProfile (Adobe)
    </Text>
    <Text onPress={() => goToScene("companies", "projectBrief")}>
      ProjectBrief
    </Text>
    <Text onPress={() => goToScene("companies", "projectConfirm")}>
      ProjectConfirm
    </Text>

    <Text
      onPress={() =>
        goToScene("companies", "projectResourceTest", {
          company: "adobe",
          project: "indesign"
        })
      }
    >
      ProjectResourceTest (Adobe InDesign project)
    </Text>

    <Text
      onPress={() =>
        goToScene("companies", "projectResourceTest", {
          company: "deloitte",
          project: "blockchain"
        })
      }
    >
      ProjectResourceTest (Deloitte blockchain project)
    </Text>

    <Text onPress={() => goToScene("companies", "projectResourceTestResults")}>
      ProjectResourceTestResults
    </Text>
    <Text
      onPress={() =>
        goToScene("companies", "projectResources", {
          companyID: "deloitte",
          projectID: "blockchain"
        })
      }
    >
      ProjectResources (Deloitte blockchain project)
    </Text>
    <Text onPress={() => goToScene("companies", "projectSubmit")}>
      ProjectSubmit
    </Text>
    <Text onPress={() => goToScene("companies", "projectSubmitConfirm")}>
      ProjectSubmitConfirm
    </Text>

    <Text style={{ fontWeight: "bold", marginTop: 16 }}>Root Stack:</Text>
    <Text onPress={() => goToScene("root", "login")}>Login</Text>

    <Text onPress={() => goToScene("root", "userAccountConfirm")}>
      UserAccountConfirm
    </Text>

    <Text onPress={() => goToScene("root", "userAccountCreate")}>
      UserAccountCreate
    </Text>

    <Text onPress={() => goToScene("root", "userProfileConfirm")}>
      UserProfileConfirm
    </Text>

    <Text onPress={() => goToScene("root", "userProfileCreate")}>
      UserProfileCreate
    </Text>

    <Text style={{ fontWeight: "bold", marginTop: 16 }}>
      User Profile Stack?:
    </Text>
    <Text onPress={() => goToScene("userProfile", "userProfileEdit")}>
      UserProfileEdit
    </Text>
    <Text
      onPress={() => {
        logOut();
      }}
    >
      Logout
    </Text>
  </ScrollView>
);

DevRoutes.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default DevRoutes;
