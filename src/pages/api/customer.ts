import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import cookie from 'js-cookie'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const user_id = req.cookies.user_id;

  if (method === "POST" && user_id) {
    try {
      const { email } = req.body;
    const customer =   await stripe.customers.create({ email, metadata: { user_id } });
      return res.status(200).json({ message: "Success", customer });
    } catch (error) {
      const result = error as Error;
      return res.status(400).json({ message: result.message });
    }
  } else {
    return res.status(400).json({ message: "Method not allowed" });
  }
}

interface Data {
  message?: string;
  customer?: Stripe.Customer;
}
