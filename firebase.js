import { initializeApp,firebase } from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBZLQ3g94M4bQpEsonDvBRJkCM34jkn4Mg",
    authDomain: "facebook-c5dc8.firebaseapp.com",
    projectId: "facebook-c5dc8",
    storageBucket: "facebook-c5dc8.appspot.com",
    messagingSenderId: "198014514251",
    appId: "1:198014514251:web:4389511d38c76cea7e49ce"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const  db = app.firestore();

  const storage = firebase.storage();
  export  {  db, storage};