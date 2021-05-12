import Firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyAhEP1I2xC4cXFIfcp83n4RSelkNXESibw",
    authDomain: "test-802b0.firebaseapp.com",
    projectId: "test-802b0",
    storageBucket: "test-802b0.appspot.com",
    messagingSenderId: "56884715597",
    appId: "1:56884715597:web:d18f54d778fb8a3e263c04",
    measurementId: "G-85813Z8VQ6"
  };

  let app = Firebase.initializeApp(config);
  export const db = app.database();