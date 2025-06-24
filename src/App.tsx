import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { lazy, Suspense } from "react";
import { PageSkeleton } from "./components/skeletons/PageSkeleton";

const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const CheckoutFormPage = lazy(() => import("./pages/CheckoutPageWithForm"));

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
    path: "/checkout-form",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <CheckoutFormPage />
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
