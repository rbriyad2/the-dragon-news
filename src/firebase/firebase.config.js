// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwUumgBB_jl3oqay9gKi9ttJlpurfT4GQ",
  authDomain: "the-news-dragon-a0a4a.firebaseapp.com",
  projectId: "the-news-dragon-a0a4a",
  storageBucket: "the-news-dragon-a0a4a.appspot.com",
  messagingSenderId: "335726641119",
  appId: "1:335726641119:web:6c0e9b9f806efaff9bce6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;