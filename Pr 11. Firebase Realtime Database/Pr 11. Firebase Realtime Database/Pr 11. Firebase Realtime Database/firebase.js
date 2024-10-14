import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmIFW1cZS7V0WCWjw79hAsvRCI81jn6MU",
  authDomain: "fir-realtime-database-c4233.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-c4233-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-database-c4233",
  storageBucket: "fir-realtime-database-c4233.appspot.com",
  messagingSenderId: "812438607003",
  appId: "1:812438607003:web:ab6786aec5e84e44a0623e",
  measurementId: "G-8NG37T9V54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
