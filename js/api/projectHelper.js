import { database } from "./firebase";

export function writeProjectOutOfTime(userID, project) {
  database.doc("users/" + userID + "/projects/" + project).set({
    outoftime: true,
    completed: true
  });
}
export function writeProjectPassed(userID, project) {
  database.doc("users/" + userID + "/projects/" + project).set({
    passed: true
  });
}
export function writeProjectFailed(userID, project) {
  database.doc("users/" + userID + "/projects/" + project).set({
    passed: true
  });
}
