
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

import "firebase/compat/storage"; 



const firebaseConfig = {
  apiKey: "AIzaSyDHDARhgSFwF4R06MOqg3FdUZo7H93lZOM",

  authDomain: "disneyplus-clone-49568.firebaseapp.com",

  projectId: "disneyplus-clone-49568",

  storageBucket: "disneyplus-clone-49568.appspot.com",

  messagingSenderId: "304517010360",

  appId: "1:304517010360:web:f24d6c68721ad6a556b54d",

  measurementId: "G-H21JFLT3ED",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export { auth , provider , storage};
export default db;

