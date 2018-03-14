const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


// TODO - FILL IN API INFO


firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});



// Add to database function. Targetcollection is a string, either:
// users.[idHash].field
// companys.[idHash].field
// companys.[idHash].projects.[project1,2,3].field
// companys.[idHash].projects.[project1,2,3].questions.[question1,2,3].field

function addToDB(targetCollection, toAdd) {

db.collection(targetCollection).add({toAdd
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}


// Get field from database function. Targetcollection is a string, either:
// users.[idHash].field
// companys.[idHash].field
// companys.[idHash].projects.[project1,2,3].field
// companys.[idHash].projects.[project1,2,3].questions.[question1,2,3].field

function getFromDB(targetCollection, toGet) {

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});