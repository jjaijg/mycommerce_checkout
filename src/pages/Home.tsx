import { useCallback, useEffect, useState } from "react";
import { useBlocker, useNavigate, type BlockerFunction } from "react-router";
import Captcha from "../components/Captcha";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const shouldBlock = useCallback<BlockerFunction>(
    ({ currentLocation, nextLocation }) => {
      console.log(currentLocation, nextLocation);
      return value !== "123456";
    },
    [value]
  );

  // this hook works with framework & data router.
  const blocker = useBlocker(shouldBlock);

  useEffect(() => {
    if (blocker.state === "blocked") {
      window.alert("Please enter valid captcha to continue.");
      // const resp = window.confirm("Do you want to procced to checkout?");

      // if (resp) blocker.proceed(); // Proceed with the next location
      // else blocker.reset(); // stays in the same location
    }
  }, [blocker]);

  const onCaptchaChange = (data: string) => {
    setValue(data);
  };

  return (
    <main>
      <section>
        <Captcha value={value} onChange={onCaptchaChange} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => {
              navigate("/checkout-form");
            }}
          >
            Proceed to Checkout Form
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
