import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCXTn8lTafAi4xQSVtRXEqlQzJwoLpzot0",
    authDomain: "e-clone-d128f.firebaseapp.com",
    databaseURL: "https://e-clone-d128f.firebaseio.com",
    projectId: "e-clone-d128f",
    storageBucket: "e-clone-d128f.appspot.com",
    messagingSenderId: "910925169739",
    appId: "1:910925169739:web:b06ebcf21c1b1bfb69b9ce"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export { db,auth};