import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCCVSX55UK74QfhcmZE6AcjZddV_C2Ttvg",
  authDomain: "fir-chat-65a44.firebaseapp.com",
  projectId: "fir-chat-65a44",
  storageBucket: "fir-chat-65a44.appspot.com",
  messagingSenderId: "390696903902",
  appId: "1:390696903902:web:8dd4bb8ec25131a86c8e4f",
  measurementId: "G-E0EVWL5571"
});

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{firebase, auth, firestore}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
