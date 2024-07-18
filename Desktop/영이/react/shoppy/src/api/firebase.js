import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATEBASE_URL,
  projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();

export function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch(console.error);
}
