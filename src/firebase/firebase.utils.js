import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYSkqdlT7CB4J4LJ3Wk0hVsXWW-T4M__M",
    authDomain: "react-firebase-app-d0eab.firebaseapp.com",
    databaseURL: "https://react-firebase-app-d0eab.firebaseio.com",
    projectId: "react-firebase-app-d0eab",
    storageBucket: "react-firebase-app-d0eab.appspot.com",
    messagingSenderId: "390247064133",
    appId: "1:390247064133:web:3543167b6050c9ee4e792c",
    measurementId: "G-YDQTVPFLKF"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
