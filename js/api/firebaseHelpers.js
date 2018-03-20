import { database } from "./firebase";

export function writeNewCompanyData(
  companyID,
  name,
  contact_name,
  contact_email,
  company_info,
  location
) {
  database
    .collection("companys")
    .doc(companyID)
    .set({
      name: name,
      contact_name: contact_name,
      contact_email: contact_email,
      company_info: company_info,
      location: location
    })
    .then(function() {
      console.log("Company data written!");
    });
}
export function writeNewCompanyProjects(
  companyID,
  project_name,
  deliverables,
  project_info,
  start_time,
  video1,
  video2,
  video3
) {
  database
    .collection("companys")
    .doc(companyID)
    .collection("projects")
    .set({
      project_name: project_name,
      deliverables: deliverables,
      project_info: project_info,
      start_time: start_time,
      video1: video1,
      video2: video2,
      video3: video3
    })
    .then(function() {
      console.log("Company data written!");
    });
}
export function writeNewUserData(userID, name, email) {
  database
    .collection("users")
    .doc(userID)
    .set({
      name: "Mike",
      email: "mike@mike.com"
    })
    .then(function() {
      console.log("User data written!");
    });
}
export function writeNewUserInformation(userID, bio, experience, projects) {
  database
    .collection("users")
    .doc(userID)
    .set({
      bio: bio,
      experience: experience,
      projects: projects
    })
    .then(function() {
      console.log("User info written!");
    });
}
export function writeNewUserLocation(userID, location) {
  database
    .collection("users")
    .doc(userID)
    .set({
      location: location
    })
    .then(function() {
      console.log("User location written!");
    });
}
export function writeNewUserTests(
  userID,
  currentTest,
  testStartTime,
  testScore
) {
  database
    .collection("users")
    .doc(userID)
    .set({
      currentTest: currentTest,
      testStartTime: testStartTime,
      testScore: testScore
    })
    .then(function() {
      console.log("User location written!");
    });
}
