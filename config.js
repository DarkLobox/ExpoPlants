import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSMulKk6vkuLq2VSsgmOXsULbYPQC5Urw",
  authDomain: "riego-plantas.firebaseapp.com",
  projectId: "riego-plantas",
  storageBucket: "riego-plantas.appspot.com",
  messagingSenderId: "499295162321",
  appId: "1:499295162321:web:584785453a04cf7af4daf0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
