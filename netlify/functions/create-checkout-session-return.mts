import { Handler } from "@netlify/functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const handler: Handler = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
        ui_mode: "custom",
      //   payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 4000, // 4000 cents -> 40$
            product_data: {
              name: "Sample Product",
            },
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            unit_amount: 6000, // 4000 cents -> 40$
            product_data: {
              name: "Sample Product 2",
            },
          },
          quantity: 2,
        },
      ],
      return_url: `${process.env.APP_URL}/checkout-form?session_id={CHECKOUT_SESSION_ID}`,
      // success_url: `${process.env.APP_URL}/success`,
      // cancel_url: `${process.env.APP_URL}/cancel`,
    });

    session.client_secret;

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: session.id,
        payment_status: session.payment_status,
        client_secret: session.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};
