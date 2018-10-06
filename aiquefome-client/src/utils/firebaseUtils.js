import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAm9gKJeEaQcB_ttxSxGFNMBZfjIb8-K4I",
    authDomain: "aiquefome-312cb.firebaseapp.com",
    databaseURL: "https://aiquefome-312cb.firebaseio.com",
    projectId: "aiquefome-312cb",
    storageBucket: "aiquefome-312cb.appspot.com",
    messagingSenderId: "415590464466"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage();