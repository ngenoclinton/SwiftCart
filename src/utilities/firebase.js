// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



//Authentication
import {getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    getAdditionalUserInfo} from 'firebase/auth';
 

/*Firestore DB creation */
import {getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
}from 'firebase/firestore';    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAro0V-mpSwhD9yT6rmxO3UkHL6Trnc6pQ",
  authDomain: "swiftcart-36d0e.firebaseapp.com",
  projectId: "swiftcart-36d0e",
  storageBucket: "swiftcart-36d0e.appspot.com",
  messagingSenderId: "546728235979",
  appId: "1:546728235979:web:9b97ed4b4a95129be51c4e",
  measurementId: "G-0TJM067DXS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(); 

const firebasestoreDb = getFirestore(); // this instance allows us to tell the firebase when we want set or get the database 

//  creating and adding user to the database
export const createUserDocumentFromAuth = async(
    userAuth,
    additionalUserInformation = {}) =>{
        const userDocRef = doc(firebasestoreDb, 'users', userAuth.uid)//userDocumentReference(userDocRef)
      //userDocRef 

      const userSnapshot = await getDoc(userDocRef); //userSnapshot allows us to check if there is a user which exists inside the database & allows us to access the dat

      //if user data does not exists      
      //create/set the document with the data from userAuth in my collection
      if(!userSnapshot.exists()){
          
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc (userDocRef,{
              displayName, 
              email,
              createdAt,
              ...additionalUserInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    //if user data exists
    //return userDocRef
    return userDocRef;
    }

    const createAuthenticateUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password ) return;
    
        return await createUserWithEmailAndPassword (auth, email, password);
    }
    export  {createAuthenticateUserWithEmailAndPassword};
    
    //sign In With Email And Password
    const signInUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password ) return;
    
        return await signInWithEmailAndPassword (auth, email, password);
    }
    export  {signInUserWithEmailAndPassword};
    
    export const signOutUser = async () => signOut(auth);
    
    export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);