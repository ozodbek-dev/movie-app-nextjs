import React, {ReactNode} from 'react';
import {AiFillCheckCircle } from "react-icons/ai";
import {GiQueenCrown} from 'react-icons/gi'

import {TbPlayerPlay} from "react-icons/tb";

export interface OptionType{
    title:string;
    icon:ReactNode,
}
export interface SubscriptionType {
    title: string;
    price:number,
    options:OptionType[]
}

const SubscriptionPlanCard = ({title,price, options}: SubscriptionType) => {
    return (
        <div
            className={`min-w-[200px] ${title.toLowerCase() === 'starter' ? "opacity-100 scale-105":"opacity-50"}  hover:opacity-100 md:w-[20vmax] w-[70vw] hover:shadow-slate-800  bg-gradient-to-br from-slate-900/40 via-purple-900/40 to-slate-900/40 cursor-pointer p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 `}>
            <h3 className="mb-3 lg:mb-10 mb-5  md:text-4xl text-3xl text-center font-bold text-indigo-100">
                {title}
            </h3>
            <div className="relative flex justify-center">
                <p className={"text-white  bg-gradient-to-br inline-block from-amber-500 via-amber-300 to-amber-900 lg:text-6xl md:text-4xl text-3xl bg-opacity-70 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg"}>
                    {price.toLocaleString("en-US",{style:"currency", currency:"USD"})}
                </p>
            </div>
            <div className="relative flex justify-center">
                <p className={"text-white  text-2xl bg-opacity-70 font-bold py-5"}>
                    Accessibility
                </p>
            </div>
            <table className="my-4 w-full flex flex-col gap-3">
                {options.map(item => (
                    <tr key={item.title} className={'flex items-center justify-between gap-5'}>
                        <td className={" text-3xl text-yellow-400"}><AiFillCheckCircle/></td>
                        <td className={" text-2xl"}>{item.title}</td>
                        <td className={"text-4xl"}>{item.icon}</td>
                    </tr>
                ))}
            </table>
         <div className="flex justify-center">
             {price===0 ? <button className={"flex justify-center w-[50%] font-bold mt-10 items-center gap-2 md:px-6 md:py-3 px-3 py-2 md:text-xl text-sm  border-slate-50  rounded-lg bg-amber-400 opacity-100  transition-all duration-300  origin-center  transform active:scale-75 hover:bg-amber-700 "}><span className={'text-2xl'}>Get Started</span>
             </button>:<button className={"flex justify-center w-[50%] font-bold mt-10 items-center gap-2 md:px-6 md:py-3 px-3 py-2 md:text-xl text-sm  border-slate-50  rounded-lg bg-amber-600 opacity-100  transition-all duration-300  origin-center  transform active:scale-75 hover:bg-amber-700 "}>
                 <GiQueenCrown className={"md:text-3xl text-lg"}/> <span className={'text-2xl'}>Buy</span>
             </button>}
         </div>
        </div>
    );
};

export default SubscriptionPlanCard;
