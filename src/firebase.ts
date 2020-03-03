import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {config} from './config';

export const myFirebase = firebase.initializeApp(config);

export const FirebaseAuth = myFirebase.auth();
export const FirebaseFirestore = myFirebase.firestore();
