import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

// import { CheckoutProvider } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./components/CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

// const fetchClientSecret = async () => {
//   return fetch("/.netlify/functions/create-checkout-session", {
//     method: "POST",
//   })
//     .then((response) => response.json())
//     .then(
//       (json: { id: string; payment_status: string; client_secret: string }) => {
//         console.log(json);
//         return json.client_secret;
//       }
//     );
// };

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          loader={async ({ context, params, request }) => {
            console.log(context, params, request);
          }}
        />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        {/* <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
        <CheckoutForm />
        </CheckoutProvider> */}
      </Routes>
    </>
  );
}

export default App;
