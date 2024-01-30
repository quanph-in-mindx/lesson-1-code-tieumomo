// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAydqGt2q6IpEQFSkqCflJAYjZEUJNt5gQ",
    authDomain: "jsi03-46706.firebaseapp.com",
    projectId: "jsi03-46706",
    storageBucket: "jsi03-46706.appspot.com",
    messagingSenderId: "967629567676",
    appId: "1:967629567676:web:dc6b3d069fed42ec8182b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}
