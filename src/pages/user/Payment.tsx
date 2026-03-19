import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { payments } from '../../api/stripe';
import useStore from '../../store/ecom-store';
import CheckoutForm from '../../component/CheckoutForm';


const stripePromise = loadStripe('pk_test_51TBXufHKbZXot2vSeVt2IWyh2pifAYUmhUgWypsd7hQITSGnHQ0iVUG2V8TgGURflpzkI21B9CVFZPX7qIh0D1id007z2cAVBr');




const Payment = () => {
  const token = useStore((state) => state.token)
 const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      return
    }
    payments(token)
      .then((res) => {
        console.log(res)
        setClientSecret(res.data.clientSecret)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [token])
  

const options = clientSecret
  ? {
      clientSecret,
      appearance: {
        theme: "stripe",
      },
    } as const
  : undefined;

  


  return (
    <div>
     {
      clientSecret && options && 
      (
      <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
      )
     }
    </div>
  )
}

export default Payment