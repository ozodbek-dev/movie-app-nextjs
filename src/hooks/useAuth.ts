import React, {useState} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged, User} from 'firebase/auth'
import {auth} from "@/firebase";
import {useRouter} from "next/router";

const useAuth = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const signUp = (email:string,password:string)=>{
        createUserWithEmailAndPassword(auth,email,password)
            .then(res=> {
                setUser(res.user);
                router.push('/')
                setIsLoading(true)
            })
            .catch(err=>setError(err.message))
            .finally(()=>setIsLoading(false))
    }
    const signIn = (email:string,password:string)=>{
        signInWithEmailAndPassword(auth,email,password)
            .then(res=> {
                setUser(res.user);
                router.push('/')
                setIsLoading(true)
            })
            .catch(err=>setError(err.message))
            .finally(()=>setIsLoading(false))
    }

    const logout =  ()=>{
        setIsLoading(true);
        signOut(auth)
            .then(res=>{setUser(null)})
            .catch(err=>setError(err.message))
            .finally(()=>setIsLoading(false));
    }
    return {
        error,isLoading,signIn,logout,signUp,user
    }
};

export default useAuth;
