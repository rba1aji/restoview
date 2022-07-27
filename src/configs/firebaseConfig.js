import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBlgfSceXNIIwszeaOWHPDd4yt1sW0PjYQ',
  authDomain: 'resrat-1922b.firebaseapp.com',
  projectId: 'resrat-1922b',
  storageBucket: 'resrat-1922b.appspot.com',
  messagingSenderId: '988646319782',
  appId: '1:988646319782:web:fd491dcddf17142b263667',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage=getStorage(firebaseApp);

export { auth, db , storage};
