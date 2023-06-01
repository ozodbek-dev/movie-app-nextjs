import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import * as process from "process";


const stripe = new Stripe( process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:"2022-11-15"
});


export default async function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    const {method}  = req;
    const {email,price_id} = req.body;
    if(method==='POST' && price_id ){
        try {
            const public_domain = process.env.PUBLIC_DOMAIN  as string;
            const customers = await stripe.customers.list({limit:100});
            let customer;
            customer = customers.data.find(item=>item.email===email)
            const subscription = await stripe.checkout.sessions.create({
                mode:"subscription",
                payment_method_types:["card"],
                line_items:[{
                    price:price_id,
                    quantity:1,
                }],
                customer:customer?.id,
                success_url:`${public_domain}/success`,
                cancel_url:`${public_domain}/cancel`
            })
            return res.status(200).json({subscription})
        }catch (e) {
            const err = e as Error
            return res.status(400).json({message:err.message})
        }
    }
    else  return res.status(400).json({message:"Method not allowed!"})
}

type Data = {
    message?:string;
    subscription?:Stripe.Response<Stripe.Checkout.Session>
}