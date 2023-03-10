import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-HOqdjwiDgF0qWosJk_axA2gE3lIt4-E",
  authDomain: "homestay-tunnienguci.firebaseapp.com",
  projectId: "homestay-tunnienguci",
  storageBucket: "homestay-tunnienguci.appspot.com",
  messagingSenderId: "875233180854",
  appId: "1:875233180854:web:51313fdeb4002a6fe53a17",
  measurementId: "G-MRXZ0SWHGN"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const email = result.user.email;
            const name = result.user.displayName;
            const photo = result.user.photoURL;
            
            localStorage.setItem("user", email);
            localStorage.setItem("name", name);
            localStorage.setItem("photo", photo);
            window.location.href = "/";
            const db = getFirestore(app);
            const docRef = doc(db, "users", email);
            setDoc(docRef, {
                name: name,
                photo: photo,
            }, { merge: true }

            
            ).catch((error) => {
                console.error("Error writing document: ", error);
            });
        }).catch((error) => {
            console.log(error);
        });
}
export default signInWithGoogle;
