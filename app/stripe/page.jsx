'use client';

/* --todo

just copied from stripe document.
more modifications & better code
stripe styles are not working next 13
added styles manually


*/

import React, { useState, useContext, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useRouter } from "next/navigation";

import CheckoutForm from './checkoutForm';
import { Store } from '../store/store';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App() {
  const [clientSecret, setClientSecret] = useState('');
  const { state, dispatch } = useContext(Store);
  const router = useRouter()

    
  if(!state.cart.Items.length){
    return router.push('/');
  }

  const selecteditems = {
    id : state?.cart?.Items[0].id,
    title : state?.cart?.Items[0].title,
    price : state?.cart?.Items[0].price*100,
    quantity : state?.cart?.Items[0].quantity,
  }

  // const selecteditems = {
  //   id: 2,
  //   price: 544,
  //   quantity: 1,
  //   title: 'Handmade Cotton Ball',
  // };

  // console.log(selecteditems);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ ...selecteditems }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className=" flex justify-center">
      <div className='bg-slate-300 lg:w-1/2 md:w-3/4 sm:w-cpmax p-20 shadow-xl my-10'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    </div>
  );
}
