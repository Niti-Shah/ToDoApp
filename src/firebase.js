// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  
//   };

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkGpSy8_yU-c2SV-2V0AXX5pWbhhsxr1c",
    authDomain: "todo-app-ee35b.firebaseapp.com",
    projectId: "todo-app-ee35b",
    storageBucket: "todo-app-ee35b.appspot.com",
    messagingSenderId: "851366998267",
    appId: "1:851366998267:web:7b802fb38cb4b80616005e",
    measurementId: "G-VD287060YE"

  });
  
  const db = firebaseApp.firestore();

  export default db;
