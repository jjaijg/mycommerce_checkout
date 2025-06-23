import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

function CheckoutButton() {
  const handleCheckout = async () => {
    const res = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
    });
    const { id } = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return <button onClick={handleCheckout}>Go to Stripe Checkout</button>;
}

export default CheckoutButton;
