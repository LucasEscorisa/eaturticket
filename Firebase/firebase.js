import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_hpETlGdbaGZV4Ug1-hGlFI6lxzUvaOU",
    authDomain: "eaturticket.firebaseapp.com",
    databaseURL: "https://eaturticket.firebaseio.com",
    projectId: "eaturticket",
    storageBucket: "eaturticket.appspot.com",
    messagingSenderId: "597805343690"
  }

  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;