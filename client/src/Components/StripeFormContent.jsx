// StripeFormContent.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { toast } from 'react-toastify';


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
      return;
    }
    setAmount("")
    toast.success("Funds received successfully")
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
        <p>Test card Number: 4242 4242 4242 4242</p>
      <Label>
        Amount:
        <Input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter the amount"
        />
      </Label>
      <Label>
        Card Details:
        <CardElement />
      </Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton type="submit" disabled={!stripe}>
        Submit Payment
      </SubmitButton>
    </FormWrapper>
  );
};



////////////styles

const FormWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export default StripeFormContent;
