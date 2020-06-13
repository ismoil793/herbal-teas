import firebase from "firebase/app";
import "firebase/storage"

const firebaseConfig = {
   apiKey: "AIzaSyDpRCRwaCliCMPR8kQZp7U6WCKuu4EFkb8",
   authDomain: "herbal-teas.firebaseapp.com",
   databaseURL: "https://herbal-teas.firebaseio.com",
   projectId: "herbal-teas",
   storageBucket: "herbal-teas.appspot.com",
   messagingSenderId: "789421710604",
   appId: "1:789421710604:web:4f108d83f5a6acb410fd29",
   measurementId: "G-W39C87YSK0"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default}