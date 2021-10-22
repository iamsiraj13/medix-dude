import { useEffect, useState } from "react"
import firebaseInit from "../Firebase/Firebase.init";
import {getAuth, onAuthStateChanged,signOut,createUserWithEmailAndPassword , signInWithPopup, GoogleAuthProvider ,signInWithEmailAndPassword  } from "firebase/auth";
 
    
firebaseInit();
const useFirebase = () =>{
    const [user , setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInUsingGoogle = () =>{
        signInWithPopup(auth , googleProvider)
        .then(result =>{ 
            const {email,displayName,photoURL}=result.user;
            const userInfo = {
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(userInfo)
        })
        .catch( error =>{
            setError(error.message);
        })
    }

    // sign up with email and password
    
    const createUser=(email , password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const {email,displayName,photoURL} =result.user;
            const userInfo ={
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(userInfo);
            console.log(user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
 
    // sign in with email and password

    const userLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const {email,displayName,photoURL} =result.user;
            const userInfo ={
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(userInfo);
            console.log(user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if( user ){
                setUser(user)
            }
        })
    },[]);

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }


    

    return {
        signInUsingGoogle,
        user,
        error,
        logOut,
        setUser,
        createUser,
        error,
        setError,
        userLogin
    }
    
}


export default useFirebase;

