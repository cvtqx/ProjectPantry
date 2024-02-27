import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyA3Cq2wENQ5mv7B5Ke1uomGGSpk5RWKTC0',
  authDomain: 'project-pantry-b708f.firebaseapp.com',
  projectId: 'project-pantry-b708f',
  storageBucket: 'project-pantry-b708f.appspot.com',
  messagingSenderId: '841276433372',
  appId: '1:841276433372:web:2109c79442dab922a22519',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(auth);

export { app, auth, firestore, storage };
