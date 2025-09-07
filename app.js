// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIKjiAdZ05aeizD1WtJg9pYqfoBJkDdJ0",
  authDomain: "eduspark-faculty-evaluation.firebaseapp.com",
  databaseURL: "https://eduspark-faculty-evaluation-default-rtdb.firebaseio.com",
  projectId: "eduspark-faculty-evaluation",
  storageBucket: "eduspark-faculty-evaluation.firebasestorage.app",
  messagingSenderId: "108577623411",
  appId: "1:108577623411:web:cc8eb8bc11c17feef7c906",
  measurementId: "G-V7Q66SXL08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase services - globally accessible
const auth = firebase.auth();
const db = firebase.database();

// Make Firebase services globally available
window.firebase = firebase;
window.auth = auth;
window.db = db;

console.log('Firebase initialized successfully');
console.log('Firebase services available:', { auth, db });
console.log('Database URL:', db.app.options.databaseURL);
console.log('Database reference test:', db.ref('test').toString());
