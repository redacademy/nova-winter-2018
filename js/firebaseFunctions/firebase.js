import firebase from "firebase";
import "firebase/firestore";

import { database } from "../api/firebase";

// const usersRef = userID => database.doc("users/" + userID);
// const companysRef = database.doc("companys");
// const projectsRef = companyID =>
//   database.doc("companys/" + companyID + "/projects");
// const questionsRef = (companyID, projectNumber, questionNumber) =>
//   database.doc(
//     "companys/" +
//       companyID +
//       "/projects/" +
//       projectNumber +
//       "/questions/" +
//       questionNumber
//   );

// export const getUser = userID =>
//   database
//     .collection("users")
//     .doc(userID)
//     .get()
//     .then(function(doc) {
//       if (doc.exists) {

//         let userInfo= doc.data();

//         this.props.dispatch(getUserInfo(userInfo));
//         console.log("state updated");

//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch(function(error) {
//       console.log("Error getting document:", error);
//     });

export const getCompany = companyID =>
  database
    .collection("companys")
    .doc(companyID)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let getData = doc.data();
        console.log("Company: ", getData);
        return getData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

export const getCompanyProjects = (companyID, projectNumber) =>
  database
    .doc("companys/" + companyID + "/projects/" + projectNumber)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let getData = doc.data();
        console.log("Projects: ", getData);
        return getData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

export const getCompanyQuestions = (companyID, projectNumber, questionNumber) =>
  database
    .doc(
      "companys/" +
        companyID +
        "/projects/" +
        projectNumber +
        "/questions/" +
        questionNumber
    )
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let getData = doc.data();
        console.log("Questions: ", getData);
        return getData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
