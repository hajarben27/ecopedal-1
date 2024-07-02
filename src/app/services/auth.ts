import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword , signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfin8ndzehtNZaryTdFaI1kc-1Jz0AfF8",
    authDomain: "eco-pedal-app.firebaseapp.com",
    projectId: "eco-pedal-app",
    storageBucket: "eco-pedal-app.appspot.com",
    messagingSenderId: "940534855581",
    appId: "1:940534855581:web:524268c6985127493ae174"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
    return signOut(auth);
}

export const checkSignIn = async () => {
    await auth.authStateReady();
    return auth.currentUser
}