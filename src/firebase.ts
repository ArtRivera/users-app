import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvlhsycE8WnuGe5WG2dGP9NCjvhJPP7P8",
    authDomain: "reactauthit.firebaseapp.com",
    projectId: "reactauthit",
    storageBucket: "reactauthit.appspot.com",
    messagingSenderId: "760723304057",
    appId: "1:760723304057:web:a540559ccdee435307eea8"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const auth = fb.auth();