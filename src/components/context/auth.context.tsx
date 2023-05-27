import React, {createContext, ReactNode, useEffect, useMemo, useState} from 'react';
import {User} from 'firebase/auth'

import useAuth from "@/hooks/useAuth";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase";
import {useRouter} from "next/router";


interface AuthContextState  {
    user: User |null;
    error:string;
    isLoading:boolean;
    signUp:(email:string,password:string)=>void;
    signIn:(email:string,password:string)=>void;
    logout:()=>Promise<void>
}

export const AuthContext = createContext<AuthContextState>({
    user:null,
    error:"",
    signIn:()=>{},
    signUp:()=>{},
    logout: async()=>{} ,
    isLoading:false
})

const AuthContextProvider = ({children}:{children:ReactNode}) => {
    const {error,isLoading,signUp,signIn,user, logout, setUser, setIsLoading} = useAuth();
    const [initialLoader, setInitialLoader] = useState<boolean>(true);
    const router = useRouter();
    const value = useMemo(()=>({
        error,isLoading,signUp,signIn,user, logout
        //eslint-disable-next-line
    }), [user, isLoading,error])

    useEffect(()=>onAuthStateChanged(auth,user=>{
        if(user){
            setIsLoading(false)
            setUser(user);
            router.push("/")
        }
        else{
            setIsLoading(true)
            setUser(null)
            router.push("/auth")
        }
        setIsLoading(false)
        setInitialLoader(false)
        //eslint-disable-next-line
    }),[])
    return (
        <AuthContext.Provider value={value}>
            { initialLoader ? "Loader...": children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
