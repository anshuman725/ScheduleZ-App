// import firebase from 'firbase/app'
// import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyD-9nzu_2NHZa71x1BdUi4gK5ASZUNZmMg",
//   authDomain: "todo-app-a661b.firebaseapp.com",
//   projectId: "todo-app-a661b",
//   storageBucket: "todo-app-a661b.appspot.com",
//   messagingSenderId: "272936512071",
//   appId: "1:272936512071:web:4637c25a2605f27de59f62"
//   }
//   firebase.initializeApp(firebaseConfig)

//   export default firebase

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    // paste your firebase config here
    apiKey: "AIzaSyD-9nzu_2NHZa71x1BdUi4gK5ASZUNZmMg",
  authDomain: "todo-app-a661b.firebaseapp.com",
  projectId: "todo-app-a661b",
  storageBucket: "todo-app-a661b.appspot.com",
  messagingSenderId: "272936512071",
   appId: "1:272936512071:web:4637c25a2605f27de59f62"
}

firebase.initializeApp(firebaseConfig)

export default firebase