import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const NewRequest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    toast.success('Request submitted successfully!');
  };

  return (
    <Wrapper>
      <CurrencyLink>Click here to view currency opportunities</CurrencyLink>
      <Heading>New request</Heading>
      <Form onSubmit={handleSubmit}>
        <InputLabel htmlFor="fullName">Full Name:</InputLabel>
        <Input type="text" id="fullName" name="fullName" required />

        <InputLabel htmlFor="email">Email:</InputLabel>
        <Input type="email" id="email" name="email" required />

        <InputLabel htmlFor="phoneNumber">Phone Number:</InputLabel>
        <Input type="tel" id="phoneNumber" name="phoneNumber" required />

        <InputLabel htmlFor="location">Location:</InputLabel>
        <Input type="text" id="location" name="location" required />

        <InputLabel htmlFor="issue">Describe the Issue:</InputLabel>
        <Textarea id="issue" name="issue" rows="4" required></Textarea>

        <SubmitButton type="submit">Submit Request</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default NewRequest;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CurrencyLink = styled.p`
  text-align: center;
  color: #3498db;
  cursor: pointer;
`;

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

