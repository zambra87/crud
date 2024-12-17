// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt2UUoXcBwUTisFLfXptlb9sKU1UdzVHw",
  authDomain: "crud-desafio-942a6.firebaseapp.com",
  projectId: "crud-desafio-942a6",
  storageBucket: "crud-desafio-942a6.appspot.com", // Corrección del dominio incorrecto
  messagingSenderId: "968630384129",
  appId: "1:968630384129:web:fe5fa4aac2b1c4ecb73200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Agregar el export default aquí
