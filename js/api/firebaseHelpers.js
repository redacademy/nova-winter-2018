import { database } from "./firebase.js";

export const testGetUser = hash =>
  database
    .collection("users")
    .doc(hash)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let testData = doc.data();
        console.log("!! Document data:", testData);
        return testData;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
