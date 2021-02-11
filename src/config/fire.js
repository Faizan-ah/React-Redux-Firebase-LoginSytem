import firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyC95oZVcYkoaCfYIiOffjskItoluo28Zbo",
//     authDomain: "redux-firebase-login.firebaseapp.com",
//     projectId: "redux-firebase-login",
//     storageBucket: "redux-firebase-login.appspot.com",
//     messagingSenderId: "687785107289",
//     appId: "1:687785107289:web:651df9b9270285dc5ef648",
//     measurementId: "G-VE7S7V2ZBT"
// };
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID 
};
const fire = firebase.initializeApp(config);
export default fire;