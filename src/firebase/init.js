import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyACxhArkK-v15k-ceh0TYQc7o25WUn0BKs",
  authDomain: "ninja-smoothies-edd09.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-edd09.firebaseio.com",
  projectId: "ninja-smoothies-edd09",
  storageBucket: "ninja-smoothies-edd09.appspot.com",
  messagingSenderId: "495866068659",
  appId: "1:495866068659:web:2f71129ce13bb43abb3ac6",
  measurementId: "G-P32SQYSKNC"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export firestore database
export default firebaseApp.firestore();
