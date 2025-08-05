// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTEL4Js9u-2ZJOqAVadEd7xfyDNbb565U',
  authDomain: 'authentication-450d0.firebaseapp.com',
  projectId: 'authentication-450d0',
  storageBucket: 'authentication-450d0.firebasestorage.app',
  messagingSenderId: '891059194323',
  appId: '1:891059194323:web:b92131a004d484fed3c726',
  measurementId: 'G-X0JZPNBCB1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
