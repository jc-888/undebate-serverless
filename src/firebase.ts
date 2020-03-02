import firebase from 'firebase/app';
import 'firebase/auth';

import {config} from './firebase_config';

export const myFirebase = firebase.initializeApp(config);

export const FirebaseAuth = myFirebase.auth();
