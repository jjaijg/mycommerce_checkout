import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useParams } from "react-router-dom";

// call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

const fetchClientSecret = async () => {
  return fetch("/.netlify/functions/create-checkout-session-return", {
    method: "POST",
  })
    .then((response) => response.json())
    .then(
      (json: { id: string; payment_status: string; client_secret: string }) => {
        return json.client_secret;
      }
    );
};

const CheckoutPageWithForm = () => {
  const params = useParams();
  console.log(params);
  return (
    <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <CheckoutForm />
    </CheckoutProvider>
  );
};

export default CheckoutPageWithForm;
