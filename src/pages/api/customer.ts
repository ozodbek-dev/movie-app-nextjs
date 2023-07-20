import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import * as process from "process";


const stripe = new Stripe( process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:"2022-11-15"
});


export default async function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    const {method}  = req;
    if(method==='POST'){
        try {
            const {email} = req.body;
            const customer = await stripe.customers.create({
                email,
            })
            res.status(201).json({message:"success"})
        }catch (e){
            const err = e as Error
            return res.status(400).json({message:err.message})
        }
    }
    else  return res.status(400).json({message:"Method not allowed!"})
}

type Data = {
    message?:string;
}