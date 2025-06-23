import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { lazy, Suspense } from "react";
import { PageSkeleton } from "./components/skeletons/PageSkeleton";

const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <CheckoutPage />
      </Suspense>
    ),
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
