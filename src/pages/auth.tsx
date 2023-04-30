import React, {Fragment, useState} from 'react';
import Head from "next/head";
import Image from "next/image";

const Auth = () => {
    const [auth,setAuth ] = useState<"signIn"| "signUp">("signIn");
    const toggleAuth = (state:"signIn"| "signUp")=>{
        setAuth(state);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
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
                    <form className="form_card" >

                        <div className={"flex justify-between"}>
                            <h3 className={"text-2xl"}>{
                                auth==="signIn"? "Sign In":"Sign Up"
                            }</h3>
                            <Image src={'/logo.svg'} alt={'logo'} width={40} height={40} className={'cursor-pointer object-contain'} />
                        </div>
                        <div className="space-y-8">
                            <label>
                                <input type="email" placeholder={"Email"} className="input"/>
                            </label>
                            <label>
                                <input type="password" placeholder={"Password"} className="input"/>
                            </label>
                        </div>
                        <button type={'submit'} className="w-full bg-red-700 text-white rounded-md transition-all duration-400 active:shadow-lg  active:scale-90 py-3 font-semibold hover:bg-red-900">
                            Sign In
                        </button>
                        {
                            auth==='signIn' ?  <div>
                                <span>Not yet account ?</span>
                                <button type={'button'} className="text-white hover:underline text-blue-600 ml-3" onClick={()=>toggleAuth("signUp")}>Sign Up Now</button>
                            </div>:
                                <div>
                                <span>Already have an account ? </span>
                                <button type={'button'} className="text-white hover:underline text-blue-600 ml-3" onClick={()=>toggleAuth("signIn")}>Sign In Now</button>
                            </div>

                        }
                    </form>

            </div>
        </Fragment>
    );
};

export default Auth;