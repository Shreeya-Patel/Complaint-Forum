import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCVXu1HM6IZLOyof1w86nHY--2tyWqA0dI",
  authDomain: "c-71-7cc78.firebaseapp.com",
  projectId: "c-71-7cc78",
  storageBucket: "c-71-7cc78.appspot.com",
  messagingSenderId: "761299935217",
  appId: "1:761299935217:web:8d443c772a13d1f269ee50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export default firebase.firestore();
