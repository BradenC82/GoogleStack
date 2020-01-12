import * as firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAfWd4Ae5XIe7RYHsSzzBbq8WgOatHrY_Q",
    authDomain: "stack-3ccb1.firebaseapp.com",
    databaseURL: "https://stack-3ccb1.firebaseio.com",
    projectId: "stack-3ccb1",
    storageBucket: "stack-3ccb1.appspot.com",
    messagingSenderId: "754715260015",
    appId: "1:754715260015:web:ac470055c1c9c772ed899a"
  };


firebase.initializeApp(firebaseConfig);

export default firebase