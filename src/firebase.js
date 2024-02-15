// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5bEZJsh7YQpC35-vIlJIHVpLy4m0Stu0",
  authDomain: "netflix-clone-6ed89.firebaseapp.com",
  projectId: "netflix-clone-6ed89",
  storageBucket: "netflix-clone-6ed89.appspot.com",
  messagingSenderId: "992845565481",
  appId: "1:992845565481:web:bf68d5ebdef886fd349638"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;