import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCHqhC2gEp0b7x_VlWtXqrY9cZWbc2Wzfo',
  authDomain: 'undebate-test-1.firebaseapp.com',
  databaseURL: 'https://undebate-test-1.firebaseio.com',
  projectId: 'undebate-test-1',
  storageBucket: 'undebate-test-1.appspot.com',
  messagingSenderId: '681031443483',
  appId: '1:681031443483:web:d9252b6aefe2aadc99c4be',
  measurementId: 'G-EHNNCR3M3D',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

export const FirebaseAuth = myFirebase.auth();
