import React, {Fragment, useContext, useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import {TextField} from "@/components";
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {AuthContext} from "@/components/context/auth.context";
import {useAuth} from "@/hooks/useAuth";
import { useRouter } from 'next/router';

const initialValue = {
    email:"",
    password:""
}
const Auth = () => {
    const router = useRouter()
    const [auth,setAuth ] = useState<"signIn"| "signUp">("signIn");
    const {error,signIn,signUp,} = useContext(AuthContext);
    const {setIsLoading, isLoading, user} = useAuth()
    if(user) router.push("/")
    const toggleAuth = (state:"signIn"| "signUp")=>{
        setAuth(state);
    }
    const validation = Yup.object({
        email:Yup.string().email("Enter valid email").required("Email is required!"),
        password:Yup.string().required("Password is required").min(6,"Password must be minimum 6 characters")
    })
    const submitHandler =  (formData:{email:string,password:string})=>{
            if(auth === 'signIn'){
                 signIn(formData.email,formData.password)
            }
            else{
                signUp(formData.email,formData.password)
            }    
    }
    return (
        <Fragment>
            <Head>
                <title>Home Page</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/logo.svg' />
            </Head>
            <div className={"auth_bg"}>
                <div className="layer"></div>
                <Formik initialValues={initialValue} onSubmit={submitHandler} validationSchema={validation}>
                    <Form>
                        <div className="form_card" >

                            <div className={"flex justify-between"}>
                                <h3 className={"text-2xl"}>{
                                    auth==="signIn"? "Sign In":"Sign Up"
                                }</h3>
                                <Image src={'/logo.svg'} alt={'logo'} width={40} height={40} className={'cursor-pointer object-contain'} />
                            </div>
                            {error && <p className={'text-red-500 font-semibold text-center'}>{error}</p>}
                            <div className="space-y-8">
                                <TextField name={"email"} placeholder="Email" type={"email"} />
                                <TextField name={"password"} placeholder="Password" type="password"/>
                            </div>
                            <button type={'submit'} disabled={isLoading} className="w-full disabled:opacity-[50%] disabled:pointer-events-none bg-red-700 text-white rounded-md transition-all duration-400 active:shadow-lg  active:scale-90 py-3 font-semibold hover:bg-red-900">
                                {isLoading ? "Loading..." : (auth==="signIn" ? "Sign In":"Sign Up")}
                            </button>
                            {
                                auth==='signIn' ?  <div>
                                        <span>Not yet account ?</span>
                                        <button type={'button'} className="dark:text-white hover:underline text-blue-600 ml-3" onClick={()=>toggleAuth("signUp")}>Sign Up Now</button>
                                    </div>:
                                    <div>
                                        <span>Already have an account ? </span>
                                        <button type={'button'} className="dark:text-white hover:underline text-blue-600 ml-3" onClick={()=>toggleAuth("signIn")}>Sign In Now</button>
                                    </div>
                            }
                        </div>
                    </Form>
                </Formik>
            </div>
        </Fragment>
    );
};

export default Auth;
