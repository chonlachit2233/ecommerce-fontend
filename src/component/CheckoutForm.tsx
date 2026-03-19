import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import '../stripe.css';
import { saveorder } from '../api/user';
import useStore from '../store/ecom-store';


const CheckoutForm = () => {
  const token = useStore((state)=> state.token)
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!stripe || !elements) return;

    try {
      const payload = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      if (payload.error) {
        setErrorMessage(payload.error.message ?? "Payment failed");
        return;
      }

      if (payload.paymentIntent?.status === "succeeded") {
        console.log("✅ Payment success");
        setSuccessMessage("Payment successful!");
        if (!token) return;
        await saveorder(token, payload.paymentIntent);
      } else {
        setErrorMessage("Payment not completed. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage("Server or network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <PaymentElement />
      <button className='stripe-button' type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
    </form>
  );
};

export default CheckoutForm;