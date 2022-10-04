// https://firebase.google.com/docs 참고!!

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_DOT_ENV_apiKey}`,
  authDomain: `${process.env.REACT_APP_DOT_ENV_authDomain}`,
  projectId: `${process.env.REACT_APP_DOT_ENV_projectId}`,
  storageBucket: `${process.env.REACT_APP_DOT_ENV_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_DOT_ENV_messagingSenderId}`,
  appId: `${process.env.REACT_APP_DOT_ENV_appId}`,
  measurementId: `${process.env.REACT_APP_DOT_ENV_measurementId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default app;
