import { loadStripe } from "@stripe/stripe-js";
import { useTransition } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = () => {
  const [pending, startTransition] = useTransition();

  const handleStripeCheckout = () =>
    startTransition(async () => {
      try {
        // Create checkout session with line items
        // send back chekcout session id
        const res = await fetch("/.netlify/functions/create-checkout-session", {
          method: "POST",
        });
        const { id } = await res.json();
        const stripe = await stripePromise;

        // Redirect to stripe hosted checkout page
        await stripe?.redirectToCheckout({ sessionId: id });
      } catch (error) {
        console.error(error);
      }
    });

  return (
    <button onClick={handleStripeCheckout} disabled={pending}>
      Pay with Stripe
    </button>
  );
};

export default CheckoutButton;
