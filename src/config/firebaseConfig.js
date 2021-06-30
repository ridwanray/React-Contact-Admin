import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import "firebase/database"; 
//I later switched from Firebase to Firestore  coz of perfomance issue

var firebaseConfig = {
  apiKey: "AIzaSyAjIx4wA3_S3QprQVhrgxLRN72GKh70wUU",
  authDomain: "contact-dashboard.firebaseapp.com",
  databaseURL: "https://contact-dashboard-default-rtdb.firebaseio.com",
  projectId: "contact-dashboard",
  storageBucket: "contact-dashboard.appspot.com",
  messagingSenderId: "724837013931",
  appId: "1:724837013931:web:ca56ee462b23cdb8f59aee",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
