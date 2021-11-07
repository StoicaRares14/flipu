import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { Radio, RadioGroup } from "@mui/material";
import { Button } from "@mui/material";

function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <RadioGroup>
          <div>
            <div>
              <Radio
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                checked={paymentMethod === "PayPal"}
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div>
              <Radio
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                checked={paymentMethod === "Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
        </RadioGroup>
        <div>
          <Button
            className="primary"
            type="submit"
            sx={{ fontSize: "1.6rem" }}
            variant="contained"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;
