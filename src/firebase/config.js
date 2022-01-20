import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD069D7l85ZZogR3Lb585GrWnwjtZ29ySQ",
  authDomain: "nordic-rose-blogs.firebaseapp.com",
  projectId: "nordic-rose-blogs",
  storageBucket: "nordic-rose-blogs.appspot.com",
  messagingSenderId: "417034346158",
  appId: "1:417034346158:web:9a2bb36da89c782927173f"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }