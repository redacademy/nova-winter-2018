import { auth } from "./firebase";

export function register(data, callback) {
  const { email, password } = data;
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    callback(user);
  });
}

// export function createUser (user, callback) {
//   database.doc(`users/`)
// }

export function login(data, callback) {
  const { email, password } = data;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      callback(user);
    })
    .catch(error => {
      console.log(
        "An error occured when logging in. Please check your login credentials",
        error
      );
    });
}

export function signOut() {
  auth.signOut().catch(error => {
    console.log("An error occured when signing out", error);
  });
}
