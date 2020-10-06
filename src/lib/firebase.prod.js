import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_firebase_apiKey,
    authDomain: process.env.REACT_APP_firebase_authDomain,
    databaseURL: process.env.REACT_APP_firebase_databaseURL,
    projectId: process.env.REACT_APP_firebase_projectId,
    storageBucket: process.env.REACT_APP_firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
    appId: process.env.REACT_APP_firebase_appId,
};

const firebase = Firebase.initializeApp(config);

export { firebase };
