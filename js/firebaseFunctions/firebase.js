const firebase = require('firebase');
require('firebase/firestore');
import { FIREBASE_API_KEY } from '../config/constants.js';
import { FIREBASE_AUTH_DOMAIN } from '../config/constants.js';
import { FIREBASE_DATABASE_URL } from '../config/constants.js';
import { FIREBASE_PROJECT_ID } from '../config/constants.js';
import { FIREBASE_STORAGE_BUCKET } from '../config/constants.js';

firebase.initializeApp({
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID
});

var firestoreDB = firebase.firestore();

const testGetUser = hash =>
	firestoreDB
		.collection('users')
		.doc(hash)
		.get()
		.then(function(doc) {
			if (doc.exists) {
				let testData = doc.data();
				console.log('!! Document data:', testData.bio);
				return testData;
			} else {
				console.log('No such document!');
			}
		})
		.catch(function(error) {
			console.log('Error getting document:', error);
		});

testGetUser('WJTvKQHAwP9frwE46woO');

// Add to database function. Targetcollection is a string, either:
// users.[idHash].field
// companys.[idHash].field
// companys.[idHash].projects.[project1,2,3].field
// companys.[idHash].projects.[project1,2,3].questions.[question1,2,3].field

function addToDB(targetCollection, toAdd) {
	firestoreDB
		.collection(targetCollection)
		.add({
			toAdd
		})
		.then(function(docRef) {
			console.log('Document written with ID: ', docRef.id);
		})
		.catch(function(error) {
			console.error('Error adding document: ', error);
		});
}

// Get field from database function. Targetcollection is a string, either:
// users.[idHash].field
// companys.[idHash].field
// companys.[idHash].projects.[project1,2,3].field
// companys.[idHash].projects.[project1,2,3].questions.[question1,2,3].field

function getFromDB(targetCollection, toGet) {
	firestoreDB
		.collection(targetCollection)
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				console.log(`${doc.id} => ${doc.data()}`);
			});
		});
}
