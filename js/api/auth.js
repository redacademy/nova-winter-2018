import { auth } from "./firebase";

export function register(data) {
  const { email, password } = data;
  auth.createUserWithEmailAndPassword(email, password).then(user => {});
}

export function login(data) {
  const { email, password } = data;
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    console.log(
      "An error occured when logging in. Please check your login credentials"
    );
  });
}

export function signOut() {
  auth.signOut().catch(error => {
    console.log("An error occured when signing out");
  });
}
