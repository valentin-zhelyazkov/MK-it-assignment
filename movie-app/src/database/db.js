import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEq94__MV5qDp901dNihLypgx3ukNEbJA",
  authDomain: "movie-app-66c54.firebaseapp.com",
  projectId: "movie-app-66c54",
  storageBucket: "movie-app-66c54.appspot.com",
  messagingSenderId: "918112893797",
  appId: "1:918112893797:web:e61fe82d4abd06f3d6bf8c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);