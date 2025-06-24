import {
  useCheckout,
  PaymentElement,
  ExpressCheckoutElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const checkout = useCheckout();

  const handleSubmit: React.FormEventHandler = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const result = await checkout.confirm({
      email: "jai@mail.com",
    });

    if (result.type === "error") {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      console.log("Payment successful", result);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "20rem" }}
        >
          {checkout.lineItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "left",
                width: "100%",
              }}
            >
              <div>
                <h3 style={{ lineHeight: 0.5 }}>{item.name}</h3>
                <p style={{ color: "gray", fontStyle: "italic" }}>
                  Quantity: {item.quantity}
                </p>
              </div>
              <p>Price: {item.total.amount}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ExpressCheckoutElement
            onConfirm={(e) => {
              console.log("Express Checkout Element confirmed", e);
            }}
          />
          <PaymentElement />
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <button type="submit" style={{ width: "100%" }}>
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
