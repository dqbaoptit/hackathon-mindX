import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCPr1S8wAkVkCp-bBmCQX6IfrJLeiq8uSQ',
  authDomain: 'chatting-mindx.firebaseapp.com',
  databaseURL: 'https://chatting-mindx.firebaseio.com',
  projectId: 'chatting-mindx',
  storageBucket: 'chatting-mindx.appspot.com',
  messagingSenderId: '106025173058',
  appId: '1:106025173058:web:e2efe5c7fad85e2b47addb',
  measurementId: 'G-ZPP0KCP0RS',
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
export const auth = firebase.auth;
export const db = firebase.database();
export const fire = firebase;
