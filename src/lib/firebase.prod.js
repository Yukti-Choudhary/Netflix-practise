import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa3z9UJg_0kXkdR4fVLG2zLlFI_RzOjtI",
  authDomain: "netflix-clone-174b9.firebaseapp.com",
  projectId: "netflix-clone-174b9",
  storageBucket: "netflix-clone-174b9.appspot.com",
  messagingSenderId: "694374333291",
  appId: "1:694374333291:web:87ece616faca83455c2a2e",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
