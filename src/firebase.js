import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVSruQJeYRmNTY8MJ8dApP_g1wQL2Xh8k",
  authDomain: "jaden-kim.firebaseapp.com",
  projectId: "jaden-kim",
  storageBucket: "jaden-kim.appspot.com",
  messagingSenderId: "63823013681",
  appId: "1:63823013681:web:c127fd1df71185c10fb210",
  measurementId: "G-E9JDNYM76T",
}

firebase.initializeApp(firebaseConfig)

export default firebase
