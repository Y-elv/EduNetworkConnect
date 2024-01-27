import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeFormContent from './StripeFormContent';
import styled from 'styled-components';

// Load Stripe outside of the component to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('your_stripe_public_key');

const StripeForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeFormContent />
    </Elements>
  );
};

export default StripeForm;
