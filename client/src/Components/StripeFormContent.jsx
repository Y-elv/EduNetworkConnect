// StripeFormContent.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';

const StripeFormContent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Create a PaymentMethod
    const { token, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Handle success (e.g., send the token to your server for payment processing)
      console.log('PaymentMethod created:', token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter the amount"
        />
      </label>
      <label>
        Card Details:
        <CardElement />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" disabled={!stripe}>
        Submit Payment
      </button>
    </form>
  );
};

export default StripeFormContent;
