import { useEffect, useState } from "react";
import CheckoutButton from "../components/CheckoutButton";
import { PageSkeleton } from "../components/skeletons/PageSkeleton";

export const CheckoutPage = () => {
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      SetLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (loading) return <PageSkeleton />;

  return (
    <>
      <CheckoutButton />
    </>
  );
};

export default CheckoutPage;
