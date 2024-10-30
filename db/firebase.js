const { initializeApp } = require("firebase/app");

const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA79sMAXlgcvYCqsIEWw2tYNBjd_VWvjYw",
  authDomain: "crud-498fe.firebaseapp.com",
  projectId: "crud-498fe",
  storageBucket: "crud-498fe.firebasestorage.app",
  messagingSenderId: "160155490332",
  appId: "1:160155490332:web:b16440d868f1b74efa67d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;