import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeTNygCRk6QTuUbr1D-bfHSsUZ3ddV0Us",
  authDomain: "work2connect-d7b01.firebaseapp.com",
  projectId: "work2connect-d7b01",
  storageBucket: "work2connect-d7b01.appspot.com",
  messagingSenderId: "76899548328",
  appId: "1:76899548328:web:fb7eac748831ea00ba969d"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
