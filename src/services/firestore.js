// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjCK6XUoe6Vc7ZAyL34TC2WYMnpiOksB4",
  authDomain: "e-commerce-project-a0fa5.firebaseapp.com",
  projectId: "e-commerce-project-a0fa5",
  storageBucket: "e-commerce-project-a0fa5.appspot.com",
  messagingSenderId: "501588215241",
  appId: "1:501588215241:web:9307e965d913bf760e5418"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;