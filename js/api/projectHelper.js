import { database } from "./firebase";

export function writeProjectOutOfTime(userID, project) {
  database
    .doc("users/" + userID + "/projects/" + project)
    .set({
      outoftime: true,
      completed: true
    })
    .then(function() {
      console.log("Company data written!");
    });
}
export function writeProjectPassed(userID, project) {
  database
    .doc("users/" + userID + "/projects/" + project)
    .set({
      passed: true
    })
    .then(function() {
      console.log("Company data written!");
    });
}
export function writeProjectFailed(userID, project) {
  database
    .doc("users/" + userID + "/projects/" + project)
    .set({
      passed: true
    })
    .then(function() {
      console.log("Company data written!");
    });
}
