import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPpP-1HYBYJrsh_VGwxbvlyVa88Zw_KGI",
  authDomain: "sandip-stack-overflow.firebaseapp.com",
  projectId: "sandip-stack-overflow",
  storageBucket: "sandip-stack-overflow.appspot.com",
  messagingSenderId: "905719258990",
  appId: "1:905719258990:web:2b65dec4667ff00ab06b7f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);