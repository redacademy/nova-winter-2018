const firebase = require("firebase");
require("firebase/firestore");
var firestoreDB = firebase.firestore();

const usersRef = userID => database.doc("users/" + userID);
const companysRef = database.doc("companys");
const projectsRef = companyID =>
  database.doc("companys/" + companyID + "/projects");
const questionsRef = (companyID, projectNumber, questionNumber) =>
  database.doc(
    "companys/" +
      companyID +
      "/projects/" +
      projectNumber +
      "/questions/" +
      questionNumber
  );

export const testGetUser = hash =>
  firestoreDB
    .collection("users")
    .doc(hash)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let testData = doc.data();
        return testData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

export const testGetCompany = hash =>
  firestoreDB
    .collection("companys")
    .doc(hash)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let testData = doc.data();
        return testData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
