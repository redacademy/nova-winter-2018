import firebase from 'firebase';
import * as C from '../config/constants';
require('firebase/firestore');

// Initialize Firebase
const config = {
	apiKey: C.FIREBASE_API_KEY,
	authDomain: C.FIREBASE_AUTH_DOMAIN,
	databaseURL: C.FIREBASE_DATABASE_URL,
	projectId: C.FIREBASE_PROJECT_ID,
	storageBucket: C.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: C.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const database = firebase.firestore();
export const auth = firebase.auth();
