var firebaseConfig = {
  apiKey: "AIzaSyDv88nWNLq3BtkVNITflh-IOf13l79JczE",
  authDomain: "student-teacher-appointm-b27b1.firebaseapp.com",
   projectId: "student-teacher-appointm-b27b1",
  storageBucket: "student-teacher-appointm-b27b1.firebasestorage.app",
  messagingSenderId: "863100317766",
  appId: "1:863100317766:web:8045e2ab538328cd8e9a47"

};
firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.firestore();