import { database } from "./firebase";

export function writeProjectPassed(company, project, userEmail) {
  database
    .doc(
      "companys/" +
        company +
        "/" +
        project +
        "/submissions/" +
        "users/" +
        userEmail
    )
    .set(
      {
        passed: true
      },
      { merge: true }
    );
}
export function writeProjectOutOfTime(company, project, userEmail) {
  database
    .doc(
      "companys/" +
        company +
        "/" +
        project +
        "/submissions/" +
        "users/" +
        userEmail
    )
    .set(
      {
        outoftime: true,
        passed: false
      },
      { merge: true }
    );
}
export function writeProjectFailed(company, project, userEmail) {
  database
    .doc(
      "companys/" +
        company +
        "/" +
        project +
        "/submissions/" +
        "users/" +
        userEmail
    )
    .set(
      {
        passed: false
      },
      { merge: true }
    );
}
export function writeProjectToDatabase(company, project, userEmail, text) {
  database
    .doc(
      "companys/" +
        company +
        "/projects/" +
        project +
        "/submissions/" +
        userEmail
    )
    .set(
      {
        submission: text
      },
      { merge: true }
    );
}
